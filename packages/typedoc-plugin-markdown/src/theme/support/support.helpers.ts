import {
  DeclarationReflection,
  ParameterReflection,
  ReflectionKind,
  SignatureReflection,
} from 'typedoc';

export const helpers = () => {
  return {
    getKeyword: (kind: ReflectionKind) => {
      const KEYWORD_MAP = {
        [ReflectionKind.Class]: 'class',
        [ReflectionKind.Interface]: 'interface',
        [ReflectionKind.Enum]: 'enum',
        [ReflectionKind.TypeAlias]: 'type',
        [ReflectionKind.Function]: 'function',
      };
      return KEYWORD_MAP[kind];
    },
    getDeclarationType: (declaration: DeclarationReflection) => {
      if (declaration.signatures) {
        return declaration.signatures[0].type;
      }
      if (declaration.getSignature) {
        return declaration.getSignature.type;
      }
      if (declaration.setSignature) {
        return declaration.setSignature.type;
      }
      return declaration.type;
    },
    getParameterDefaultValue: (parameter: ParameterReflection) => {
      return parameter.defaultValue && parameter.defaultValue !== '...'
        ? parameter.defaultValue
        : 'undefined';
    },
    getModifier(reflection: DeclarationReflection) {
      if (reflection.flags.isAbstract) {
        return 'abstract';
      }
      if (reflection.flags.isPrivate) {
        return 'private';
      }
      if (reflection.flags.isReadonly) {
        return 'readonly';
      }
      if (reflection.flags.isStatic) {
        return 'static';
      }
      if (reflection.flags.isProtected) {
        return 'protected';
      }
      if (reflection.flags.isPublic) {
        return 'public';
      }
      if (reflection.getSignature) {
        return 'get';
      }
      if (reflection.setSignature) {
        return 'set';
      }
      return null;
    },
    isGroupKind(reflection: DeclarationReflection | SignatureReflection) {
      const groupKinds = [
        ReflectionKind.Class,
        ReflectionKind.Interface,
        ReflectionKind.Enum,
        ReflectionKind.Function,
        ReflectionKind.Variable,
        ReflectionKind.TypeAlias,
      ];
      return groupKinds.includes(reflection.kind);
    },
    flattenDeclarations: (
      props: DeclarationReflection[],
      includeSignatures = false,
    ) => {
      const flattenDeclarations = (current: DeclarationReflection) => {
        return (current.type as any)?.declaration?.children?.reduce(
          (acc: DeclarationReflection[], child: DeclarationReflection) => {
            const childObj = {
              ...child,
              name: `${current.name}.${child.name}`,
            } as DeclarationReflection;
            return parseDeclarations(childObj, acc);
          },
          [],
        );
      };

      const parseDeclarations = (
        current: DeclarationReflection,
        acc: DeclarationReflection[],
      ) => {
        const shouldFlatten = (current.type as any)?.declaration?.children;
        const isAccessor = current.kind === ReflectionKind.Accessor;

        if (includeSignatures) {
          if (isAccessor) {
            const accessors: any[] = [];
            if (current.getSignature) {
              accessors.push({
                ...current,
                name: `get ${current.name}`,
                type: current.getSignature.type,
                comment: current.getSignature?.comment,
              });
            }
            if (current.setSignature) {
              accessors.push({
                ...current,
                name: `set ${current.name}`,
                type: current.setSignature.type,
                comment: current.setSignature?.comment,
              });
            }
            return [...acc, ...accessors];
          }

          if (current.signatures?.length) {
            const signatures = current.signatures.map((signature) => {
              return {
                ...current,
                name: signature.name,
                type: signature.type,
                comment: signature.comment,
              };
            });
            return [...acc, ...signatures];
          }
        }

        return shouldFlatten
          ? [...acc, current, ...flattenDeclarations(current)]
          : [...acc, current];
      };

      return props.reduce(
        (acc: DeclarationReflection[], current: DeclarationReflection) =>
          parseDeclarations(current, acc),
        [],
      );
    },
  };
};
