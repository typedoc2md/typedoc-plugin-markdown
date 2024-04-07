// THIS FILE IS AUTO GENERATED. DO NOT EDIT DIRECTLY.
import { MarkdownThemeContext } from '@plugin/theme';
import {
  ArrayType,
  Comment,
  CommentDisplayPart,
  ConditionalType,
  ContainerReflection,
  DeclarationHierarchy,
  DeclarationReflection,
  IndexedAccessType,
  InferredType,
  IntersectionType,
  IntrinsicType,
  LiteralType,
  NamedTupleMember,
  ParameterReflection,
  ProjectReflection,
  QueryType,
  ReferenceReflection,
  ReferenceType,
  Reflection,
  ReflectionCategory,
  ReflectionGroup,
  ReflectionKind,
  ReflectionType,
  SignatureReflection,
  SomeType,
  TupleType,
  TypeOperatorType,
  TypeParameterReflection,
  UnionType,
  UnknownType,
} from 'typedoc';

import { project } from './templates/project';
import { readme } from './templates/read-me';
import { reflection } from './templates/reflection';

import { comment } from './partials/comments.comment';
import { commentParts } from './partials/comments.commentParts';
import { body } from './partials/container.body';
import { categories } from './partials/container.categories';
import { groups } from './partials/container.groups';
import { members } from './partials/container.members';
import { accessor } from './partials/member.accessor';
import { constructor } from './partials/member.constructors';
import { declaration } from './partials/member.declaration';
import { declarationTitle } from './partials/member.declarationTitle';
import { enumMembersTable } from './partials/member.enumMembersTable';
import { hierarchy } from './partials/member.hierarchy';
import { indexSignature } from './partials/member.indexSignature';
import { inheritance } from './partials/member.inheritance';
import { memberTitle } from './partials/member.memberTitle';
import { memberWithGroups } from './partials/member.memberWithGroups';
import { parametersList } from './partials/member.parametersList';
import { parametersTable } from './partials/member.parametersTable';
import { declarationsTable } from './partials/member.propertiesTable';
import { referenceMember } from './partials/member.reference';
import { reflectionFlags } from './partials/member.reflectionFlags';
import { reflectionIndex } from './partials/member.reflectionIndex';
import { signature } from './partials/member.signature';
import { signatureParameters } from './partials/member.signatureParameters';
import { signatureReturns } from './partials/member.signatureReturns';
import { signatureTitle } from './partials/member.signatureTitle';
import { sources } from './partials/member.sources';
import { member } from './partials/member';
import { typeAndParent } from './partials/member.typeAndParent';
import { typeArguments } from './partials/member.typeArguments';
import { typeDeclaration } from './partials/member.typeDeclaration';
import { typeDeclarationList } from './partials/member.typeDeclarationList';
import { typeDeclarationTable } from './partials/member.typeDeclarationTable';
import { typeParametersList } from './partials/member.typeParametersList';
import { typeParametersTable } from './partials/member.typeParametersTable';
import { breadcrumbs } from './partials/page.breadcrumbs';
import { header } from './partials/page.header';
import { packagesIndex } from './partials/page.packagesIndex';
import { pageTitle } from './partials/page.pageTtitle';
import { arrayType } from './partials/type.array';
import { conditionalType } from './partials/type.conditional';
import { indexAccessType } from './partials/type.index-access';
import { inferredType } from './partials/type.inferred';
import { intersectionType } from './partials/type.intersection';
import { intrinsicType } from './partials/type.intrinsic';
import { literalType } from './partials/type.literal';
import { namedTupleType } from './partials/type.named-tuple';
import { queryType } from './partials/type.query';
import { referenceType } from './partials/type.reference';
import { declarationType } from './partials/type.reflection.declaration';
import { functionType } from './partials/type.reflection.function';
import { reflectionType } from './partials/type.reflection';
import { someType } from './partials/type.some';
import { tupleType } from './partials/type.tuple';
import { typeOperatorType } from './partials/type.type-operator';
import { unionType } from './partials/type.union';
import { unknownType } from './partials/type.unknown';

import { getDeclarationComment } from './helpers/get-declaration-comment';
import { getDeclarationType } from './helpers/get-declaration-type';
import { getFlattenedDeclarations } from './helpers/get-flattened-declarations';
import { getHierarchyType } from './helpers/get-hierarchy-type';
import { getKeyword } from './helpers/get-keyword';
import { getModifier } from './helpers/get-modifier';
import { getParameterDefaultValue } from './helpers/get-parameter-default-value';
import { getReturnType } from './helpers/get-return-type';
import { isGroupKind } from './helpers/is-group-kind';

