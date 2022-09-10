import { 
 ArrayType,
 ConditionalType,
 ContainerReflection,
 Comment,
 CommentDisplayPart,
 DeclarationHierarchy,
 DeclarationReflection,
 InferredType,
 IntersectionType,
 IntrinsicType,
 IndexedAccessType,
 LiteralType,
 PageEvent,
 ParameterReflection,
 ProjectReflection,
 QueryType,
 ReflectionGroup,
 ReferenceReflection,
 ReferenceType,
 ReflectionType,
 SignatureReflection,
 SomeType,
 TupleType,
 TypeOperatorType,
 TypeParameterReflection,
 UnionType,
 UnknownType } from 'typedoc';

import { MarkdownThemeRenderContext } from './theme-context';
import { Collapse } from './types';
import { memberTemplate } from './templates/member';
import { projectTemplate } from './templates/project';
import { readmeTemplate } from './templates/readme';
import { reflectionTemplate } from './templates/reflection';
import { breadcrumbs } from './partials/breadcrumbs';
import { commentParts } from './partials/comment.parts';
import { comment } from './partials/comment';
import { header } from './partials/header';
import { hierarchy } from './partials/hierarchy';
import { constructorMember } from './partials/member.constructor';
import { declarationMemberTitle } from './partials/member.declaration.title';
import { declarationMember } from './partials/member.declaration';
import { referenceMember } from './partials/member.reference';
import { signatureTitle } from './partials/member.signature.title';
import { signatureMember } from './partials/member.signature';
import { member } from './partials/member';
import { members } from './partials/members';
import { reflectionTitle } from './partials/reflection.title';
import { reflection } from './partials/reflection';
import { sources } from './partials/sources';
import { parametersTable } from './partials/table.parameters';
import { propertiesTable } from './partials/table.properties';
import { typeParametersTable } from './partials/table.typeParameters';
import { toc } from './partials/toc';
import { arrayType } from './partials/type.array';
import { conditionalType } from './partials/type.conditional';
import { declarationType } from './partials/type.declaration';
import { functionType } from './partials/type.function';
import { indexAccessType } from './partials/type.indexAccess';
import { inferredType } from './partials/type.inferred';
import { intersectionType } from './partials/type.intersection';
import { intrinsicType } from './partials/type.intrinsic';
import { literalType } from './partials/type.literal';
import { queryType } from './partials/type.query';
import { referenceType } from './partials/type.reference';
import { reflectionType } from './partials/type.reflection';
import { someType } from './partials/type.some';
import { tupleType } from './partials/type.tuple';
import { typeOperatorType } from './partials/type.typeOperator';
import { unionType } from './partials/type.union';
import { unknownType } from './partials/type.unknown';
import { typeParameters } from './partials/typeParameters';

function bind<F, L extends any[], R>(fn: (f: F, ...a: L) => R, first: F) {
  return (...r: L) => fn(first, ...r);
}
export type Templates = {
  memberTemplate: (page: PageEvent<DeclarationReflection>) => string;
  projectTemplate: (page: PageEvent<ProjectReflection>) => string;
  readmeTemplate: (page: PageEvent<ProjectReflection>) => string;
  reflectionTemplate: (page: PageEvent<DeclarationReflection>) => string;
};

