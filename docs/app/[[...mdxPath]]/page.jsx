import { normalizePages } from 'nextra/normalize-pages';
import { getPageMap } from 'nextra/page-map';
import { generateStaticParamsFor, importPage } from 'nextra/pages';
import '../../globals.css';
import { useMDXComponents as getMDXComponents } from '../../mdx-components';

export const generateStaticParams = generateStaticParamsFor('mdxPath');

const SITE_NAME = 'typedoc-plugin-markdown';

// Titles read most specific first, site name last, so the part that tells
// pages apart survives when tabs and search results truncate them:
// "Quick Start • VitePress • typedoc-plugin-markdown". Section names come from
// the same resolved page map as the breadcrumb, so they match the sidebar.
export async function generateMetadata(props) {
  const params = await props.params;
  const { metadata } = await importPage(params.mdxPath);
  const route = `/${(params.mdxPath ?? []).join('/')}`;

  if (route === '/') {
    return { ...metadata, title: `${SITE_NAME} • ${metadata.title}` };
  }

  const { activePath } = normalizePages({ list: await getPageMap(), route });
  const titles = activePath
    // The top-level section ("Documentation", "Plugins") is in every title
    // below it and tells pages apart no better than the site name does.
    .slice(1)
    .map((item) => item.title)
    .filter((title) => typeof title === 'string' && title)
    // A section's index page usually repeats the section's own title.
    .filter((title, i, all) => title !== all[i - 1])
    .reverse();

  if (titles.length === 0) {
    titles.push(metadata.title);
  }

  return {
    ...metadata,
    title: [...titles, SITE_NAME].join(' • '),
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
