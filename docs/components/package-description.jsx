import { Callout } from 'nextra/components';

export const PackageDescription = ({ pjson }) => {
  const parts = pjson.description
    .substring(0, pjson.description.length - 1)
    .split(' ');

  return (
    <div>
      <strong className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 mt-3 text-sm font-bold text-gray-600 ring-1 ring-inset ring-gray-500/10">
        v{pjson.version}
      </strong>
      <Callout type="info">{pjson.description}</Callout>
    </div>
  );
};
