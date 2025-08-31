import NextLink from 'next/link';

export function Link({ label, href }) {
  return (
    <>
      <NextLink
        href={href}
        className="x:focus-visible:nextra-focus x:text-primary-600 x:underline x:hover:no-underline x:decoration-from-font x:[text-underline-position:from-font]"
      >
        {label}
      </NextLink>
    </>
  );
}
