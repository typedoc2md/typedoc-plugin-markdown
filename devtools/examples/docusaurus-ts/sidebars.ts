import { SidebarsConfig } from '@docusaurus/plugin-content-docs';
import typedocSidebar from './docs/api/typedoc-sidebar';

const sidebars: SidebarsConfig = {
  typedocSidebar: [
    {
      type: 'category',
      label: 'Typedoc API',
      link: {
        type: 'doc',
        id: 'api/index',
      },
      items: typedocSidebar,
    },
  ],
};

export default sidebars;
