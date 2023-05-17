import * as path from 'path';
import { Options, PageEvent, Reflection } from 'typedoc';
import { URL_PREFIX } from './support/constants';

/* start_imports */
import { breadcrumbs } from './resources/partials/breadcrumbs';
import { commentParts } from './resources/partials/comment.parts';
import { comment } from './resources/partials/comment';
import { footer } from './resources/partials/footer';
import { header } from './resources/partials/header';
import { hierarchy } from './resources/partials/hierarchy';
import { declarationMemberIdentifier } from './resources/partials/member.declaration.identifier';
import { declarationMemberName } from './resources/partials/member.declaration.name';
import { declarationMember } from './resources/partials/member.declaration';
import { memberIndex } from './resources/partials/member.index';
import { indexSignatureTitle } from './resources/partials/member.indexsignature.title';
import { inheritance } from './resources/partials/member.inheritance';
import { memberKindTag } from './resources/partials/member.kind-tag';
import { referenceMember } from './resources/partials/member.reference';
import { reflectionMember } from './resources/partials/member.reflection';
import { signatureMemberIdentifier } from './resources/partials/member.signature.identifier';
import { signatureMember } from './resources/partials/member.signature';
import { sources } from './resources/partials/member.sources';
import { memberTitle } from './resources/partials/member.title';
import { member } from './resources/partials/member';
import { typeDeclarationMember } from './resources/partials/member.type-declaration';
import { members } from './resources/partials/members';
import { navigation } from './resources/partials/navigation';
import { pageIndex } from './resources/partials/page.index';
import { pageTitle } from './resources/partials/page.title';
import { enumMembersTable } from './resources/partials/table.enum-members';
import { parametersTable } from './resources/partials/table.parameters';
import { propertiesTable } from './resources/partials/table.properties';
import { typeParametersTable } from './resources/partials/table.typeparameters';
import { arrayType } from './resources/partials/type.array';
import { conditionalType } from './resources/partials/type.conditional';
import { declarationType } from './resources/partials/type.declaration';
import { functionType } from './resources/partials/type.function';
import { indexAccessType } from './resources/partials/type.index-access';
import { inferredType } from './resources/partials/type.inferred';
import { intersectionType } from './resources/partials/type.intersection';
import { intrinsicType } from './resources/partials/type.intrinsic';
import { literalType } from './resources/partials/type.literal';
import { queryType } from './resources/partials/type.query';
import { referenceType } from './resources/partials/type.reference';
import { reflectionType } from './resources/partials/type.reflection';
import { someType } from './resources/partials/type.some';
import { tupleType } from './resources/partials/type.tuple';
import { typeOperatorType } from './resources/partials/type.type-operator';
import { unionType } from './resources/partials/type.union';
import { unknownType } from './resources/partials/type.unknown';
import { memberTemplate } from './resources/templates/member';
import { projectTemplate } from './resources/templates/project';
import { readmeTemplate } from './resources/templates/read-me';
import { reflectionTemplate } from './resources/templates/reflection';
/* end_imports */

function bind<F, L extends any[], R>(fn: (f: F, ...a: L) => R, first: F) {
  return (...r: L) => fn(first, ...r);
}

export class MarkdownThemeRenderContext {
  constructor(
    public page: PageEvent<Reflection> | null,
    public options: Options,
  ) {}

  urlTo = (reflection: Reflection) => {
    return this.relativeURL(reflection.url);
  };

  relativeURL = (url: string | undefined) => {
    if (!url) {
      return null;
    }
    if (URL_PREFIX.test(url)) {
      return url;
    } else {
      if (this.options.getValue('baseUrl')) {
        return this.options.getValue('baseUrl') + url.replace(/\\/g, '/');
      }

      const relative = path.relative(
        path.dirname(this.page?.url || '.'),
        path.dirname(url),
      );

      return this.parseUrl(
        path.join(relative, path.basename(url)).replace(/\\/g, '/'),
      );
    }
  };

  parseUrl(url: string) {
    return encodeURI(url);
  }

  /* start_resources */

  // templates
  memberTemplate = bind(memberTemplate, this);
  projectTemplate = bind(projectTemplate, this);
  readmeTemplate = bind(readmeTemplate, this);
  reflectionTemplate = bind(reflectionTemplate, this);

  // partials
  breadcrumbs = bind(breadcrumbs, this);
  commentParts = bind(commentParts, this);
  comment = bind(comment, this);
  footer = bind(footer, this);
  header = bind(header, this);
  hierarchy = bind(hierarchy, this);
  declarationMemberIdentifier = bind(declarationMemberIdentifier, this);
  declarationMemberName = bind(declarationMemberName, this);
  declarationMember = bind(declarationMember, this);
  memberIndex = bind(memberIndex, this);
  indexSignatureTitle = bind(indexSignatureTitle, this);
  inheritance = bind(inheritance, this);
  memberKindTag = bind(memberKindTag, this);
  referenceMember = bind(referenceMember, this);
  reflectionMember = bind(reflectionMember, this);
  signatureMemberIdentifier = bind(signatureMemberIdentifier, this);
  signatureMember = bind(signatureMember, this);
  sources = bind(sources, this);
  memberTitle = bind(memberTitle, this);
  member = bind(member, this);
  typeDeclarationMember = bind(typeDeclarationMember, this);
  members = bind(members, this);
  navigation = bind(navigation, this);
  pageIndex = bind(pageIndex, this);
  pageTitle = bind(pageTitle, this);
  enumMembersTable = bind(enumMembersTable, this);
  parametersTable = bind(parametersTable, this);
  propertiesTable = bind(propertiesTable, this);
  typeParametersTable = bind(typeParametersTable, this);
  arrayType = bind(arrayType, this);
  conditionalType = bind(conditionalType, this);
  declarationType = bind(declarationType, this);
  functionType = bind(functionType, this);
  indexAccessType = bind(indexAccessType, this);
  inferredType = bind(inferredType, this);
  intersectionType = bind(intersectionType, this);
  intrinsicType = bind(intrinsicType, this);
  literalType = bind(literalType, this);
  queryType = bind(queryType, this);
  referenceType = bind(referenceType, this);
  reflectionType = bind(reflectionType, this);
  someType = bind(someType, this);
  tupleType = bind(tupleType, this);
  typeOperatorType = bind(typeOperatorType, this);
  unionType = bind(unionType, this);
  unknownType = bind(unknownType, this);
  /* end_resources */
}
