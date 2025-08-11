import data from '../json/public-api';

export function PropsTable({ name }) {
  const node = data.children.find((child) => child.name === 'MarkdownHooks');
  const title = node?.name ?? 'Unknown';
  const summary = getSummaryText(node);
  const rows = getChildren(node);

  return (
    <>
      <blockquote>
        <strong>{title}</strong>
        {summary ? <> — {summary}</> : null}
      </blockquote>

      <table className="border-collapse border border-gray-400">
        <thead>
          <tr>
            <th className="border border-gray-300 p-4">Constant</th>
            <th className="border border-gray-300 p-4">Hook string</th>
            <th className="border border-gray-300 p-4">Description</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((c) => (
            <tr key={c.id ?? c.name}>
              <td className="border border-gray-300 p-4">
                <code>{c.name}</code>
              </td>
              <td className="border border-gray-300 p-4">
                <code>"{getHookString(c)}"</code>
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
  return node?.type?.declaration?.children ?? [];
}

function getHookString(c) {
  if (c?.type?.type === 'literal') return String(c.type.value);
  if (typeof c?.defaultValue === 'string')
    return c.defaultValue.replace(/^'|'$/g, '');
  return '';
}
