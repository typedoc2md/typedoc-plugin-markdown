import * as fs from 'fs';
import * as path from 'path';
import * as prettier from 'prettier';
import { Project } from 'ts-morph';

const project = new Project({
  tsConfigFilePath: 'tsconfig.json',
});

const resourcesPath = path.join(__dirname, '..', 'src', 'theme', 'resources');
const templateFiles = getFiles('templates').filter((file) => file !== 'index');
const templateSymbols = getSymbols(templateFiles, 'templates');

const partialsFiles = getFiles('partials').filter((file) => file !== 'index');
const partialsSymbols = getSymbols(partialsFiles, 'partials');

const themeRenderContextFile = path.join(
  __dirname,
  '..',
  'src',
  'theme',
  'markdown-theme-render-context.ts',
);

const partialsBarrelFile = path.join(resourcesPath, 'partials', 'index.ts');

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

fs.writeFileSync(
  themeRenderContextFile,
  prettier.format(data, {
    parser: 'typescript',
    singleQuote: true,
    trailingComma: 'all',
  }),
);

fs.writeFileSync(
  partialsBarrelFile,
  prettier.format(exportsOut.join('\n'), {
    parser: 'typescript',
    singleQuote: true,
    trailingComma: 'all',
  }),
);

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
