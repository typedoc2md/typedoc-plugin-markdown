import * as fs from 'fs';
import * as path from 'path';
import * as prettier from 'prettier';
import { Project } from 'ts-morph';

const project = new Project({
  tsConfigFilePath: 'tsconfig.json',
});

const resourcesPath = path.join(__dirname, '..', 'src', 'theme', 'resources');

export async function prebuildResources() {
  writeBarrelsFile('partials');
  writeBarrelsFile('templates');
  writeBarrelsFile('helpers');
  writeBarrelsFile('utils');
  writeBarrelsFile('markdown');
  writeResourcesFile();
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

    const jsDocs = tsFile
      ?.getFunctions()[0]
      .getJsDocs()
      .map((jsDoc) => {
        return `
/**
 * ${jsDoc.getComment()};
 *
 * ${jsDoc
   .getTags()
   .map((tag) => `@${tag.getTagName()} ${tag.getComment()}`)
   .join('\n')}
 */`;
      });
    return { symbolName, jsDocs: jsDocs?.join('\n') };
  });
}

function writeBarrelsFile(resourceType: string) {
  const files = getFiles(resourceType).filter(
    (file) => file !== 'index' && !file.endsWith('spec'),
  );
  const symbols = getSymbols(files, resourceType);
  const barrelsFile = path.join(
    __dirname,
    '..',
    'src',
    'theme',
    'resources',
    resourceType,
    'index.ts',
  );
  const out: string[] = [];
  files.forEach((file, index) => {
    out.push(`export { ${symbols[index].symbolName} } from './${file}';`);
  });
  fs.writeFileSync(barrelsFile, out.join('\n'));
}

async function writeResourcesFile() {
  const resourcesFile = path.join(
    __dirname,
    '..',
    'src',
    'theme',
    'resources',
    'index.ts',
  );

  const out = `// THIS FILE IS AUTO GENERATED. DO NOT EDIT DIRECTLY.
import { MarkdownThemeRenderContext } from '../..';
${getResourceImports('templates')}
${getResourceImports('partials')}
${getResourceImports('helpers')}

function bind<F, L extends any[], R>(fn: (f: F, ...a: L) => R, first: F) {
  return (...args: L) => fn(first, ...args);
}
${getResources('templates')}
${getResources('partials')}
${getResources('helpers', false)}

`;
  const formattedOut = await prettier.format(out, {
    parser: 'typescript',
    singleQuote: true,
    trailingComma: 'all',
  });
  fs.writeFileSync(resourcesFile, formattedOut);
}

function getResourceImports(resourceType: string) {
  const files = getFiles(resourceType).filter(
    (file) => file !== 'index' && !file.endsWith('spec'),
  );
  const symbols = getSymbols(files, resourceType);
  return `
  import { ${symbols
    .map((symbol) => symbol.symbolName)
    .join(', ')} } from './${resourceType}';
 `;
}

function getResources(resourceType: string, binding = true) {
  const files = getFiles(resourceType).filter(
    (file) => file !== 'index' && !file.endsWith('spec'),
  );
  const symbols = getSymbols(files, resourceType);

  return `
  export const ${resourceType} = (${binding ? `context: MarkdownThemeRenderContext` : ''}) => {
    return {
      ${symbols.map((symbol) => {
        const returnValue = binding
          ? `bind(${symbol.symbolName},context)`
          : symbol.symbolName;
        return `
${symbol.symbolName}: ${returnValue}`;
      })}
    };
  };`;
}
