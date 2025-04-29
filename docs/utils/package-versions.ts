import { readFileSync } from 'fs';
import path from 'path';

function getVersion(name: string): string {
  const packageJsonPath = path.join(
    process.cwd(),
    '../packages',
    name,
    'package.json',
  );
  const json = JSON.parse(readFileSync(packageJsonPath, 'utf8'));
  return json.version;
}

export const packageVersions = {
  'typedoc-plugin-markdown': getVersion('typedoc-plugin-markdown'),
};
