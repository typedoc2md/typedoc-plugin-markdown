import * as fs from 'fs-extra';
import * as path from 'path';
import * as prettier from 'prettier';
import { Project } from 'ts-morph';

const project = new Project({
  tsConfigFilePath: 'tsconfig.json',
});

const resourcesPath = path.join(
  __dirname,
  '..',
  'src',
  'theme',
  'markdown-theme-render-context',
);

export async function prebuildResources() {
  //writeBarrelsFile('templates');
  //writeBarrelsFile('partials');
  //writeResourcesBarrelsFile();
  //writeBarrelsFile('templates');
  //writeBarrelsFile('helpers');
  //writeBarrelsFile('utils');
  //writeBarrelsFile('markdown');
  //writeResourcesFile();
  writeLibsBarrelsFile('markdown');
  writeLibsBarrelsFile('utils');
  writeResourcesFile2();
}

function getFiles(type: string) {
  const partialsFolder = path.join(resourcesPath, type);
  return fs
    .readdirSync(partialsFolder)
    .map((partialsFile) => path.parse(partialsFile).name);
}

function getSymbols(files: string[], type: string, thePath = resourcesPath) {
  return files.map((file) => {
    const tsFile = project.getSourceFile(
      path.join(thePath, type, file + '.ts'),
    );
    const symbolName = tsFile?.getExportSymbols()[0]?.getEscapedName();
    const fn = tsFile?.getFunction(symbolName as string);
    const returnTypeParts = fn?.getReturnType().getText();
    const returnType = returnTypeParts
      ?.split('|')
      .map((union) => {
        const unionParts = union.split('.');
        if (unionParts[1] && unionParts[1].startsWith('MarkdownPageEvent')) {
          return `MarkdownPageEvent<${unionParts[unionParts.length - 1]}`;
        }
        return unionParts[unionParts.length - 1];
      })
      .join('|');

    const params = fn
      ?.getParameters()
      .filter((parameter) => parameter.getName() !== 'context')
      .map((parameter) => {
        const typeunions = parameter
          .getType()
          .getText()
          .split('|')
          .map((unions) => {
            const union = unions.split('.');
            const isKeyOf = union[0].startsWith('keyof');
            if (union[1] && union[1].startsWith('MarkdownPageEvent')) {
              return `MarkdownPageEvent<${union[union.length - 1]}`;
            }
            const typeParts: string[] = [];
            if (isKeyOf) {
              typeParts.push('keyof');
            }
            typeParts.push(union[union.length - 1]);
            return typeParts.join(' ');
          });
        const name = parameter.getName();
        const isOptional = parameter.isOptional();
        const initializer = parameter.getInitializer();
        const defaultValue = initializer ? initializer.getText() : undefined;

        return {
          name,
          type: typeunions.join('| '),
          isOptional,
          defaultValue,
          hasInitializer: Boolean(initializer),
        };
      });

    const jsDocs = tsFile
      ?.getFunctions()[0]
      .getJsDocs()
      .map((jsDoc) => {
        return `
/**
 * ${jsDoc.getComment() ? jsDoc.getComment() : ''}
 *
 ${jsDoc
   .getTags()
   .map((tag) => `* ${tag.getText()}`)
   .join('\n')}*/`;
      });
    return { symbolName, returnType, jsDocs: jsDocs?.join(''), params };
  });
}

