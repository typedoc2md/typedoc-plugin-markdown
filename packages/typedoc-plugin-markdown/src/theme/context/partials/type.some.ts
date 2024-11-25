import { backTicks } from '@plugin/libs/markdown/index.js';
import { MarkdownThemeContext } from '@plugin/theme/index.js';
import {
  ArrayType,
  ConditionalType,
  IndexedAccessType,
  InferredType,
  IntersectionType,
  IntrinsicType,
  NamedTupleMember,
  OptionalType,
  QueryType,
  ReferenceType,
  ReflectionType,
  SomeType,
  TupleType,
  TypeOperatorType,
  UnionType,
  UnknownType,
} from 'typedoc';

export function someType(
  this: MarkdownThemeContext,
  model?: SomeType,
  options?: { forceCollapse?: boolean },
): string {
  if (!model) {
    return '';
  }

  if (model instanceof ArrayType) {
    return this.partials.arrayType(model);
  }

  if (model instanceof ConditionalType) {
    return this.partials.conditionalType(model);
  }

  if (model instanceof IndexedAccessType) {
    return this.partials.indexAccessType(model);
  }

  if (model instanceof InferredType) {
    return this.partials.inferredType(model);
  }

  if (model instanceof IntersectionType && model.types) {
    return this.partials.intersectionType(model);
  }

  if (model instanceof IntrinsicType && model.name) {
    return this.partials.intrinsicType(model);
  }

  if (model instanceof QueryType) {
    return this.partials.queryType(model);
  }

  if (model instanceof ReferenceType) {
    return this.partials.referenceType(model);
  }

  if (model instanceof ReflectionType) {
    return this.partials.reflectionType(model, {
      forceCollapse: options?.forceCollapse,
    });
  }

  if (model instanceof TypeOperatorType) {
    return this.partials.typeOperatorType(model);
  }

  if (model instanceof TupleType && model.elements) {
    return this.partials.tupleType(model);
  }

  if (model instanceof UnionType && model.types) {
    return this.partials.unionType(model);
  }

  if (model instanceof UnknownType) {
    return this.partials.unknownType(model);
  }

  if (model instanceof NamedTupleMember) {
    return this.partials.namedTupleType(model);
  }

  if (model instanceof OptionalType) {
    return this.partials.someType(model.elementType) + '?';
  }

  if (model.toString() == 'null') {
    return backTicks('null');
  }

  return backTicks(model?.toString());
}
