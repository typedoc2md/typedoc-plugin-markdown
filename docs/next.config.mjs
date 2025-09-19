import nextra from 'nextra';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const withNextra = nextra({});

export default withNextra({
  turbopack: {
    root: __dirname,
  },
});
