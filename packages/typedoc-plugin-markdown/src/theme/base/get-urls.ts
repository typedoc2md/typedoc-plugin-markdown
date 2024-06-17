import {
  getFileNameWithExtension,
  isQuoted,
  removeFirstScopedDirectory,
  slugify,
  toPascalCase,
} from '@plugin/libs/utils';
import { OutputFileStrategy } from '@plugin/options/maps';
import { MarkdownTheme } from '@plugin/theme';
import {
  MarkdownRenderer,
  TemplateMapping,
  UrlMapping,
  UrlOption,
} from '@plugin/types';
import * as path from 'path';
import {
  DeclarationReflection,
  DocumentReflection,
  EntryPointStrategy,
  Options,
  ProjectReflection,
  Reflection,
  ReflectionKind,
} from 'typedoc';

let theme: MarkdownTheme;
let project: ProjectReflection;
let options: Options;
let packagesMeta: any;
let fileExtension: string;
let ignoreScopes: boolean;
let entryFileName: string;
let isPackages: boolean;
let flattenOutputFiles: boolean;

const anchors: Record<string, string[]> = {};
const urls: UrlMapping<Reflection>[] = [];

/**
 * Map the models of the given project to the desired output files.
 * Based on TypeDoc DefaultTheme.getUrls()
 */
export function getUrls(
  markdownTheme: MarkdownTheme,
  ProjectReflection: ProjectReflection,
) {
  theme = markdownTheme;
  project = ProjectReflection;

  options = theme.application.options;
  packagesMeta = (theme.application.renderer as MarkdownRenderer).packagesMeta;

  fileExtension = options.getValue('fileExtension');
  ignoreScopes = options.getValue('excludeScopesInPaths');

  entryFileName = getFileNameWithExtension(
    options.getValue('entryFileName'),
    fileExtension,
  );

  isPackages =
    options.getValue('entryPointStrategy') === EntryPointStrategy.Packages;

  flattenOutputFiles = options.getValue('flattenOutputFiles');

  buildEntryUrls();

  if (isPackages) {
    if (Object.keys(packagesMeta)?.length === 1) {
      buildUrlsFromProject(project);
    } else {
      project.children?.forEach((projectChild) => {
        buildUrlsFromPackage(projectChild);
      });
    }
  } else {
    buildUrlsFromProject(project);
  }

  return urls;
}

function buildEntryUrls() {
  const preserveReadme =
    Boolean(project.readme) && !options.getValue('mergeReadme');

  const isModulesOnly = project.children?.every(
    (child) => child.kind === ReflectionKind.Module,
  );
  const useEntryModule =
    project?.groups &&
    Boolean(
      project?.groups[0]?.children.find(
        (child) => child.name === options.getValue('entryModule'),
      ),
    ) &&
    isModulesOnly;
  const indexFilename = getIndexFileName(project, isPackages);

  project.url = preserveReadme
    ? indexFilename
    : useEntryModule
      ? indexFilename
      : entryFileName;

  if (preserveReadme) {
    urls.push({
      url: useEntryModule
        ? getFileNameWithExtension('readme_', fileExtension)
        : entryFileName,
      model: project,
      template: theme.readmeTemplate,
    });

    if (!useEntryModule) {
      urls.push({
        url: indexFilename,
        model: project,
        template: theme.projectTemplate,
      });
    }
  } else {
    if (!useEntryModule) {
      urls.push({
        url: entryFileName,
        model: project,
        template: theme.projectTemplate,
      });
    }
  }
}

function buildUrlsFromProject(
  project: ProjectReflection | DeclarationReflection,
  parentUrl?: string,
  outputFileStrategy?: OutputFileStrategy,
  entryModule?: string,
  entryFileName?: string,
) {
  project.groups?.forEach((projectGroup) => {
    projectGroup.children?.forEach((projectGroupChild) => {
      if (projectGroupChild instanceof DocumentReflection) {
        buildUrlsForDocument(projectGroupChild);
      }
      if (projectGroupChild instanceof DeclarationReflection) {
        buildUrlsFromGroup(projectGroupChild, {
          ...(parentUrl && { parentUrl }),
          ...(outputFileStrategy && { outputFileStrategy }),
          ...(entryModule && { entryModule }),
          ...(entryFileName && { entryFileName }),
        });
      }
    });
  });
}

