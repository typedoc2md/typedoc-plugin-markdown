import { MarkdownThemeContext } from '@plugin/theme/index.js';
import { Reflection } from 'typedoc';
import ts from 'typescript';

export function getCompilerSource(
  this: MarkdownThemeContext,
  reflection: Reflection,
) {
  const symbol = this.page.project.getSymbolFromReflection(reflection);

  if (!symbol) return;

  const valueDeclaration = (symbol.declarations || [])[
    symbol.declarations ? symbol.declarations.length - 1 : 0
  ];

  return getCode(valueDeclaration);
}

function getCode(valueDeclaration: ts.Declaration) {
  const getStartPos = ts.getLineAndCharacterOfPosition(
    valueDeclaration.getSourceFile(),
    getLocationNode(valueDeclaration).getStart(),
  );
  const getEndPos = ts.getLineAndCharacterOfPosition(
    valueDeclaration.getSourceFile(),
    getLocationNode(valueDeclaration).getEnd(),
  );
  const fileSource = valueDeclaration?.getSourceFile().getFullText();
  const lines = fileSource?.split('\n');
  const lineOut = lines
    ?.slice(getStartPos.line, getEndPos.line + 1)
    .map((line, index) => {
      if (index === 0) {
        const equalIndex = line.indexOf('=');
        const processedLine =
          equalIndex !== -1 ? line.slice(equalIndex + 1).trim() : line;
        return processedLine.replace(/\breturn /g, '');
      }
      return line;
    })
    .join('\n');

  if (lineOut.startsWith('  ')) {
    return lineOut
      .split('\n') // Split back into lines
      .map((line) => (line.startsWith('  ') ? line.slice(2) : line))
      .join('\n');
  }
  return lineOut;
}

function getLocationNode(valueDeclaration: ts.Declaration) {
  if (ts.isVariableDeclaration(valueDeclaration)) {
    return valueDeclaration.parent;
  }
  return valueDeclaration;
}
