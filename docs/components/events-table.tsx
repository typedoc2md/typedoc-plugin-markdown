import data from '../json/public-api.json' with { type: 'json' };

export function EventsTable({ name }) {
  const node = data.children.find((child) => child.name === name);

  const summary = getSummaryText(node);
  const rows = getChildren(node);

  return (
    <>
      <p className="py-6">{summary ? <> {summary}</> : null}</p>

      <table className="w-full table-auto border-collapse border border-gray-400">
        <thead>
          <tr>
            <th className="border border-gray-300 p-4 text-left">Event</th>
            <th className="border border-gray-300 p-4 text-left">
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((c) => (
            <tr className="odd:bg-white even:bg-gray-50" key={c.id ?? c.name}>
              <td className="border border-gray-300 p-4">
                <code>{c.name}</code>
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

function getChildren(node) {
  return (
    node?.children.filter((child) => {
      const groupTag = child.comment?.blockTags?.find(
        (tag) => tag.tag === '@group',
      );
      return groupTag?.content.some((part) => part.text === 'Events');
    }) ?? []
  );
}
