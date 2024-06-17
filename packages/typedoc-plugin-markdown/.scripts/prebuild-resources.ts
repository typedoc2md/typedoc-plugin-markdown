import * as fs from 'fs-extra';
import * as path from 'path';
import * as prettier from 'prettier';
import { Project } from 'ts-morph';

const project = new Project({
  tsConfigFilePath: 'tsconfig.json',
});

const resourcesPath = path.join(__dirname, '..', 'src', 'theme', 'context');

export async function prebuildResources() {
  writeResourcesFile();
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

    const returnType = getReturnType(returnTypeParts);

    const params = fn
      ?.getParameters()
      .filter((parameter) => parameter.getName() !== 'context')
      .map((parameter) => {
        let parameterTextType = parameter.getType().getText();
        if (parameterTextType.startsWith('{')) {
          parameterTextType = parameterTextType.replace(
            /import\(".*"\)\.([a-zA-Z_][a-zA-Z0-9_]*)/g,
            '$1',
          );
        }
        const typeunions = parameterTextType.split('|').map((unions) => {
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
 ${jsDoc
   .getTags()
   .map((tag) => `* ${tag.getText()}`)
   .join('\n')}*/`;
      });
    return { symbolName, returnType, jsDocs: jsDocs?.join(''), params };
  });
}

function getReturnType(returnTypeParts?: string) {
  if (returnTypeParts?.startsWith('{')) {
    const pattern = /import\(".*"\)\.([a-zA-Z_][a-zA-Z0-9_]*)/;
    const replacement = '$1';
    return returnTypeParts.replace(pattern, replacement);
  }
  return returnTypeParts
    ?.split('|')
    .map((union) => {
      const unionParts = union.split('.');
      if (unionParts[1] && unionParts[1].startsWith('MarkdownPageEvent')) {
        return `MarkdownPageEvent<${unionParts[unionParts.length - 1]}`;
      }
      return unionParts[unionParts.length - 1];
    })
    .join('|');
}

async function writeResourcesFile() {
  const resourcesFile = path.join(
    __dirname,
    '..',
    'src',
    'theme',
    'context',
    'resources.ts',
  );

  fs.rmSync(resourcesFile, { force: true });

  const typedocTypes = [
    'ArrayType',
    'Comment',
    'CommentDisplayPart',
    'ConditionalType',
    'ContainerReflection',
    'DeclarationHierarchy',
    'DeclarationReflection',
    'DocumentReflection',
    'IndexedAccessType',
    'InferredType',
    'IntersectionType',
    'IntrinsicType',
    'LiteralType',
    'NamedTupleMember',
    'ParameterReflection',
    'ProjectReflection',
    'QueryType',
    'ReferenceReflection',
    'ReferenceType',
    'Reflection',
    'ReflectionCategory',
    'ReflectionFlags',
    'ReflectionGroup',
    'ReflectionKind',
    'ReflectionType',
    'SignatureReflection',
    'SomeType',
    'TupleType',
    'TypeOperatorType',
    'TypeParameterReflection',
    'UnionType',
    'UnknownType',
  ];

  const out = `// THIS FILE IS AUTO GENERATED. DO NOT EDIT DIRECTLY.
import { MarkdownPageEvent } from '@plugin/events';
import { MarkdownThemeContext } from 'theme';
import {${typedocTypes.join(',')}} from 'typedoc';
import { templates, partials, helpers } from './index';

${getResources('templates')}
${getResources('partials')}
${getResources('helpers')}
`;

  const formattedOut = await prettier.format(out, {
    parser: 'typescript',
    singleQuote: true,
    trailingComma: 'all',
  });

  fs.writeFileSync(resourcesFile, formattedOut);
}

function getResources(resourceType: string, binding = true) {
  const files = getFiles(resourceType).filter(
    (file) => file !== 'index' && file !== '_index' && !file.endsWith('spec'),
  );
  const symbols = getSymbols(files, resourceType);

  return `
  export const resource${resourceType.charAt(0).toUpperCase()}${resourceType.slice(1)} = (${binding ? `context: MarkdownThemeContext` : ''}) => {
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
            .join(
              ',',
            )}) => ${resourceType}.${symbol.symbolName}.apply(context,[${symbol.params
            ?.filter((param) => param.name !== 'this')
            .map((param) => param.name)
            .join(',')}]) as ${symbol.returnType}
          `;
        })
        .join(',\n')}
      };
  };`;
}
