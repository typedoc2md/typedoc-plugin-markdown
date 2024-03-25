import { backTicks } from '@theme/lib/markdown';
import { MarkdownThemeRenderContext } from '@theme/render-context';
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

/**
 * Takes a generic Type and returns the appropriate partial for it.
 *
 * @category Type Partials
 */
export function someType(
  context: MarkdownThemeRenderContext,
  model: SomeType,
): string {
  if (!model) {
    return '';
  }

  if (model instanceof ArrayType) {
    return context.partials.arrayType(model);
  }

  if (model instanceof ConditionalType) {
    return context.partials.conditionalType(model);
  }

  if (model instanceof IndexedAccessType) {
    return context.partials.indexAccessType(model);
  }

  if (model instanceof InferredType) {
    return context.partials.inferredType(model);
  }

  if (model instanceof IntersectionType && model.types) {
    return context.partials.intersectionType(model);
  }

  if (model instanceof IntrinsicType && model.name) {
    return context.partials.intrinsicType(model);
  }

  if (model instanceof QueryType) {
    return context.partials.queryType(model);
  }

  if (model instanceof ReferenceType) {
    return context.partials.referenceType(model);
  }

  if (model instanceof ReflectionType) {
    return context.partials.reflectionType(model);
  }

  if (model instanceof TypeOperatorType) {
    return context.partials.typeOperatorType(model);
  }

  if (model instanceof TupleType && model.elements) {
    return context.partials.tupleType(model);
  }

  if (model instanceof UnionType && model.types) {
    return context.partials.unionType(model);
  }

  if (model instanceof UnknownType) {
    return context.partials.unknownType(model);
  }

  if (model instanceof NamedTupleMember) {
    return context.partials.namedTupleType(model);
  }

  if (model.toString() == 'null') {
    return backTicks('null');
  }

  return backTicks(model?.toString());
}