export const templates = (context: MarkdownThemeContext) => {
  return {
    /**
     * Template that maps to the root project reflection. This will be the index page / documentation root page.
     *
     */
    project: () => project.apply(context, []) as string,
    /**
     * Template that specifically maps to the resolved readme file. This template is not used when 'readme' is set to 'none'.
     *
     */
    readme: () => readme.apply(context, []) as string,
    /**
     * Template that maps to individual reflection models.
     *
     */
    reflection: () => reflection.apply(context, []) as string,
  };
};

export const partials = (context: MarkdownThemeContext) => {
  return {
    /**
     *
     *
     * @category Comment Partials
     */
    comment: (
      model: Comment,
      options: {
        headingLevel?: number | undefined;
        showSummary?: boolean | undefined;
        showTags?: boolean | undefined;
        isTableColumn?: boolean | undefined;
      } = {},
    ) => comment.apply(context, [model, options]) as string,
    /**
     *
     *
     * @category Comment Partials
     */
    commentParts: (model: CommentDisplayPart[]) =>
      commentParts.apply(context, [model]) as string,
    /**
     *
     *
     * @category Container Partials
     */
    body: (model: ContainerReflection, options: { headingLevel: number }) =>
      body.apply(context, [model, options]) as string,
    /**
     * Renders a collection of reflection categories.
     *
     * @category Container Partials
     */
    categories: (
      model: ReflectionCategory[],
      options: { headingLevel: number },
    ) => categories.apply(context, [model, options]) as string,
    /**
     * Renders a collection of reflection groups.
     *
     * @category Container Partials
     */
    groups: (model: ReflectionGroup[], options: { headingLevel: number }) =>
      groups.apply(context, [model, options]) as string,
    /**
     * Renders a collection of members.
     *
     * @category Container Partials
     */
    members: (
      model: DeclarationReflection[],
      options: { headingLevel: number },
    ) => members.apply(context, [model, options]) as string,
    /**
     * Renders an accessor member.
     *
     * @category Member Partials
     */
    accessor: (
      model: DeclarationReflection,
      options: { headingLevel: number },
    ) => accessor.apply(context, [model, options]) as string,
    /**
     * Renders an constructor member.
     *
     * @category Member Partials
     */
    constructor: (
      model: DeclarationReflection,
      options: { headingLevel: number },
    ) => constructor.apply(context, [model, options]) as string,
    /**
     * Renders a standard declaration member.
     *
     * @category Member Partials
     */
    declaration: (
      model: DeclarationReflection,
      options: { headingLevel: number; nested?: boolean | undefined } = {
        headingLevel: 2,
        nested: false,
      },
    ) => declaration.apply(context, [model, options]) as string,
    /**
     * Remders a declaration title.
     *
     * @category Member Partials
     */
    declarationTitle: (model: DeclarationReflection) =>
      declarationTitle.apply(context, [model]) as string,
    /**
     * Renders enum members as a table.
     *
     * @category Member Partials
     */
    enumMembersTable: (model: DeclarationReflection[]) =>
      enumMembersTable.apply(context, [model]) as string,
    /**
     * Renders an declaration hierachy section.
     *
     * @category Member Partials
     */
    hierarchy: (
      model: DeclarationHierarchy,
      options: { headingLevel: number },
    ) => hierarchy.apply(context, [model, options]) as string,
    /**
     * Renders an index signature block
     *
     * @category Member Partials
     */
    indexSignature: (model: SignatureReflection) =>
      indexSignature.apply(context, [model]) as string,
    /**
     * Renders an inheritance section.
     *
     * @category Member Partials
     */
    inheritance: (
      model: DeclarationReflection | SignatureReflection,
      options: { headingLevel: number },
    ) => inheritance.apply(context, [model, options]) as string,
    /**
     * Renders the main member title.
     *
     * @category Member Partials
     */
    memberTitle: (model: DeclarationReflection) =>
      memberTitle.apply(context, [model]) as string,
    /**
     * Renders a top-level member that contains group and child members such as Classes, Interfaces and Enums.
     *
     * @category Member Partials
     */
    memberWithGroups: (
      model: DeclarationReflection,
      options: { headingLevel: number },
    ) => memberWithGroups.apply(context, [model, options]) as string,
    /**
     *
     *
     * @category Member Partials
     */
    parametersList: (model: ParameterReflection[]) =>
      parametersList.apply(context, [model]) as string,
    /**
     *
     *
     * @category Member Partials
     */
    parametersTable: (model: ParameterReflection[]) =>
      parametersTable.apply(context, [model]) as string,
    /**
 * Renders a collection of properties in a table.

There is no association list partial for properties as these are handled as a standard list of members.
 *
 * @category Member Partials
 *
 */
    declarationsTable: (
      model: DeclarationReflection[],
      options?: { isEventProps: boolean } | undefined,
    ) => declarationsTable.apply(context, [model, options]) as string,
    /**
     * Renders an reference member.
     *
     * @category Member Partials
     */
    referenceMember: (model: ReferenceReflection) =>
      referenceMember.apply(context, [model]) as string,
    /**
     * Renders the flags of a reflection.
     *
     * @category Member Partials
     */
    reflectionFlags: (model: Reflection) =>
      reflectionFlags.apply(context, [model]) as string,
    /**
     * Renders the index section of a reflection.
     *
     * @category Member Partials
     */
    reflectionIndex: (
      model: DeclarationReflection | ProjectReflection,
      options: { headingLevel: number },
    ) => reflectionIndex.apply(context, [model, options]) as string,
    /**
     * Renders a signature member.
     *
     * @category Member Partials
     */
    signature: (
      model: SignatureReflection,
      options: {
        headingLevel: number;
        nested?: boolean | undefined;
        accessor?: string | undefined;
      },
    ) => signature.apply(context, [model, options]) as string,
    /**
     *
     *
     * @category Member Partials
     */
    signatureParameters: (model: ParameterReflection[]) =>
      signatureParameters.apply(context, [model]) as string,
    /**
     *
     *
     * @category Member Partials
     */
    signatureReturns: (
      model: SignatureReflection,
      options: { headingLevel: number },
    ) => signatureReturns.apply(context, [model, options]) as string,
    /**
     *
     *
     * @category Member Partials
     */
    signatureTitle: (
      model: SignatureReflection,
      options?:
        | { accessor?: string | undefined; includeType?: boolean | undefined }
        | undefined,
    ) => signatureTitle.apply(context, [model, options]) as string,
    /**
     *
     *
     * @category Member Partials
     */
    sources: (
      model: DeclarationReflection | SignatureReflection,
      options: { headingLevel: number },
    ) => sources.apply(context, [model, options]) as string,
    /**
     *
     *
     * @category Member Partials
     */
    member: (
      model: DeclarationReflection,
      options: { headingLevel: number; nested?: boolean | undefined },
    ) => member.apply(context, [model, options]) as string,
    /**
     *
     *
     * @category Member Partials
     */
    typeAndParent: (model: ArrayType | ReferenceType) =>
      typeAndParent.apply(context, [model]) as string,
    /**
     *
     *
     * @category Member Partials
     */
    typeArguments: (
      model: SomeType[],
      options?: { foreCollpase?: boolean | undefined } | undefined,
    ) => typeArguments.apply(context, [model, options]) as string,
    /**
     *
     *
     * @category Member Partials
     */
    typeDeclaration: (
      model: DeclarationReflection[],
      options: { headingLevel: number },
    ) => typeDeclaration.apply(context, [model, options]) as string,
    /**
     *
     *
     * @category Member Partials
     */
    typeDeclarationList: (
      model: DeclarationReflection[],
      headingLevel: number,
    ) => typeDeclarationList.apply(context, [model, headingLevel]) as string,
    /**
     *
     *
     * @category Member Partials
     */
    typeDeclarationTable: (model: DeclarationReflection[]) =>
      typeDeclarationTable.apply(context, [model]) as string,
    /**
     *
     *
     * @category Member Partials
     */
    typeParametersList: (model: TypeParameterReflection[]) =>
      typeParametersList.apply(context, [model]) as string,
    /**
     *
     *
     * @category Member Partials
     */
    typeParametersTable: (model: TypeParameterReflection[]) =>
      typeParametersTable.apply(context, [model]) as string,
    /**
     *
     *
     * @category Page Partials
     */
    breadcrumbs: () => breadcrumbs.apply(context, []) as string,
    /**
     *
     *
     * @category Page Partials
     */
    header: () => header.apply(context, []) as string,
    /**
     *
     *
     * @category Page Partials
     */
    packagesIndex: (model: ProjectReflection) =>
      packagesIndex.apply(context, [model]) as string,
    /**
     *
     *
     * @category Page Partials
     */
    pageTitle: () => pageTitle.apply(context, []) as string,
    /**
     *
     *
     * @category Type Partials
     */
    arrayType: (model: ArrayType) =>
      arrayType.apply(context, [model]) as string,
    /**
     *
     *
     * @category Type Partials
     */
    conditionalType: (model: ConditionalType) =>
      conditionalType.apply(context, [model]) as string,
    /**
     *
     *
     * @category Type Partials
     */
    indexAccessType: (model: IndexedAccessType) =>
      indexAccessType.apply(context, [model]) as string,
    /**
     *
     *
     * @category Type Partials
     */
    inferredType: (model: InferredType) =>
      inferredType.apply(context, [model]) as string,
    /**
     *
     *
     * @category Type Partials
     */
    intersectionType: (model: IntersectionType) =>
      intersectionType.apply(context, [model]) as string,
    /**
     *
     *
     * @category Type Partials
     */
    intrinsicType: (model: IntrinsicType) =>
      intrinsicType.apply(context, [model]) as string,
    /**
     *
     *
     * @category Type Partials
     */
    literalType: (model: LiteralType) =>
      literalType.apply(context, [model]) as string,
    /**
     *
     *
     * @category Type Partials
     */
    namedTupleType: (model: NamedTupleMember) =>
      namedTupleType.apply(context, [model]) as string,
    /**
     *
     *
     * @category Type Partials
     */
    queryType: (model: QueryType) =>
      queryType.apply(context, [model]) as string,
    /**
     *
     *
     * @category Type Partials
     */
    referenceType: (model: ReferenceType) =>
      referenceType.apply(context, [model]) as string,
    /**
     *
     *
     * @category Type Partials
     */
    declarationType: (model: DeclarationReflection) =>
      declarationType.apply(context, [model]) as string,
    /**
     *
     *
     * @category Type Partials
     */
    functionType: (
      model: SignatureReflection[],
      options?: { forceParameterType: boolean } | undefined,
    ) => functionType.apply(context, [model, options]) as string,
    /**
     *
     *
     * @category Type Partials
     */
    reflectionType: (
      model: ReflectionType,
      options?: { foreCollpase?: boolean | undefined } | undefined,
    ) => reflectionType.apply(context, [model, options]) as string,
    /**
     * Takes a generic Type and returns the appropriate partial for it.
     *
     * @category Type Partials
     */
    someType: (model?: SomeType | undefined) =>
      someType.apply(context, [model]) as string,
    /**
     *
     *
     * @category Type Partials
     */
    tupleType: (model: TupleType) =>
      tupleType.apply(context, [model]) as string,
    /**
     *
     *
     * @category Type Partials
     */
    typeOperatorType: (model: TypeOperatorType) =>
      typeOperatorType.apply(context, [model]) as string,
    /**
     *
     *
     * @category Type Partials
     */
    unionType: (model: UnionType) =>
      unionType.apply(context, [model]) as string,
    /**
     *
     *
     * @category Type Partials
     */
    unknownType: (model: UnknownType) =>
      unknownType.apply(context, [model]) as string,
  };
};

