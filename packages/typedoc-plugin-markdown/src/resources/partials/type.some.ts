import {
  ArrayType,
  ConditionalType,
  IndexedAccessType,
  InferredType,
  IntersectionType,
  IntrinsicType,
  QueryType,
  ReferenceType,
  ReflectionType,
  SomeType,
  TupleType,
  TypeOperatorType,
  UnionType,
  UnknownType,
} from 'typedoc';
import { Collapse } from '../../models';
import { MarkdownThemeRenderContext } from '../../render-context';
import { backTicks } from '../../support/els';
import { escapeChars } from '../../support/utils';

export function someType(
  context: MarkdownThemeRenderContext,
  someType: SomeType,
  collapse: Collapse = 'none',
): string {
  if (!someType) {
    return '';
  }

  if (someType instanceof ArrayType) {
    return '' + context.arrayType(someType);
  }

  if (someType instanceof ConditionalType) {
    return '' + context.conditionalType(someType);
  }

  if (someType instanceof IndexedAccessType) {
    return '' + context.indexAccessType(someType);
  }

  if (someType instanceof InferredType) {
    return '' + context.inferredType(someType);
  }

  if (someType instanceof IntersectionType && someType.types) {
    return '' + context.intersectionType(someType);
  }

  if (someType instanceof IntrinsicType && someType.name) {
    return '' + context.intrinsicType(someType);
  }

  if (someType instanceof QueryType) {
    return '' + context.queryType(someType);
  }

  if (someType instanceof ReferenceType) {
    return '' + context.referenceType(someType);
  }

  if (someType instanceof ReflectionType) {
    return '' + context.reflectionType(someType, collapse);
  }

  if (someType instanceof TypeOperatorType) {
    return '' + context.typeOperatorType(someType);
  }

  if (someType instanceof TupleType && someType.elements) {
    return '' + context.tupleType(someType);
  }

  if (someType instanceof UnionType && someType.types) {
    return '' + context.unionType(someType);
  }

  if (someType instanceof UnknownType) {
    return '' + context.unknownType(someType);
  }

  if (someType.toString() == 'null') {
    return backTicks('null');
  }

  return escapeChars(someType?.toString());
}
