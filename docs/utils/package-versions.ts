import { readFileSync } from 'fs';
import path from 'path';

export function getVersion(name: string): string {
  const packageJsonPath = path.join(
    process.cwd(),
    '../packages',
    name,
    'package.json',
  );
  const json = JSON.parse(readFileSync(packageJsonPath, 'utf8'));
  return json.version;
}
