import { backTicks } from '@plugin/libs/markdown';
import { MarkdownThemeContext } from '@plugin/theme';
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
export function someType(this: MarkdownThemeContext, model?: SomeType): string {
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
    return this.partials.reflectionType(model);
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

  if (model.toString() == 'null') {
    return backTicks('null');
  }

  return /\\/.test(model?.toString())
    ? model?.toString()
    : backTicks(model?.toString());
}
