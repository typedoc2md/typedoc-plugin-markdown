import Link from 'next/link';

export const PackageDescription = ({ description }) => {
  const parts = description.substring(0, description.length - 1).split(' ');

  return (
    <p className="nx-mt-6 nx-leading-7">
      {parts.map((part) => {
        const isLink = [
          'TypeDoc',
          'typedoc-plugin-markdown',
          'remark',
          'VitePress',
        ].includes(part);
        if (isLink) {
          const HREF = {
            TypeDoc: 'https://typedoc.org',
            'typedoc-plugin-markdown': '/',
            remark: 'https://remark.js.org',
            VitePress: 'https://vitepress.dev',
          };

          return (
            <>
              {' '}
              <Link
                className="nx-text-primary-600 nx-underline"
                href={HREF[part]}
                target={HREF[part].startsWith('http') ? '_blank' : null}
              >
                {part}
              </Link>
            </>
          );
        }
        return ' ' + part;
      })}
      .
    </p>
  );
};
