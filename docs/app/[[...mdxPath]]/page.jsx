import { generateStaticParamsFor, importPage } from 'nextra/pages';
import * as path from 'path';
import '../../globals.css';
import { useMDXComponents as getMDXComponents } from '../../mdx-components';

export const generateStaticParams = generateStaticParamsFor('mdxPath');

export async function generateMetadata(props) {
  const params = await props.params;

  const { metadata } = await importPage(params.mdxPath);

  const titlePath = metadata.filePath
    .split(path.sep)
    .map((part) => part[0]?.toUpperCase() + part.substring(1))
    .slice(1, metadata.asIndexPage ? -2 : -1)
    .filter((part) => Boolean(part))
    .join(' • ');

  const titleParts = [];
  if (titlePath) {
    titleParts.push(titlePath);
  }
  titleParts.push(metadata.title);
  const title = `typedoc-plugin-markdown • ${titleParts.join(' • ')}`;
  return {
    ...metadata,
    title,
  };
}

const Wrapper = getMDXComponents().wrapper;

export default async function Page(props) {
  const params = await props.params;
  const result = await importPage(params.mdxPath);
  const { default: MDXContent, toc, metadata } = result;
  return (
    <Wrapper toc={toc} metadata={metadata} suppressHydrationWarning>
      <MDXContent {...props} params={params} />
    </Wrapper>
  );
}
