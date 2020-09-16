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
import { escape } from './escape';

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
  expandType = false,
) {
  if (
    this instanceof ReferenceType &&
    (this.reflection || (this.name && this.typeArguments))
  ) {
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

  if (
    this instanceof ReflectionType &&
    (this.declaration.children || this.declaration.indexSignature)
  ) {
    return expandType ? getLiteralType(this.declaration) : 'object';
  }

  if (this instanceof DeclarationReflection && this.children) {
    return expandType ? getLiteralType(this) : 'object';
  }

  if (this instanceof ReflectionType && this.declaration.signatures) {
    return expandType
      ? getFunctionType(this.declaration.signatures)
      : 'function';
  }

  if (this instanceof DeclarationReflection && this.signatures) {
    return expandType ? getFunctionType(this.signatures) : 'function';
  }

  if (this instanceof TypeOperatorType) {
    return getTypeOperatorType(this);
  }

  if (this instanceof QueryType) {
    return getQueryType(this);
  }

  return this ? escape(this.toString()) : '';
}

function getReferenceType(model: ReferenceType) {
  const reflection =
    model.reflection && model.reflection.url
      ? [
          `[${
            model.reflection.name
          }](${MarkdownTheme.HANDLEBARS.helpers.relativeURL(
            model.reflection.url,
          )})`,
        ]
      : [model.name];
  if (model.typeArguments && model.typeArguments.length > 0) {
    reflection.push(
      `\\<${model.typeArguments
        .map((typeArgument) => `${type.call(typeArgument)}`)
        .join(', ')}>`,
    );
  }
  return reflection.join('');
}

function getArrayType(model: ArrayType) {
  const arrayType = type.call(model.elementType);
  return model.elementType.type === 'union'
    ? `(${arrayType})[]`
    : `${arrayType}[]`;
}

function getUnionType(model: UnionType) {
  return model.types
    .map((unionType) => type.call(unionType, true))
    .join(' \\| ');
}

function getIntersectionType(model: IntersectionType) {
  return model.types
    .map((intersectionType) => type.call(intersectionType))
    .join(' & ');
}

function getTupleType(model: TupleType) {
  return `[${model.elements.map((element) => type.call(element)).join(', ')}]`;
}

function getIntrinsicType(model: IntrinsicType) {
  return model.name;
}

function getStringLiteralType(model: StringLiteralType) {
  return `\\"${escape(model.value)}\\"`;
}

function getLiteralType(model: DeclarationReflection) {
  let indexSignature = '';
  const declarationIndexSignature = model.indexSignature;
  if (declarationIndexSignature) {
    const key = declarationIndexSignature.parameters
      ? declarationIndexSignature.parameters.map(
          (param) => `[${param.name}:${param.type}]`,
        )
      : '';
    const obj = type.call(declarationIndexSignature.type, true);
    indexSignature = `${key}: ${obj}; `;
  }
  let types;
  if (model.children) {
    types = model.children.map((obj) => {
      return `${obj.name}${obj.flags.isOptional ? '?' : ''}: ${type.call(
        obj.signatures || obj.children ? obj : obj.type,
        true,
      )} ${obj.defaultValue ? `= ${escape(obj.defaultValue)}` : ''}`;
    });
  }
  return `{ ${indexSignature ? indexSignature : ''}${
    types ? types.join('; ') : ''
  } }${model.defaultValue ? `= ${escape(model.defaultValue)}` : ''}`;
}

export function getFunctionType(modelSignatures: SignatureReflection[]) {
  const functions = modelSignatures.map((fn) => {
    const typeParams = fn.typeParameters
      ? `\\<${fn.typeParameters
          .map((typeParameter) => typeParameter.name)
          .join(', ')}>`
      : [];
    const params = fn.parameters
      ? fn.parameters.map((param) => {
          return `${param.flags.isRest ? '...' : ''}${param.name}${
            param.flags.isOptional ? '?' : ''
          }: ${type.call(param.type ? param.type : param)}`;
        })
      : [];
    const returns = type.call(fn.type, true);

    return typeParams + `(${params.join(',')}) => ${returns}`;
  });
  return functions.join('');
}

function getTypeOperatorType(model: TypeOperatorType) {
  return `${model.operator} ${type.call(model.target)}`;
}

function getQueryType(model: QueryType) {
  return `typeof ${type.call(model.queryType)}`;
}
