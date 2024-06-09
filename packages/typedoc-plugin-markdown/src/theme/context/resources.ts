// THIS FILE IS AUTO GENERATED. DO NOT EDIT DIRECTLY.
import { MarkdownPageEvent } from 'app/events';
import { MarkdownThemeContext } from 'theme';
import {
  ArrayType,
  Comment,
  CommentDisplayPart,
  ConditionalType,
  ContainerReflection,
  DeclarationHierarchy,
  DeclarationReflection,
  DocumentReflection,
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
import { templates, partials, helpers } from './index';

export const resourceTemplates = (context: MarkdownThemeContext) => {
  return {
    /**
     * Template that maps to a project document.
     */

    document: (page: MarkdownPageEvent<DocumentReflection>) =>
      templates.document.apply(context, [page]) as string,
    /**
     * Template that maps to the root project reflection. This will be the index page / documentation root page.
     */

    project: (page: MarkdownPageEvent<ProjectReflection>) =>
      templates.project.apply(context, [page]) as string,
    /**
     * Template that specifically maps to the resolved readme file. This template is not used when 'readme' is set to 'none'.
     */

    readme: (page: MarkdownPageEvent<ProjectReflection>) =>
      templates.readme.apply(context, [page]) as string,
    /**
     * Template that maps to individual reflection models.
     */

    reflection: (page: MarkdownPageEvent<DeclarationReflection>) =>
      templates.reflection.apply(context, [page]) as string,
  };
};

export const resourcePartials = (context: MarkdownThemeContext) => {
  return {
    /**
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
    ) => partials.comment.apply(context, [model, options]) as string,
    /**
     *
     * @category Comment Partials
     */

    commentParts: (model: CommentDisplayPart[]) =>
      partials.commentParts.apply(context, [model]) as string,
    /**
     *
     * @category Container Partials
     */

    body: (model: ContainerReflection, options: { headingLevel: number }) =>
      partials.body.apply(context, [model, options]) as string,
    /**
     * Renders a collection of reflection categories.
     * @category Container Partials
     */

    categories: (
      model: ReflectionCategory[],
      options: { headingLevel: number },
    ) => partials.categories.apply(context, [model, options]) as string,
    /**
     * Renders a collection of reflection groups.
     * @category Container Partials
     */

    groups: (model: ReflectionGroup[], options: { headingLevel: number }) =>
      partials.groups.apply(context, [model, options]) as string,
    /**
     * Renders a collection of members.
     * @category Container Partials
     */

    members: (
      model: DeclarationReflection[],
      options: { headingLevel: number },
    ) => partials.members.apply(context, [model, options]) as string,
    /**
     * Renders an accessor member.
     * @category Member Partials
     */

    accessor: (
      model: DeclarationReflection,
      options: { headingLevel: number },
    ) => partials.accessor.apply(context, [model, options]) as string,
    /**
     * Renders an constructor member.
     * @category Member Partials
     */

    constructor: (
      model: DeclarationReflection,
      options: { headingLevel: number },
    ) => partials.constructor.apply(context, [model, options]) as string,
    /**
     *
     * @category Member Partials
     */

    memberContainer: (
      model: DeclarationReflection,
      options: { headingLevel: number; nested?: boolean | undefined },
    ) => partials.memberContainer.apply(context, [model, options]) as string,
    /**
     * Renders a standard declaration member.
     * @category Member Partials
     */

    declaration: (
      model: DeclarationReflection,
      options: { headingLevel: number; nested?: boolean | undefined } = {
        headingLevel: 2,
        nested: false,
      },
    ) => partials.declaration.apply(context, [model, options]) as string,
    /**
     * Comments for declaration
     * @category Member Partials
     */

    declarationTitle: (model: DeclarationReflection) =>
      partials.declarationTitle.apply(context, [model]) as string,
    /**
     *
     * @category Member Partials
     */

    documents: (
      model: ProjectReflection | DeclarationReflection | ContainerReflection,
      options: { headingLevel: number },
    ) => partials.documents.apply(context, [model, options]) as string,
    /**
     * Renders enum members as a table.
     * @category Member Partials
     */

    enumMembersTable: (model: DeclarationReflection[]) =>
      partials.enumMembersTable.apply(context, [model]) as string,
    /**
     *
     * @category Member Partials
     */

    hierarchy: (
      model: DeclarationHierarchy,
      options: { headingLevel: number },
    ) => partials.hierarchy.apply(context, [model, options]) as string,
    /**
     * Renders an index signature block
     * @category Member Partials
     */

    indexSignature: (model: SignatureReflection) =>
      partials.indexSignature.apply(context, [model]) as string,
    /**
     * Renders an inheritance section.
     * @category Member Partials
     */

    inheritance: (
      model: DeclarationReflection | SignatureReflection,
      options: { headingLevel: number },
    ) => partials.inheritance.apply(context, [model, options]) as string,
    /**
     * Renders the main member title.
     * @category Member Partials
     */

    memberTitle: (model: DeclarationReflection) =>
      partials.memberTitle.apply(context, [model]) as string,
    /**
     * Renders a top-level member that contains group and child members such as Classes, Interfaces and Enums.
     * @category Member Partials
     */

    memberWithGroups: (
      model: DeclarationReflection,
      options: { headingLevel: number },
    ) => partials.memberWithGroups.apply(context, [model, options]) as string,
    /**
     *
     * @category Member Partials
     */

    parametersList: (model: ParameterReflection[]) =>
      partials.parametersList.apply(context, [model]) as string,
    /**
     *
     * @category Member Partials
     */

    parametersTable: (model: ParameterReflection[]) =>
      partials.parametersTable.apply(context, [model]) as string,
    /**
 * Renders a collection of properties in a table.

There is no association list partial for properties as these are handled as a standard list of members.
 * @category Member Partials
 *
 */

    propertiesTable: (
      model: DeclarationReflection[],
      options?: { isEventProps: boolean } | undefined,
    ) => partials.propertiesTable.apply(context, [model, options]) as string,
    /**
     * Renders an reference member.
     * @category Member Partials
     */

    referenceMember: (model: ReferenceReflection) =>
      partials.referenceMember.apply(context, [model]) as string,
    /**
     *
     * @category Member Partials
     */

    reflectionIndex: (
      model: ProjectReflection | DeclarationReflection,
      options: { headingLevel: number },
    ) => partials.reflectionIndex.apply(context, [model, options]) as string,
    /**
     * Renders a signature member.
     * @category Member Partials
     */

    signature: (
      model: SignatureReflection,
      options: {
        headingLevel: number;
        nested?: boolean | undefined;
        accessor?: string | undefined;
        multipleSignatures?: boolean | undefined;
      },
    ) => partials.signature.apply(context, [model, options]) as string,
    /**
     *
     * @category Member Partials
     */

    signatureParameters: (model: ParameterReflection[]) =>
      partials.signatureParameters.apply(context, [model]) as string,
    /**
     *
     * @category Member Partials
     */

    signatureReturns: (
      model: SignatureReflection,
      options: { headingLevel: number },
    ) => partials.signatureReturns.apply(context, [model, options]) as string,
    /**
     *
     * @category Member Partials
     */

    signatureTitle: (
      model: SignatureReflection,
      options?:
        | { accessor?: string | undefined; includeType?: boolean | undefined }
        | undefined,
    ) => partials.signatureTitle.apply(context, [model, options]) as string,
    /**
     * Renders a signature collection.
     * @category Member Partials
     */

    signatures: (
      model: DeclarationReflection,
      options: { headingLevel: number; nested?: boolean | undefined },
    ) => partials.signatures.apply(context, [model, options]) as string,
    /**
     *
     * @category Member Partials
     */

    sources: (
      model: DeclarationReflection | SignatureReflection,
      options: { headingLevel: number },
    ) => partials.sources.apply(context, [model, options]) as string,
    /**
     *
     * @category Member Partials
     */

    member: (
      model: DeclarationReflection,
      options: { headingLevel: number; nested?: boolean | undefined },
    ) => partials.member.apply(context, [model, options]) as string,
    /**
     *
     * @category Member Partials
     */

    typeAndParent: (model: ArrayType | ReferenceType) =>
      partials.typeAndParent.apply(context, [model]) as string,
    /**
     *
     * @category Member Partials
     */

    typeArguments: (
      model: SomeType[],
      options?: { forceCollapse?: boolean | undefined } | undefined,
    ) => partials.typeArguments.apply(context, [model, options]) as string,
    /**
     *
     * @category Member Partials
     */

    typeDeclaration: (
      model: DeclarationReflection,
      options: { headingLevel: number },
    ) => partials.typeDeclaration.apply(context, [model, options]) as string,
    /**
     *
     * @category Member Partials
     */

    typeDeclarationList: (
      model: DeclarationReflection[],
      options: { headingLevel: number },
    ) =>
      partials.typeDeclarationList.apply(context, [model, options]) as string,
    /**
     *
     * @category Member Partials
     */

    typeDeclarationTable: (
      model: DeclarationReflection[],
      options: { kind?: ReflectionKind | undefined },
    ) =>
      partials.typeDeclarationTable.apply(context, [model, options]) as string,
    /**
     *
     * @category Member Partials
     */

    typeParametersList: (model: TypeParameterReflection[]) =>
      partials.typeParametersList.apply(context, [model]) as string,
    /**
     *
     * @category Member Partials
     */

    typeParametersTable: (model: TypeParameterReflection[]) =>
      partials.typeParametersTable.apply(context, [model]) as string,
    /**
     *
     * @category Page Partials
     */

    breadcrumbs: () => partials.breadcrumbs.apply(context, []) as string,
    /**
     *
     * @category Page Partials
     */

    footer: () => partials.footer.apply(context, []) as string,
    /**
     *
     * @category Page Partials
     */

    header: () => partials.header.apply(context, []) as string,
    /**
     *
     * @category Page Partials
     */

    packagesIndex: (model: ProjectReflection) =>
      partials.packagesIndex.apply(context, [model]) as string,
    /**
     *
     * @category Page Partials
     */

    pageTitle: () => partials.pageTitle.apply(context, []) as string,
    /**
     *
     * @category Type Partials
     */

    arrayType: (model: ArrayType) =>
      partials.arrayType.apply(context, [model]) as string,
    /**
     *
     * @category Type Partials
     */

    conditionalType: (model: ConditionalType) =>
      partials.conditionalType.apply(context, [model]) as string,
    /**
     *
     * @category Type Partials
     */

    indexAccessType: (model: IndexedAccessType) =>
      partials.indexAccessType.apply(context, [model]) as string,
    /**
     *
     * @category Type Partials
     */

    inferredType: (model: InferredType) =>
      partials.inferredType.apply(context, [model]) as string,
    /**
     *
     * @category Type Partials
     */

    intersectionType: (model: IntersectionType) =>
      partials.intersectionType.apply(context, [model]) as string,
    /**
     *
     * @category Type Partials
     */

    intrinsicType: (model: IntrinsicType) =>
      partials.intrinsicType.apply(context, [model]) as string,
    /**
     *
     * @category Type Partials
     */

    literalType: (model: LiteralType) =>
      partials.literalType.apply(context, [model]) as string,
    /**
     *
     * @category Type Partials
     */

    namedTupleType: (model: NamedTupleMember) =>
      partials.namedTupleType.apply(context, [model]) as string,
    /**
     *
     * @category Type Partials
     */

    queryType: (model: QueryType) =>
      partials.queryType.apply(context, [model]) as string,
    /**
     *
     * @category Type Partials
     */

    referenceType: (model: ReferenceType) =>
      partials.referenceType.apply(context, [model]) as string,
    /**
     *
     * @category Type Partials
     */

    declarationType: (model: DeclarationReflection) =>
      partials.declarationType.apply(context, [model]) as string,
    /**
     *
     * @category Type Partials
     */

    functionType: (
      model: SignatureReflection[],
      options?: { forceParameterType: boolean } | undefined,
    ) => partials.functionType.apply(context, [model, options]) as string,
    /**
     *
     * @category Type Partials
     */

    reflectionType: (
      model: ReflectionType,
      options?: { forceCollapse?: boolean | undefined } | undefined,
    ) => partials.reflectionType.apply(context, [model, options]) as string,
    /**
     * Takes a generic Type and returns the appropriate partial for it.
     * @category Type Partials
     */

    someType: (model?: SomeType | undefined) =>
      partials.someType.apply(context, [model]) as string,
    /**
     *
     * @category Type Partials
     */

    tupleType: (model: TupleType) =>
      partials.tupleType.apply(context, [model]) as string,
    /**
     *
     * @category Type Partials
     */

    typeOperatorType: (model: TypeOperatorType) =>
      partials.typeOperatorType.apply(context, [model]) as string,
    /**
     *
     * @category Type Partials
     */

    unionType: (model: UnionType) =>
      partials.unionType.apply(context, [model]) as string,
    /**
     *
     * @category Type Partials
     */

    unknownType: (model: UnknownType) =>
      partials.unknownType.apply(context, [model]) as string,
  };
};

export const resourceHelpers = (context: MarkdownThemeContext) => {
  return {
    getCommentParts: (model: CommentDisplayPart[]) =>
      helpers.getCommentParts.apply(context, [model]) as string,
    getDeclarationType: (model: DeclarationReflection) =>
      helpers.getDeclarationType.apply(context, [model]) as
        | SomeType
        | undefined,
    getDescriptionForReflection: (model: DeclarationReflection) =>
      helpers.getDescriptionForReflection.apply(context, [model]) as
        | string
        | null,
    getFlattenedDeclarations: (
      model: DeclarationReflection[],
      options?: { includeSignatures: boolean } | undefined,
    ) =>
      helpers.getFlattenedDeclarations.apply(context, [
        model,
        options,
      ]) as DeclarationReflection[],
    getGroupIndexList: (
      children: DeclarationReflection[] | DocumentReflection[],
    ) => helpers.getGroupIndexList.apply(context, [children]) as string,
    getGroupIndexTable: (
      children: DeclarationReflection[] | DocumentReflection[],
      kind?: ReflectionKind | undefined,
    ) => helpers.getGroupIndexTable.apply(context, [children, kind]) as string,
    getGroupIndex: (group: ReflectionCategory | ReflectionGroup) =>
      helpers.getGroupIndex.apply(context, [group]) as any,
    getHierarchyType: (
      model: SomeType,
      options?: { isTarget: boolean } | undefined,
    ) => helpers.getHierarchyType.apply(context, [model, options]) as string,
    getKeyword: (model: ReflectionKind) =>
      helpers.getKeyword.apply(context, [model]) as string,
    getModifier: (model: DeclarationReflection) =>
      helpers.getModifier.apply(context, [model]) as string | null,
    getParameterDefaultValue: (model: ParameterReflection) =>
      helpers.getParameterDefaultValue.apply(context, [model]) as string,
    getProjectName: (
      stringWithPlaceholders: string,
      page: MarkdownPageEvent<Reflection>,
    ) =>
      helpers.getProjectName.apply(context, [
        stringWithPlaceholders,
        page,
      ]) as string,
    getPropertyDefaultValue: (model: DeclarationReflection) =>
      helpers.getPropertyDefaultValue.apply(context, [model]) as string | null,
    getReflectionFlags: (
      reflection: DeclarationReflection | SignatureReflection,
    ) => helpers.getReflectionFlags.apply(context, [reflection]) as string[],
    getReturnType: (model?: SomeType | undefined) =>
      helpers.getReturnType.apply(context, [model]) as string,
    isGroupKind: (model: DeclarationReflection | SignatureReflection) =>
      helpers.isGroupKind.apply(context, [model]) as boolean,
    useTableFormat: (
      key:
        | 'properties'
        | 'parameters'
        | 'enums'
        | 'typeDeclarations'
        | 'propertyMembers',
    ) => helpers.useTableFormat.apply(context, [key]) as boolean,
  };
};
