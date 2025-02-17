import { readFileSync } from 'fs';
import * as path from 'path';

export async function PackageVersion({ name }) {
  const packageJsonPath = path.join(
    process.cwd(),
    `../packages/${name}/package.json`,
  );
  const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf8'));
  return (
    <strong className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 mt-3 text-sm font-bold text-gray-600 ring-1 ring-inset ring-gray-500/10">
      Version: {packageJson.version}
    </strong>
  );
}