export const helpers = (context: MarkdownThemeContext) => {
  return {
    getDeclarationComment: (model: DeclarationReflection) =>
      getDeclarationComment.apply(context, [model]) as any,
    getDeclarationType: (model: DeclarationReflection) =>
      getDeclarationType.apply(context, [model]) as SomeType | undefined,
    getFlattenedDeclarations: (
      model: DeclarationReflection[],
      options?: { includeSignatures: boolean } | undefined,
    ) =>
      getFlattenedDeclarations.apply(context, [
        model,
        options,
      ]) as DeclarationReflection[],
    getHierarchyType: (
      model: SomeType,
      options?: { isTarget: boolean } | undefined,
    ) => getHierarchyType.apply(context, [model, options]) as string,
    getKeyword: (model: ReflectionKind) =>
      getKeyword.apply(context, [model]) as string,
    getModifier: (model: DeclarationReflection) =>
      getModifier.apply(context, [model]) as string | null,
    getParameterDefaultValue: (model: ParameterReflection) =>
      getParameterDefaultValue.apply(context, [model]) as string,
    getReturnType: (model?: SomeType | undefined) =>
      getReturnType.apply(context, [model]) as string,
    isGroupKind: (model: DeclarationReflection | SignatureReflection) =>
      isGroupKind.apply(context, [model]) as boolean,
  };
};