function buildUrlsFromPackage(projectChild: DeclarationReflection) {
  const preservePackageReadme =
    Boolean(projectChild.readme) && !options.getValue('mergeReadme');

  const packagesIndex = getIndexFileName(projectChild);

  const packageOptions = packagesMeta[projectChild.name]?.options;

  const outputFileStrategy = packageOptions.isSet('outputFileStrategy')
    ? packageOptions.getValue('outputFileStrategy')
    : options.getValue('outputFileStrategy');

  const entryModule = packageOptions.isSet('entryModule')
    ? packageOptions.getValue('entryModule')
    : options.getValue('entryModule');

  const packageEntryFileName = packageOptions.isSet('entryFileName')
    ? packageOptions.getValue('entryFileName')
    : options.getValue('entryFileName');

  let fullEntryFileName = getFileNameWithExtension(
    path.join(projectChild.name, packageEntryFileName),
    fileExtension,
  );

  let fullIndexFileName = getFileNameWithExtension(
    path.join(projectChild.name, packagesIndex),
    fileExtension,
  );

  if (ignoreScopes) {
    fullEntryFileName = removeFirstScopedDirectory(fullEntryFileName);
    fullIndexFileName = removeFirstScopedDirectory(fullIndexFileName);
  }

  const indexFileName = preservePackageReadme
    ? fullIndexFileName
    : fullEntryFileName;

  const isModulesOnly = projectChild.children?.every(
    (child) => child.kind === ReflectionKind.Module,
  );

  const useEntryModule =
    projectChild?.groups &&
    Boolean(
      projectChild?.groups[0]?.children.find(
        (child) => child.name === entryModule,
      ),
    ) &&
    isModulesOnly;

  if (preservePackageReadme) {
    urls.push({
      url: useEntryModule
        ? `${path.dirname(indexFileName)}/${getFileNameWithExtension('readme_', fileExtension)}`
        : path.join(
            path.dirname(indexFileName),
            getFileNameWithExtension(packageEntryFileName, fileExtension),
          ),
      model: projectChild,
      template: theme.readmeTemplate,
    });

    if (!useEntryModule) {
      urls.push({
        url: indexFileName,
        model: projectChild,
        template: theme.projectTemplate,
      });
    }
  } else {
    if (!useEntryModule) {
      urls.push({
        url: indexFileName,
        model: projectChild,
        template: theme.projectTemplate,
      });
    }
  }

  projectChild.url = indexFileName;

  projectChild.documents?.forEach((document) => {
    buildUrlsForDocument(document);
  });

  const parentUrl =
    indexFileName.split(path.sep)?.length > 1
      ? indexFileName
      : `${projectChild.name}/${indexFileName}`;

  buildUrlsFromProject(
    projectChild,
    parentUrl,
    outputFileStrategy,
    entryModule,
    fullEntryFileName,
  );
}

