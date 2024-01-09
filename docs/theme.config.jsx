import { faMarkdown } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import * as path from 'path';
import { PackageDescription } from './components/package-description';

export default {
  logo: (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ width: '36px', marginRight: '6px' }}>
        <FontAwesomeIcon icon={faMarkdown} size="xs" />
      </div>
      <code style={{ fontSize: '14px' }}>typedoc-plugin-markdown</code>
    </div>
  ),
  project: {
    link: 'https://github.com/tgreyuk/typedoc-plugin-markdown/tree/next',
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  editLink: { text: '' },
  banner: { dismissible: true, text: 'V4 pre-release documentation 👋' },
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
  navigation: {
    prev: false,
    next: false,
  },
  footer: {
    text: <div></div>,
  },
};
