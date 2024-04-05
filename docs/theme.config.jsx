import Image from 'next/image';
import { useRouter } from 'next/router';
import * as path from 'path';
import { PackageDescription } from './components/package-description';

export default {
  logo: (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ width: '36px' }}>
        <Image src="/markdown-logo.svg" alt="Markdown" width={64} height={64} />
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
  editLink: { text: 'x' },
  banner: {
    content: <>V4 pre-release documentation 👋</>,
    dismissible: false,
  },
  components: {
    PackageDescription,
  },

  useNextSeoProps() {
    const { asPath } = useRouter();
    const title = asPath
      .substring(1)
      .split(path.sep)
      .map((part) => part.replace(/([-_]\w)/g, (g) => ' ' + g[1].toUpperCase()))
      .filter((part) => Boolean(part))
      .map((part) => part[0]?.toUpperCase() + part.substring(1))
      .join(' • ');

    return {
      titleTemplate: `${title || 'Introduction'} • typedoc-plugin-markdown`,
    };
  },
  feedback: { content: null },
  navigation: {
    prev: true,
    next: true,
  },
  footer: {
    content: <div></div>,
  },
};
