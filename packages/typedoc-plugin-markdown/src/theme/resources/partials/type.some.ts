import {
  ArrayType,
  ConditionalType,
  IndexedAccessType,
  InferredType,
  IntersectionType,
  IntrinsicType,
  NamedTupleMember,
  QueryType,
  ReferenceType,
  ReflectionType,
  SomeType,
  TupleType,
  TypeOperatorType,
  UnionType,
  UnknownType,
} from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { backTicks } from '../../../support/elements';

/**
 * @category Partials
 */
export function someType(
  context: MarkdownThemeRenderContext,
  someType: SomeType,
  collapse = false,
  format = false,
): string {
  if (!someType) {
    return '';
  }

  if (someType instanceof ArrayType) {
    return context.arrayType(someType);
  }

  if (someType instanceof ConditionalType) {
    return context.conditionalType(someType);
  }

  if (someType instanceof IndexedAccessType) {
    return context.indexAccessType(someType);
  }

  if (someType instanceof InferredType) {
    return context.inferredType(someType);
  }

  if (someType instanceof IntersectionType && someType.types) {
    return context.intersectionType(someType);
  }

  if (someType instanceof IntrinsicType && someType.name) {
    return context.intrinsicType(someType);
  }

  if (someType instanceof QueryType) {
    return context.queryType(someType);
  }

  if (someType instanceof ReferenceType) {
    return context.referenceType(someType);
  }

  if (someType instanceof ReflectionType) {
    return context.reflectionType(someType, collapse, format);
  }

  if (someType instanceof TypeOperatorType) {
    return context.typeOperatorType(someType);
  }

  if (someType instanceof TupleType && someType.elements) {
    return context.tupleType(someType);
  }

  if (someType instanceof UnionType && someType.types) {
    return context.unionType(someType);
  }

  if (someType instanceof UnknownType) {
    return context.unknownType(someType);
  }

  if (someType instanceof NamedTupleMember) {
    return context.namedTupleType(someType);
  }

  if (someType.toString() == 'null') {
    return backTicks('null');
  }

  return backTicks(someType?.toString());
}
