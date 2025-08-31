import data from '../json/public-api.json' with { type: 'json' };

export function PropsTable({ name, props }) {
  const node = data.children.find((child) => child.name === name);

  const rows = getChildren(node, props);

  return (
    <>
      <table className="w-full table-auto border-collapse border border-gray-400 mt-4">
        <thead>
          <tr>
            <th className="border border-gray-300 p-4 text-left">Name</th>
            <th className="border border-gray-300 p-4 text-left">
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((c) => (
            <tr className="odd:bg-white even:bg-gray-50" key={c.id ?? c.name}>
              <td className="border border-gray-300 p-4">
                <code>"{c.name}"</code>
              </td>

              <td className="border border-gray-300 p-4">
                {getSummaryText(c)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

function getSummaryText(node) {
  return (
    node?.comment?.summary
      ?.map((p) => (typeof p?.text === 'string' ? p.text : ''))
      .join('')
      .trim() ?? ''
  );
}

function getChildren(node, props: string[] = []) {
  return props.length
    ? (node?.children?.filter((child) => props.includes(child.name)) ?? [])
    : (node?.children ?? []);
}
