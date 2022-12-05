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
import { Collapse } from '../models';
import { backTicks } from '../support/els';
import { MarkdownThemeRenderContext } from '../theme-context';

export function someType(
  context: MarkdownThemeRenderContext,
  someType: SomeType,
  collapse: Collapse = 'none',
  emphasis = true,
) {
  if (!someType) {
    return '';
  }

  if (someType instanceof ArrayType) {
    return '' + context.partials.arrayType(someType, emphasis);
  }

  if (someType instanceof ConditionalType) {
    return '' + context.partials.conditionalType(someType);
  }

  if (someType instanceof IndexedAccessType) {
    return '' + context.partials.indexAccessType(someType);
  }

  if (someType instanceof InferredType) {
    return '' + context.partials.inferredType(someType);
  }

  if (someType instanceof IntersectionType && someType.types) {
    return '' + context.partials.intersectionType(someType);
  }

  if (someType instanceof IntrinsicType && someType.name) {
    return '' + context.partials.intrinsicType(someType, emphasis);
  }

  if (someType instanceof QueryType) {
    return '' + context.partials.queryType(someType);
  }

  if (someType instanceof ReferenceType) {
    return '' + context.partials.referenceType(someType);
  }

  if (someType instanceof ReflectionType) {
    return '' + context.partials.reflectionType(someType, collapse);
  }

  if (someType instanceof TypeOperatorType) {
    return '' + context.partials.typeOperatorType(someType);
  }

  if (someType instanceof TupleType && someType.elements) {
    return '' + context.partials.tupleType(someType);
  }

  if (someType instanceof UnionType && someType.types) {
    return '' + context.partials.unionType(someType, emphasis);
  }

  if (someType instanceof UnknownType) {
    return '' + context.partials.unknownType(someType);
  }

  return backTicks(someType?.toString());
}
