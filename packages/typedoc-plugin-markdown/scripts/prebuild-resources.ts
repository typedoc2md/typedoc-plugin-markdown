import { consola } from 'consola';
import * as fs from 'fs';
import * as path from 'path';
import * as prettier from 'prettier';
import { Project } from 'ts-morph';
import { ReflectionKind } from 'typedoc';

const project = new Project({
  tsConfigFilePath: 'tsconfig.json',
});

const resourcesPath = path.join(__dirname, '..', 'src', 'theme', 'resources');

main();

async function main() {
  // WRITE CONSTANTS

  const themeRenderKindConstantsFile = path.join(
    __dirname,
    '..',
    'src',
    'theme',
    'constants',
    'kinds.ts',
  );

  const kinds = [
    { key: 'class', kind: ReflectionKind.Class },
    { key: 'constructor', kind: ReflectionKind.Constructor },
    { key: 'enum', kind: ReflectionKind.Enum },
    { key: 'enumMember', kind: ReflectionKind.EnumMember },
    { key: 'event', kind: undefined },
    { key: 'function', kind: ReflectionKind.Function },
    { key: 'interface', kind: ReflectionKind.Interface },
    { key: 'method', kind: ReflectionKind.Method },
    { key: 'module', kind: ReflectionKind.Module },
    { key: 'namespace', kind: ReflectionKind.Namespace },
    { key: 'variable', kind: ReflectionKind.Variable },
    { key: 'parameter', kind: ReflectionKind.Parameter },
    { key: 'property', kind: ReflectionKind.Property },
    { key: 'reference', kind: ReflectionKind.Reference },
    { key: 'typeAlias', kind: ReflectionKind.TypeAlias },
    { key: 'typeParameter', kind: ReflectionKind.TypeParameter },
  ];

  const kindsString: string[] = [];

  const capitalize = (s: string) => s && s[0].toUpperCase() + s.slice(1);

  const singularString = (kind: any) =>
    kind.kind ? ReflectionKind.singularString(kind.kind) : capitalize(kind.key);

  const pluralString = (kind: any) =>
    kind.kind
      ? ReflectionKind.pluralString(kind.kind)
      : `${capitalize(kind.key)}s`;

  kindsString.push(`
  export const KIND_DEFAULTS:  Record<string, string> = {
    ${kinds
      .map((kind) => {
        return `
        'kind.${kind.key}.singular':'${singularString(kind)}',
        'kind.${kind.key}.plural':'${pluralString(kind)}'
        `;
      })
      .join(',')}
  }
  `);

  kindsString.push(`
  export const SINGULAR_KIND_KEY_MAP: Record<string, string> = {
    ${kinds
      .map((kind) => {
        return `['${singularString(kind)}']: 'kind.${kind.key}.singular'`;
      })
      .join(',')}
  }
  `);

  kindsString.push(`
  export const PLURAL_KIND_KEY_MAP: Record<string, string>= {
    ${kinds
      .map((kind) => {
        return `['${pluralString(kind)}']: 'kind.${kind.key}.plural'`;
      })
      .join(',')}
  }
  `);

  const formattedKinds = await prettier.format(kindsString.join('\n'), {
    parser: 'typescript',
    singleQuote: true,
    trailingComma: 'all',
  });

  fs.writeFileSync(themeRenderKindConstantsFile, formattedKinds);

  // WRITE THEME CONTEXT

  const templateFiles = getFiles('templates').filter(
    (file) => file !== 'index',
  );
  const templateSymbols = [
    { symbolName: 'memberTemplate' },
    { symbolName: 'projectTemplate' },
    { symbolName: 'readmeTemplate' },
    { symbolName: 'reflectionTemplate' },
  ];

  const partialsFiles = getFiles('partials').filter((file) => file !== 'index');
  const partialsSymbols = getSymbols(partialsFiles, 'partials');

  const themeRenderContextFile = path.join(
    __dirname,
    '..',
    'src',
    'theme',
    'render-context.ts',
  );

  const importsOut: string[] = [];
  const exportsOut: string[] = [];

  partialsFiles.forEach((file, index) => {
    if (file !== 'index') {
      importsOut.push(
        `import { ${partialsSymbols[index].symbolName} } from './resources/partials/${file}';`,
      );
    }
    exportsOut.push(`export * from './${file}'`);
  });

  templateFiles.forEach((file, index) => {
    if (file !== 'index') {
      importsOut.push(
        `import { ${templateSymbols[index].symbolName} } from './resources/templates/${file}';`,
      );
    }
  });

  const resources: string[] = [];

  resources.push('\n// templates');
  templateSymbols.forEach((symbol) => {
    resources.push('/** @hidden */');
    resources.push(`${symbol.symbolName} = bind(${symbol.symbolName}, this);`);
  });

  resources.push('\n// partials');
  partialsSymbols.forEach((symbol) => {
    resources.push('/** @hidden */');
    resources.push(`${symbol.symbolName} = bind(${symbol.symbolName}, this);`);
  });

  const data = fs
    .readFileSync(themeRenderContextFile)
    ?.toString()
    .replace(
      /\/\* start_imports \*\/((.|\n)*)\/* end_imports \*\//g,
      `
/* start_imports */
${importsOut.join('\n')}
/* end_imports */`,
    )
    .replace(
      /\/\* start_resources \*\/((.|\n)*)\/* end_resources \*\//g,
      `
/* start_resources */
${resources.join('\n')}
/* end_resources */`,
    );

  const formatted = await prettier.format(data, {
    parser: 'typescript',
    singleQuote: true,
    trailingComma: 'all',
  });

  fs.writeFileSync(themeRenderContextFile, formatted);

  consola.success('[typedoc-plugin-markdown] Prebuild resources complete');
}

function getFiles(type: string) {
  const partialsFolder = path.join(resourcesPath, type);
  return fs
    .readdirSync(partialsFolder)
    .map((partialsFile) => path.parse(partialsFile).name);
}

function getSymbols(files: string[], type: string) {
  return files.map((file) => {
    const tsFile = project.getSourceFile(
      path.join(resourcesPath, type, file + '.ts'),
    );
    const symbolName = tsFile?.getExportSymbols()[0]?.getEscapedName();
    return { symbolName };
  });
}