function writeLibsBarrelsFile(resourceType: string) {
  const libsPath = path.join(__dirname, '..', 'src', 'theme', 'lib');
  const folder = path.join(libsPath, resourceType);
  const files = fs
    .readdirSync(folder)
    .map((partialsFile) => path.parse(partialsFile).name)
    .filter((file) => file !== 'index' && !file.endsWith('spec'));

  const symbols = getSymbols(files, resourceType, libsPath);
  const barrelsFile = path.join(
    __dirname,
    '..',
    'src',
    'theme',
    'lib',
    resourceType,
    'index.ts',
  );

  const barrelsFileComments = fs.existsSync(barrelsFile)
    ? fs
        .readFileSync(barrelsFile)
        .toString()
        .match(/\/\*[\s\S]*?\*\//)
    : null;

  const out: string[] = [
    `${barrelsFileComments ? barrelsFileComments[0] : ''}

// PLEASE NOTE: THE CONTENTS OF THE FILE BELOW THIS POINT IS AUTO GENERATED!
`,
  ];

  files.forEach((file, index) => {
    out.push(`export { ${symbols[index].symbolName} } from './${file}';`);
  });

  fs.outputFileSync(barrelsFile, out.join('\n'));
}

/*function writeResourcesBarrelsFile() {
  const templateFiles = getFiles('templates').filter(
    (file) => file !== 'index' && !file.endsWith('spec'),
  );
  const templateSymbols = getSymbols(templateFiles, 'templates');

  const partialFiles = getFiles('partials').filter(
    (file) => file !== 'index' && !file.endsWith('spec'),
  );
  const partialSymbols = getSymbols(partialFiles, 'partials');

  const barrelsFile = path.join(
    __dirname,
    '..',
    'src',
    'theme',
    'resources',
    'index.ts',
  );

  const barrelsFileComments = fs
    .readFileSync(barrelsFile)
    .toString()
    .match(/\/\*[\s\S]*?\*\//);

  const out: string[] = [
    `${barrelsFileComments ? barrelsFileComments[0] : ''}

// PLEASE NOTE: THE CONTENTS OF THE FILE BELOW THIS POINT IS AUTO GENERATED!
`,
  ];
  templateFiles.forEach((file, index) => {
    out.push(
      `export { ${templateSymbols[index].symbolName} } from './templates/${file}';`,
    );
  });
  partialFiles.forEach((file, index) => {
    out.push(
      `export { ${partialSymbols[index].symbolName} } from './partials/${file}';`,
    );
  });
  fs.writeFileSync(barrelsFile, out.join('\n'));
}*/

async function writeResourcesFile2() {
  const resourcesFile = path.join(
    __dirname,
    '..',
    'src',
    'theme',
    'markdown-theme-render-context',
    'namespaces.ts',
  );

  fs.rmSync(resourcesFile, { force: true });

  const typedocTypes = [
    'DeclarationReflection',
    'ProjectReflection',
    'CommentDisplayPart',
    'Comment',
    'SignatureReflection',
    'ReferenceReflection',
    'ParameterReflection',
    'Reflection',
    'SomeType',
    'ArrayType',
    'ConditionalType',
    'IndexedAccessType',
    'InferredType',
    'IntersectionType',
    'IntrinsicType',
    'LiteralType',
    'NamedTupleMember',
    'QueryType',
    'ReferenceType',
    'TypeOperatorType',
    'UnionType',
    'UnknownType',
    'TypeParameterReflection',
    'DeclarationHierarchy',
    'ContainerReflection',
    'ReflectionType',
    'TupleType',
    'ReflectionKind',
    'ReflectionCategory',
    'ReflectionGroup',
  ];

  const out = `// THIS FILE IS AUTO GENERATED. DO NOT EDIT DIRECTLY.
import { MarkdownThemeRenderContext } from '@plugin/theme';
import { TextContentMappings } from '@plugin/app/options';
import {${typedocTypes.join(',')}} from 'typedoc';


${getResourceImports('templates')}
${getResourceImports('partials')}
${getResourceImports('helpers')}

${getResources2('templates')}
${getResources('partials')}
${getResources2('helpers')}



`;

  const formattedOut = await prettier.format(out, {
    parser: 'typescript',
    singleQuote: true,
    trailingComma: 'all',
  });
  fs.writeFileSync(resourcesFile, formattedOut);
}

/*async function writeResourcesFile() {
  const resourcesFile = path.join(
    __dirname,
    '..',
    'src',
    'theme',
    'resources',
    'resources.ts',
  );

  const typedocTypes = [
    'DeclarationReflection',
    'ProjectReflection',
    'CommentDisplayPart',
    'Comment',
    'SignatureReflection',
    'ReferenceReflection',
    'ParameterReflection',
    'Reflection',
    'SomeType',
    'ArrayType',
    'ConditionalType',
    'IndexedAccessType',
    'InferredType',
    'IntersectionType',
    'IntrinsicType',
    'LiteralType',
    'NamedTupleMember',
    'QueryType',
    'ReferenceType',
    'TypeOperatorType',
    'UnionType',
    'UnknownType',
    'TypeParameterReflection',
    'DeclarationHierarchy',
    'ContainerReflection',
    'ReflectionType',
    'TupleType',
  ];

  const out = `// THIS FILE IS AUTO GENERATED. DO NOT EDIT DIRECTLY.
import { MarkdownThemeRenderContext } from '../..';
import {${typedocTypes.join(',')}} from 'typedoc';

${getResourceImports('templates')}
${getResourceImports('partials')}



${getResources('templates')}
${getResources('partials')}


`;

  const formattedOut = await prettier.format(out, {
    parser: 'typescript',
    singleQuote: true,
    trailingComma: 'all',
  });
  fs.writeFileSync(resourcesFile, formattedOut);
}*/

function getResourceImports(resourceType: string) {
  const files = getFiles(resourceType).filter(
    (file) => file !== 'index' && !file.endsWith('spec'),
  );
  const symbols = getSymbols(files, resourceType);

  return files
    .map((file, index) => {
      return `import {${symbols[index].symbolName} } from './${resourceType}/${file}';
   `;
    })
    .join('');
}

function getResources(resourceType: string, binding = true) {
  const files = getFiles(resourceType).filter(
    (file) => file !== 'index' && !file.endsWith('spec'),
  );
  const symbols = getSymbols(files, resourceType);

  return `

  export const ${resourceType} = (${binding ? `context: MarkdownThemeRenderContext` : ''}) => {
    return {
      ${symbols
        .map((symbol) => {
          return `
          ${symbol.jsDocs}
          ${symbol.symbolName}: (${symbol.params
            ?.filter((param) => param.name !== 'this')
            .map(
              (param) =>
                `${param.name}${param.isOptional && !param.hasInitializer ? '?' : ''}:${param.type}${param.hasInitializer ? `=${param.defaultValue}` : ''}`,
            )
            .join(',')}) => ${symbol.symbolName}(context,${symbol.params
            ?.filter((param) => param.name !== 'this')
            .map((param) => param.name)
            .join(',')})
          `;
        })
        .join(',\n')}
      };
  };`;
}

function getResources2(resourceType: string, binding = true) {
  const files = getFiles(resourceType).filter(
    (file) => file !== 'index' && !file.endsWith('spec'),
  );
  const symbols = getSymbols(files, resourceType);

  return `

  export const ${resourceType} = (${binding ? `context: MarkdownThemeRenderContext` : ''}) => {
    return {
      ${symbols
        .map((symbol) => {
          return `
          ${symbol.symbolName}: (${symbol.params
            ?.filter((param) => param.name !== 'this')
            .map(
              (param) =>
                `${param.name}${param.isOptional && !param.hasInitializer ? '?' : ''}:${param.type}${param.hasInitializer ? `=${param.defaultValue}` : ''}`,
            )
            .join(',')}) => ${symbol.symbolName}.apply(context,[${symbol.params
            ?.filter((param) => param.name !== 'this')
            .map((param) => param.name)
            .join(',')}]) as ${symbol.returnType}
          `;
        })
        .join(',\n')}
      };
  };`;
}
