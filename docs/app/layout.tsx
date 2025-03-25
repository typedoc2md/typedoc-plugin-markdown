import { faMarkdown } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Footer, Layout, Navbar } from 'nextra-theme-docs';
import 'nextra-theme-docs/style.css';
import { Head } from 'nextra/components';
import { getPageMap } from 'nextra/page-map';
import '../globals.css';

export const metadata = {
  // Define your metadata here
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
};

const navbar = (
  <Navbar
    logo={
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ width: '26px', height: '18px' }}>
          <FontAwesomeIcon
            icon={faMarkdown}
            width={'26px'}
            size="sm"
            style={{ width: '100%', height: '100%' }}
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
        <link rel="icon" href="/logos/markdown-logo.svg" type="image/png" />
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