export type Partials = {
  breadcrumbs: (page: PageEvent<DeclarationReflection | ProjectReflection>) => string;
  commentParts: (parts: CommentDisplayPart[]) => string;
  comment: (comment: Comment) => string;
  header: (page: PageEvent<DeclarationReflection>) => string;
  hierarchy: (declarationHierarchy: DeclarationHierarchy) => string;
  constructorMember: (signature: SignatureReflection) => string;
  declarationMemberTitle: (reflection: DeclarationReflection | ParameterReflection) => string;
  declarationMember: (reflection: DeclarationReflection) => string;
  referenceMember: (props: ReferenceReflection) => string;
  signatureTitle: (signature: SignatureReflection) => string;
  signatureMember: (signature: SignatureReflection) => string;
  member: (reflection: DeclarationReflection) => string;
  members: (container: ContainerReflection) => string;
  reflectionTitle: (reflection: DeclarationReflection, shouldEscape?: boolean) => string;
  reflection: (reflection: DeclarationReflection) => string;
  sources: (reflection: DeclarationReflection | SignatureReflection) => string;
  parametersTable: (parameters: ParameterReflection[]) => string;
  propertiesTable: (props: DeclarationReflection[]) => string;
  typeParametersTable: (props: TypeParameterReflection[]) => string;
  toc: (reflection: DeclarationReflection | ProjectReflection) => string;
  arrayType: (arrayType: ArrayType, emphasis: boolean) => string;
  conditionalType: (conditionalType: ConditionalType) => string;
  declarationType: (declarationReflection: DeclarationReflection, collapse?: Collapse) => string;
  functionType: (modelSignatures: SignatureReflection[]) => string;
  indexAccessType: (model: IndexedAccessType) => string;
  inferredType: (model: InferredType) => string;
  intersectionType: (model: IntersectionType) => string;
  intrinsicType: (model: IntrinsicType, emphasis: boolean) => string;
  literalType: (literalType: LiteralType) => string;
  queryType: (queryType: QueryType) => string;
  referenceType: (referenceType: ReferenceType) => string;
  reflectionType: (reflectionType: ReflectionType, collapse: Collapse) => string;
  someType: (someType: SomeType, collapse?: Collapse, emphasis?: boolean) => string;
  tupleType: (tupleType: TupleType) => string;
  typeOperatorType: (model: TypeOperatorType) => string;
  unionType: (unionType: UnionType, emphasis: boolean) => string;
  unknownType: (model: UnknownType) => string;
  typeParameters: (typeParameters: TypeParameterReflection[]) => string;
};

export const templates = (context: MarkdownThemeRenderContext): Templates => ({
  memberTemplate: bind(memberTemplate, context),
  projectTemplate: bind(projectTemplate, context),
  readmeTemplate: bind(readmeTemplate, context),
  reflectionTemplate: bind(reflectionTemplate, context),
});

export const partials = (context: MarkdownThemeRenderContext): Partials => ({
  breadcrumbs: bind(breadcrumbs, context),
  commentParts: bind(commentParts, context),
  comment: bind(comment, context),
  header: bind(header, context),
  hierarchy: bind(hierarchy, context),
  constructorMember: bind(constructorMember, context),
  declarationMemberTitle: bind(declarationMemberTitle, context),
  declarationMember: bind(declarationMember, context),
  referenceMember: bind(referenceMember, context),
  signatureTitle: bind(signatureTitle, context),
  signatureMember: bind(signatureMember, context),
  member: bind(member, context),
  members: bind(members, context),
  reflectionTitle: bind(reflectionTitle, context),
  reflection: bind(reflection, context),
  sources: bind(sources, context),
  parametersTable: bind(parametersTable, context),
  propertiesTable: bind(propertiesTable, context),
  typeParametersTable: bind(typeParametersTable, context),
  toc: bind(toc, context),
  arrayType: bind(arrayType, context),
  conditionalType: bind(conditionalType, context),
  declarationType: bind(declarationType, context),
  functionType: bind(functionType, context),
  indexAccessType: bind(indexAccessType, context),
  inferredType: bind(inferredType, context),
  intersectionType: bind(intersectionType, context),
  intrinsicType: bind(intrinsicType, context),
  literalType: bind(literalType, context),
  queryType: bind(queryType, context),
  referenceType: bind(referenceType, context),
  reflectionType: bind(reflectionType, context),
  someType: bind(someType, context),
  tupleType: bind(tupleType, context),
  typeOperatorType: bind(typeOperatorType, context),
  unionType: bind(unionType, context),
  unknownType: bind(unknownType, context),
  typeParameters: bind(typeParameters, context),
});