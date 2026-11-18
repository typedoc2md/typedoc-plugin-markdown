import { Analytics } from '@vercel/analytics/next';
import { Footer, Layout, Navbar } from 'nextra-theme-docs';
import 'nextra-theme-docs/style.css';
import { Head } from 'nextra/components';
import { getPageMap } from 'nextra/page-map';
import '../globals.css';

export const metadata = {
  metadataBase: new URL('https://typedoc-plugin-markdown.org'),
  title: {
    default: 'typedoc-plugin-markdown',
    template: '%s',
  },
  description:
    'Generate TypeScript API documentation as Markdown with TypeDoc.',
  openGraph: {
    title: 'typedoc-plugin-markdown',
    description:
      'Generate TypeScript API documentation as Markdown with TypeDoc.',
    url: 'https://typedoc-plugin-markdown.org',
    siteName: 'typedoc-plugin-markdown',
    type: 'website',
  },
};

const navbar = (
  <Navbar
    logo={
      <span className="flex items-center gap-2">
        {/* The Markdown mark (public domain), https://github.com/dcurtis/markdown-mark */}
        <svg
          viewBox="0 0 208 128"
          width="36"
          height="22"
          fill="#3178c6"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="m15 10c-2.7614 0-5 2.2386-5 5v98c0 2.761 2.2386 5 5 5h178c2.761 0 5-2.239 5-5v-98c0-2.7614-2.239-5-5-5zm-15 5c0-8.28427 6.71573-15 15-15h178c8.284 0 15 6.71573 15 15v98c0 8.284-6.716 15-15 15h-178c-8.28427 0-15-6.716-15-15z"
          />
          <path d="m30 98v-68h20l20 25 20-25h20v68h-20v-39l-20 25-20-25v39zm125 0-30-33h20v-35h20v35h20z" />
        </svg>
        <span className="text-base font-extrabold tracking-tight">
          typedoc-plugin-markdown
        </span>
      </span>
    }
    projectLink="https://github.com/typedoc2md/typedoc-plugin-markdown"
  />
);
const footer = <Footer></Footer>;

// Lets Google show "typedoc-plugin-markdown" as the site name in search
// results instead of the bare domain. Google reads it from the home page.
const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'typedoc-plugin-markdown',
  url: 'https://typedoc-plugin-markdown.org/',
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </Head>
      <body>
        <Layout
          docsRepositoryBase="https://github.com/typedoc2md/typedoc-plugin-markdown/tree/main/docs"
          navbar={navbar}
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          pageMap={await getPageMap()}
          footer={footer}
          editLink={''}
          feedback={{ content: '' }}
        >
          {children}
        </Layout>
        {process.env.NEXT_PUBLIC_VERCEL_ENV === 'production' && <Analytics />}
      </body>
    </html>
  );
}