function buildUrlsForDocument(reflection: DocumentReflection) {
  const mapping: TemplateMapping = theme.getTemplateMapping(reflection.kind);

  if (mapping) {
    const baseUrl = path.dirname(reflection.parent?.url || '');

    const directory = flattenOutputFiles
      ? ReflectionKind.singularString(reflection.kind)
      : (mapping.directory as string);
    const filename = [
      getFileNameWithExtension(
        reflection.name.replace(/ /g, '-'),
        fileExtension,
      ),
    ];

    if (
      reflection?.parent?.kind &&
      ![ReflectionKind.Module, ReflectionKind.Project].includes(
        reflection?.parent?.kind,
      )
    ) {
      filename.unshift(
        toPascalCase(ReflectionKind.singularString(reflection.parent?.kind)),
      );
    }

    const urlBase = path.join(baseUrl, directory, filename.join('.'));
    const url = flattenOutputFiles ? urlBase.replace(/\//g, '.') : urlBase;

    urls.push({
      url,
      model: reflection,
      template: mapping.template,
    });
    reflection.url = url;
    reflection.hasOwnDocument = true;
  }
}

function buildUrlsFromGroup(
  reflection: DeclarationReflection,
  urlOptions: UrlOption,
) {
  const mapping: TemplateMapping = theme.getTemplateMapping(
    reflection.kind,
    urlOptions.outputFileStrategy,
  );

  if (mapping) {
    let url: string;
    let urlPath = '';

    if (flattenOutputFiles) {
      url = getFlattenedUrl(reflection);
    } else {
      const directory = urlOptions.directory || mapping.directory;
      urlPath = getUrlPath(reflection, {
        ...urlOptions,
        directory,
      });

      url = getUrl(reflection, urlPath, urlOptions);

      if (ignoreScopes) {
        url = removeFirstScopedDirectory(url);
      }

      const duplicateUrls = urls.filter(
        (urlMapping) =>
          urlMapping.url.toLowerCase() === url.toLowerCase() &&
          urlMapping.url !== url,
      );

      if (duplicateUrls.length > 0) {
        const urlParts = url.split('.');
        urlParts[urlParts.length - 2] += `-${duplicateUrls.length}`;
        url = urlParts.join('.');
      }
    }

    urls.push({
      url: url,
      model: reflection,
      template: mapping.template,
    });

    reflection.url = url;
    reflection.hasOwnDocument = true;

    reflection.groups?.forEach((group) => {
      group.children.forEach((groupChild) => {
        const mapping = theme.getTemplateMapping(
          groupChild.kind,
          urlOptions.outputFileStrategy,
        );
        buildUrlsFromGroup(groupChild as DeclarationReflection, {
          parentUrl: urlPath,
          directory: mapping?.directory || null,
          outputFileStrategy: urlOptions.outputFileStrategy,
        });
      });
    });
  } else if (reflection.parent) {
    traverseChildren(reflection, reflection.parent);
  }
}

function getUrl(
  reflection: DeclarationReflection,
  urlPath: string,
  urlOptions: UrlOption,
) {
  const entryModule = urlOptions.entryModule || options.getValue('entryModule');

  const entryName = urlOptions.entryFileName || entryFileName;

  if (reflection.name === entryModule) {
    return entryName;
  }

  if (
    options.getValue('outputFileStrategy') === OutputFileStrategy.Modules &&
    reflection.name === 'index' &&
    path.parse(entryName).name === 'index'
  ) {
    return urlPath.replace(
      getFileNameWithExtension('index', fileExtension),
      getFileNameWithExtension('module_index', fileExtension),
    );
  }
  return urlPath;
}

function getFlattenedUrl(reflection: DeclarationReflection) {
  const fullName = reflection.getFullName();

  const fullNameParts = fullName.replace(/\//g, '.').split('.');
  if (reflection.kind !== ReflectionKind.Module) {
    fullNameParts.splice(
      fullNameParts.length - 1,
      0,
      toPascalCase(ReflectionKind.singularString(reflection.kind)),
    );
  }
  const url = `${fullNameParts.join('.')}${fileExtension}`
    .replace(/"/g, '')
    .replace(/ /g, '-')
    .replace(/^\./g, '');

  reflection.url = url;
  return url;
}

function getAlias(name: string) {
  if (isQuoted(name)) {
    name = name.replace(/\//g, '_');
  }
  return name
    .replace(/"/g, '')
    .replace(/^_+|_+$/g, '')
    .replace(/[<>]/g, '-');
}

function getUrlPath(reflection: DeclarationReflection, urlOption: UrlOption) {
  const alias = getAlias(reflection.name);

  const parentDir = urlOption.parentUrl
    ? path.dirname(urlOption.parentUrl)
    : null;

  const dir = () => {
    if (reflection.kind === ReflectionKind.Namespace) {
      return `${urlOption.directory}/${alias}`;
    }

    if (reflection.kind === ReflectionKind.Module) {
      return alias;
    }

    return urlOption.directory
      ? urlOption.directory
      : `${slugify(ReflectionKind.singularString(reflection.kind))}.${alias}`;
  };

  const filename = () => {
    if (
      [ReflectionKind.Module, ReflectionKind.Namespace].includes(
        reflection.kind,
      ) &&
      options.getValue('outputFileStrategy') === OutputFileStrategy.Modules &&
      !moduleHasSubfolders(reflection)
    ) {
      return null;
    }
    if (
      [ReflectionKind.Module, ReflectionKind.Namespace].includes(
        reflection.kind,
      )
    ) {
      return path.parse(entryFileName).name;
    }
    return alias;
  };

  return getFileNameWithExtension(
    [parentDir, dir(), filename()].filter((part) => Boolean(part)).join('/'),
    fileExtension,
  );
}

function traverseChildren(
  reflection: DeclarationReflection,
  container: Reflection,
) {
  if (container.url) {
    applyAnchorUrl(reflection, container.url);
  }
  if (reflection.parent) {
    reflection.traverse((child) => {
      if (child instanceof DocumentReflection) {
        buildUrlsForDocument(child);
      }
      if (child instanceof DeclarationReflection) {
        traverseChildren(child, container);
      }
    });
  }
}

function applyAnchorUrl(
  reflection: DeclarationReflection,
  containerUrl: string,
) {
  if (reflection.kind !== ReflectionKind.TypeLiteral) {
    const anchorPrefix = options.getValue('anchorPrefix');
    const anchorId = getAnchorId(reflection);

    if (anchorId) {
      if (!anchors[containerUrl]) {
        anchors[containerUrl] = [];
      }

      anchors[containerUrl].push(anchorId);

      const count = anchors[containerUrl]?.filter(
        (id) => id === anchorId,
      )?.length;

      const anchorParts = [anchorId];

      if (count > 1) {
        anchorParts.push(`-${count - 1}`);
      }

      if (anchorPrefix) {
        anchorParts.unshift(`${anchorPrefix}`);
      }

      reflection.url = containerUrl + '#' + anchorParts.join('');
      reflection.anchor = anchorParts.join('');
      reflection.hasOwnDocument = false;
    }
  }
}

function getAnchorId(reflection: DeclarationReflection) {
  const preserveAnchorCasing = options.getValue('preserveAnchorCasing');

  const anchorName = getAnchorName(reflection);

  if (anchorName) {
    return preserveAnchorCasing ? anchorName : anchorName.toLowerCase();
  }

  return null;
}

function getAnchorName(reflection: DeclarationReflection) {
  const htmlTableAnchors = options.getValue('useHTMLAnchors');

  if (!htmlTableAnchors) {
    if (
      (reflection.kind === ReflectionKind.Property &&
        options.getValue('propertiesFormat').toLowerCase() === 'table') ||
      (reflection.kind === ReflectionKind.Property &&
        reflection.parent?.kind === ReflectionKind.Class &&
        options.getValue('classPropertiesFormat').toLowerCase() === 'table') ||
      (reflection.kind === ReflectionKind.Property &&
        reflection.parent?.kind === ReflectionKind.Interface &&
        options.getValue('interfacePropertiesFormat').toLowerCase() ===
          'table') ||
      (reflection.kind === ReflectionKind.EnumMember &&
        options.getValue('enumMembersFormat').toLowerCase() === 'table')
    ) {
      return null;
    }
  }
  if (reflection.kind === ReflectionKind.Constructor) {
    return 'Constructors';
  }
  const anchorParts = [reflection.name];
  if (reflection.typeParameters?.length) {
    anchorParts.push(
      reflection.typeParameters
        .map((typeParameter) => typeParameter.name)
        .join(''),
    );
  }
  return anchorParts.join('');
}

function moduleHasSubfolders(reflection: DeclarationReflection) {
  return reflection.childrenIncludingDocuments?.some((child) =>
    [ReflectionKind.Namespace, ReflectionKind.Document].includes(child.kind),
  );
}

function getIndexFileName(
  reflection: ProjectReflection | DeclarationReflection,
  isPackages = false,
) {
  if (isPackages) {
    return getFileNameWithExtension('packages', fileExtension);
  }
  const isModules = reflection.children?.every(
    (child) => child.kind === ReflectionKind.Module,
  );
  return isModules
    ? getFileNameWithExtension('modules', fileExtension)
    : getFileNameWithExtension('globals', fileExtension);
}
