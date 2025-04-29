export const OptionLink = ({ type, name }) => {
  return (
    <a
      href={`/docs/options/${type}-options#${name.toLowerCase()}`}
      className="x:focus-visible:nextra-focus x:text-primary-600 x:underline x:hover:no-underline x:decoration-from-font x:[text-underline-position:from-font]"
    >
      <code className="nextra-code">{name}</code>
    </a>
  );
};
