const { Converter, TypeScript } = require('typedoc');

exports.load = function ({ application }) {
  /** @type {Map<Reflection, string>} */
  const defaultValues = new Map();

  const printer = TypeScript.createPrinter({
    removeComments: true,
    omitTrailingSemicolon: true,
  });

  application.converter.on(
    Converter.EVENT_CREATE_DECLARATION,
    (_context, reflection) => {
      const node =
        reflection.project.getSymbolFromReflection(reflection)
          ?.declarations?.[0];
      if (!node || !node.initializer) return;

      if (
        node.initializer.kind === TypeScript.SyntaxKind.ObjectLiteralExpression
      ) {
        defaultValues.set(
          reflection,
          printer.printNode(
            TypeScript.EmitHint.Expression,
            node.initializer,
            node.getSourceFile(),
          ),
        );
      }
    },
  );

  application.converter.on(Converter.EVENT_RESOLVE_BEGIN, () => {
    for (const [refl, init] of defaultValues) {
      refl.defaultValue = init;
    }
    defaultValues.clear();
  });
};
