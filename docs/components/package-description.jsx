import Link from 'next/link';

export const PackageDescription = ({ pjson }) => {
  const parts = pjson.description
    .substring(0, pjson.description.length - 1)
    .split(' ');

  return (
    <div className="text-lg">
      <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 mb-5 mt-3 text-sm font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
        {pjson.version}
      </span>
      <br />
      {pjson.description}
    </div>
  );
};
