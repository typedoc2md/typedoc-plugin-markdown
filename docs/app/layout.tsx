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
  icons: {
    icon: '/logos/plugin-logo.png',
  },
};

const navbar = (
  <Navbar
    logo={
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ width: '26px', height: '26px' }}>
          <img
            src="/logos/plugin-logo.png"
            alt="Plugin Logo"
            style={{ width: '26px', height: '26px' }}
          />
        </div>
        <div
          style={{
            marginLeft: '6px',
            fontSize: '14px',
            fontWeight: 'bold',
          }}
        >
          typedoc-plugin-markdown
        </div>
      </div>
    }
    projectLink="https://github.com/typedoc2md/typedoc-plugin-markdown"
  />
);
const footer = <Footer></Footer>;

export default async function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/logos/plugin-logo.png" type="image/png" />
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
      </body>
    </html>
  );
}
