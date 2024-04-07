import { DeclarationReflection, ReflectionKind } from 'typedoc';

export function getFlattenedDeclarations(
  model: DeclarationReflection[],
  options?: { includeSignatures: boolean },
): DeclarationReflection[] {
  const getFlattenedDeclarations = (current: DeclarationReflection) => {
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

    if (options?.includeSignatures) {
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
      ? [...acc, current, ...getFlattenedDeclarations(current)]
      : [...acc, current];
  };

  return model.reduce(
    (acc: DeclarationReflection[], current: DeclarationReflection) =>
      parseDeclarations(current, acc),
    [],
  );
}
