import { faMarkdown } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';
import * as path from 'path';
import { PackageDescription } from './components/package-description';

export default {
  logo: (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ width: '36px' }}>
        <FontAwesomeIcon icon={faMarkdown} size="sm" />
      </div>
      <div
        style={{
          marginLeft: '8px',
          fontSize: '12px',
          fontWeight: 'bold',
        }}
      >
        TYPEDOC-PLUGIN-MARKDOWN
      </div>
    </div>
  ),
  project: {
    link: 'https://github.com/tgreyuk/typedoc-plugin-markdown/tree/next',
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  editLink: { content: '' },
  banner: {
    content: (
      <>
        V4 pre-release documentation 👋{' '}
        <Link href="/docs/changelog#400">Read more</Link>
      </>
    ),
    dismissible: false,
  },
  components: {
    PackageDescription,
  },

  head: () => {
    const { asPath } = useRouter();
    const title = asPath
      .substring(1)
      .split(path.sep)
      .map((part) => part.replace(/([-_]\w)/g, (g) => ' ' + g[1].toUpperCase()))
      .filter((part) => Boolean(part))
      .map((part) => part[0]?.toUpperCase() + part.substring(1))
      .join(' • ');
    const pathname = usePathname();
    const url = `https://typedoc-plugin-markdown.org${pathname}`;
    return (
      <>
        <link rel="icon" href="/markdown-logo.svg" type="image/png" />
        <title>
          {`typedoc-plugin-markdown • ${title || 'Generate TypeScript API documentation as Markdown.'}`}
        </title>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
      </>
    );
  },
  feedback: { content: null },
  navigation: {
    prev: true,
    next: true,
  },
  footer: false,
};
