import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

/**
 * A grid of linked plugin cards. Each item takes a `title`, an `href`, either
 * a `logo` image path or a Font Awesome `icon`, and a subtitle: `pkg` shows the
 * npm package name, `text` a short description.
 */
export function PluginCards({ items, className = '' }) {
  return (
    <div className={`grid gap-3 sm:grid-cols-2 ${className}`}>
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="flex items-center gap-3 rounded-lg border border-gray-200 p-4 hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-gray-900"
        >
          {item.logo ? (
            <Image
              src={item.logo}
              alt=""
              width={28}
              height={28}
              className="h-7 w-7 shrink-0 object-contain"
            />
          ) : (
            <FontAwesomeIcon
              icon={item.icon}
              className="shrink-0"
              style={{ width: '28px', height: '28px' }}
            />
          )}
          <span className="flex min-w-0 flex-col">
            <span className="text-sm font-medium">{item.title}</span>
            {item.pkg ? (
              <span className="truncate font-mono text-xs text-gray-500 dark:text-gray-400">
                {item.pkg}
              </span>
            ) : (
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {item.text}
              </span>
            )}
          </span>
        </a>
      ))}
    </div>
  );
}
