import { MarkdownRenderer } from '@plugin/app/application';
import {
  getFileNameWithExtension,
  removeFirstScopedDirectory,
  slugifyUrl,
} from '@plugin/libs/utils';
import { OutputFileStrategy } from '@plugin/options/option-maps';
import { MarkdownTheme } from '@plugin/theme/markdown-theme';
import {
  TemplateMapping,
  UrlMapping,
  UrlOption,
} from '@plugin/theme/theme-types';
import * as path from 'path';
import {
  DeclarationReflection,
  EntryPointStrategy,
  ProjectReflection,
  Reflection,
  ReflectionKind,
} from 'typedoc';

/**
 * Map the models of the given project to the desired output files.
 * Based on TypeDoc DefaultTheme.getUrls()
 *
 * @param project  The project whose urls should be generated.
 */
export function getUrls(theme: MarkdownTheme, project: ProjectReflection) {
  const options = theme.application.options;
  const packagesMeta = (theme.application.renderer as MarkdownRenderer)
    .packagesMeta;
  const urls: UrlMapping<Reflection>[] = [];
  const anchors: Record<string, string[]> = {};
  const flattenOutputFiles = options.getValue('flattenOutputFiles');
  const fileExtension = options.getValue('fileExtension');
  const ignoreScopes = options.getValue('excludeScopesInPaths');
  const entryFileName = getFileNameWithExtension(
    options.getValue('entryFileName'),
    fileExtension,
  );

  const isPackages =
    options.getValue('entryPointStrategy') === EntryPointStrategy.Packages;

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

  return flattenOutputFiles ? flattenFiles(urls) : urls;

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
        buildUrlsFromGroup(projectGroupChild, {
          ...(parentUrl && { parentUrl }),
          ...(outputFileStrategy && { outputFileStrategy }),
          ...(entryModule && { entryModule }),
          ...(entryFileName && { entryFileName }),
        });
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
          : path.join(path.dirname(indexFileName), packageEntryFileName),
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

  function buildUrlsFromGroup(
    reflection: DeclarationReflection,
    urlOptions: UrlOption,
  ) {
    const mapping: TemplateMapping = theme.getTemplateMapping(
      reflection.kind,
      urlOptions.outputFileStrategy,
    );

    if (mapping) {
      const directory = urlOptions.directory || mapping.directory;
      const urlPath = getUrlPath(reflection, {
        ...urlOptions,
        directory,
      });

      let url = getUrl(reflection, urlPath, urlOptions);

      if (ignoreScopes) {
        url = removeFirstScopedDirectory(url);
      }

      const duplicateUrls = urls.filter(
        (urlMapping) =>
          urlMapping.url.toLowerCase().replace(/-\d+$/, '') ===
          url.toLowerCase(),
      );

      if (duplicateUrls.length > 0) {
        const urlParts = url.split('.');
        urlParts[urlParts.length - 2] += `-${duplicateUrls.length}`;
        url = urlParts.join('.');
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
          buildUrlsFromGroup(groupChild, {
            parentUrl: urlPath,
            directory: mapping?.directory || null,
            outputFileStrategy: urlOptions.outputFileStrategy,
          });
        });
      });
    } else if (reflection.parent) {
      applyAnchorUrl(reflection, reflection.parent);
    }
  }

  function getUrl(
    reflection: DeclarationReflection,
    urlPath: string,
    urlOptions: UrlOption,
  ) {
    const entryModule =
      urlOptions.entryModule || options.getValue('entryModule');

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

  function getUrlPath(reflection: DeclarationReflection, urlOption: UrlOption) {
    const alias = reflection.name
      .replace(/^_+|_+$/g, '')
      .replace(/</, '-')
      .replace(/>/, '-');

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
        : `${slugifyUrl(
            ReflectionKind.singularString(reflection.kind),
          )}.${alias}`;
    };

    const filename = () => {
      if (
        [ReflectionKind.Module, ReflectionKind.Namespace].includes(
          reflection.kind,
        ) &&
        options.getValue('outputFileStrategy') === OutputFileStrategy.Modules &&
        !childrenIncludeNamespaces(reflection)
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

  function applyAnchorUrl(
    reflection: DeclarationReflection,
    container: Reflection,
  ) {
    if (container.url) {
      if (reflection.kind !== ReflectionKind.TypeLiteral) {
        const anchorPrefix = options.getValue('anchorPrefix');
        const anchorId = getAnchorId(reflection);

        if (anchorId) {
          if (!anchors[container.url]) {
            anchors[container.url] = [];
          }

          anchors[container.url].push(anchorId);

          const count = anchors[container.url]?.filter(
            (id) => id === anchorId,
          )?.length;

          const anchorParts = [anchorId];

          if (count > 1) {
            anchorParts.push(`-${count - 1}`);
          }

          if (anchorPrefix) {
            anchorParts.unshift(`${anchorPrefix}`);
          }

          reflection.url = container.url + '#' + anchorParts.join('');
          reflection.anchor = anchorParts.join('');
          reflection.hasOwnDocument = false;
        }
      }
    }
    if (reflection.parent) {
      reflection.traverse((child) => {
        if (child instanceof DeclarationReflection) {
          applyAnchorUrl(child, container);
        }
      });
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
          options.getValue('propertiesFormat') === 'table') ||
        (reflection.kind === ReflectionKind.EnumMember &&
          options.getValue('enumMembersFormat') === 'table')
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

  function childrenIncludeNamespaces(reflection: DeclarationReflection) {
    return reflection.children?.some(
      (child) => child.kind === ReflectionKind.Namespace,
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

  function flattenFiles(urls: UrlMapping<Reflection>[]) {
    const getUrl = (reflection: Reflection) => {
      const fullname = reflection.getFullName();
      const fullnameParts = fullname.replace(/\//g, '.').split('.');
      if (reflection.kind !== ReflectionKind.Module) {
        fullnameParts.splice(
          fullnameParts.length - 1,
          0,
          ReflectionKind.singularString(reflection.kind).split(' ')[0],
        );
      }
      const url = `${fullnameParts.join('.')}.md`;
      reflection.url = url;
      return url;
    };
    return urls.map((urlMapping) => {
      if (urlMapping.model.kind === ReflectionKind.Project) {
        return urlMapping;
      }
      return {
        ...urlMapping,
        url: getUrl(urlMapping.model),
      };
    });
  }
}
