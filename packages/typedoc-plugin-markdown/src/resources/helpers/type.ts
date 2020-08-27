import { DeclarationReflection, SignatureReflection } from 'typedoc';
import {
  ArrayType,
  IntersectionType,
  IntrinsicType,
  QueryType,
  ReferenceType,
  ReflectionType,
  StringLiteralType,
  TupleType,
  TypeOperatorType,
  TypeParameterType,
  UnionType,
} from 'typedoc/dist/lib/models/types';

import MarkdownTheme from '../../theme';

export function type(
  this:
    | ArrayType
    | IntersectionType
    | IntrinsicType
    | ReferenceType
    | StringLiteralType
    | TupleType
    | UnionType
    | TypeOperatorType
    | TypeParameterType
    | QueryType,
  expandType = true,
) {
  if (this instanceof ReferenceType && (this.reflection || (this.name && this.typeArguments))) {
    return getReferenceType(this);
  }

  if (this instanceof ArrayType && this.elementType) {
    return getArrayType(this);
  }

  if (this instanceof UnionType && this.types) {
    return getUnionType(this);
  }

  if (this instanceof IntersectionType && this.types) {
    return getIntersectionType(this);
  }

  if (this instanceof TupleType && this.elements) {
    return getTupleType(this);
  }

  if (this instanceof IntrinsicType && this.name) {
    return getIntrinsicType(this);
  }

  if (this instanceof StringLiteralType && this.value) {
    return getStringLiteralType(this);
  }

  if (this instanceof ReflectionType && (this.declaration.children || this.declaration.indexSignature)) {
    return expandType ? getLiteralType(this.declaration) : 'object';
  }

  if (this instanceof DeclarationReflection && this.children) {
    return expandType ? getLiteralType(this) : 'object';
  }

  if (this instanceof ReflectionType && this.declaration.signatures) {
    return getFunctionType(this.declaration.signatures);
  }

  if (this instanceof DeclarationReflection && this.signatures) {
    return getFunctionType(this.signatures);
  }

  if (this instanceof TypeOperatorType) {
    return getTypeOperatorType(this);
  }

  if (this instanceof QueryType) {
    return getQueryType(this);
  }

  return this ? this.toString().replace(/</g, '‹').replace(/>/g, '›') : '';
}

function getReferenceType(model: ReferenceType) {
  const reflection =
    model.reflection && model.reflection.url
      ? [`[${model.reflection.name}](${MarkdownTheme.handlebars.helpers.relativeURL(model.reflection.url)})`]
      : [model.name];
  if (model.typeArguments) {
    reflection.push(
      `‹${model.typeArguments
        .map((typeArgument) => {
          return `${type.call(typeArgument)}`;
        })
        .join(', ')}›`,
    );
  }
  return reflection.join('');
}

function getArrayType(model: ArrayType) {
  const arrayType = type.call(model.elementType);
  return model.elementType.type === 'union' ? `(${arrayType})[]` : `${arrayType}[]`;
}

function getUnionType(model: UnionType) {
  return model.types.map((unionType) => type.call(unionType)).join(' | ');
}

function getIntersectionType(model: IntersectionType) {
  return model.types.map((intersectionType) => type.call(intersectionType)).join(' & ');
}

function getTupleType(model: TupleType) {
  return `[${model.elements.map((element) => type.call(element)).join(', ')}]`;
}

function getIntrinsicType(model: IntrinsicType) {
  return model.name;
}

function getStringLiteralType(model: StringLiteralType) {
  return `\"${model.value}\" `;
}

function getLiteralType(declarationReflection: DeclarationReflection) {
  let indexSignature;
  if (declarationReflection.indexSignature) {
    const key = declarationReflection.indexSignature.parameters.map((param) => `[${param.name}:${param.type}]`);
    const obj = type.call(declarationReflection.indexSignature.type);
    indexSignature = `${key}: ${obj}; `;
  }
  let types;
  if (declarationReflection.children) {
    types = declarationReflection.children.map((obj) => {
      return `${obj.name}${obj.flags.includes('Optional') ? '?' : ''}: ${type.call(
        obj.signatures || obj.children ? obj : obj.type,
      )} ${obj.defaultValue ? ` = ${obj.defaultValue}` : ''}`;
    });
  }
  return `{ ${indexSignature ? indexSignature : ''}${types ? types.join('; ') : ''} }${
    declarationReflection.defaultValue ? ` = ${declarationReflection.defaultValue}` : ''
  }`;
}

export function getFunctionType(signatures: SignatureReflection[]) {
  const functions = signatures.map((fn) => {
    const params = fn.parameters
      ? fn.parameters.map((param) => {
          return `${param.flags.isRest ? '...' : ''}${param.name}${param.flags.isOptional ? '?' : ''}: ${type.call(
            param.type ? param.type : param,
          )}`;
        })
      : [];
    const returns = type.call(fn.type);
    return `(${params.join(',')}) => ${returns}`;
  });
  return functions;
}

function getTypeOperatorType(model: TypeOperatorType) {
  return 'keyof ' + type.call(model.target);
}

function getQueryType(model: QueryType) {
  return 'typeof ' + type.call(model.queryType);
}
