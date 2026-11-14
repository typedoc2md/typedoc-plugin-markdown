import { faNpm } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getVersion } from '../utils/package-versions';

export function PackageVersion({ name }) {
  const version = getVersion(name);

  return (
    <a
      href={`https://www.npmjs.com/package/${name}`}
      target="_blank"
      rel="noreferrer"
      title={`${name} on npm`}
      className="inline-flex items-center gap-2 rounded-md bg-gray-100 px-2 py-1 mt-3 text-sm font-normal text-gray-600 ring-1 ring-inset ring-gray-500/10 hover:bg-gray-200 dark:bg-neutral-800 dark:text-gray-300 dark:ring-white/10 dark:hover:bg-neutral-700"
    >
      <FontAwesomeIcon
        icon={faNpm}
        style={{ height: '1.75em', width: 'auto' }}
      />
      {name}@{version}
    </a>
  );
}
