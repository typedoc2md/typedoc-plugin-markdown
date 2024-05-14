export function markdownBlocksToHtml(markdownText: string) {
  // Remove new lines inside <p> tags
  markdownText = markdownText.replace(/<p>([\s\S]*?)<\/p>/gm, (match, p1) => {
    const contentWithoutNewLinesOrLeadingSpaces = p1
      .replace(/\r?\n|\r/g, ' ')
      .replace(/^\s+/, '');
    return `<p>${contentWithoutNewLinesOrLeadingSpaces}</p>`;
  });

  // Replace headers
  markdownText = markdownText.replace(
    /^(#{1,6})\s*(.*?)\s*$/gm,
    (match, p1, p2) => {
      const level = p1.length;
      return `<h${level}>${p2}</h${level}>`;
    },
  );

  // Replace triple code blocks with code
  markdownText = markdownText.replace(
    /```.*?\n([\s\S]*?)```/gs,
    '<code>$1</code>',
  );

  // Replace horizontal rules
  markdownText = markdownText.replace(/^[-*_]{3,}\s*$/gm, '<hr />');

  // Replace unordered lists
  markdownText = markdownText.replace(/^(\s*-\s+.+$(\r?\n)?)+/gm, (match) => {
    const items = match.trim().split('\n');
    const listItems = items
      .map((item) => `<li>${item.trim().substring(2)}</li>`)
      .join('');
    return `<ul>${listItems}</ul>`;
  });

  // Replace ordered lists
  markdownText = markdownText.replace(
    /^(\s*\d+\.\s+.+$(\r?\n)?)+/gm,
    (match) => {
      const items = match.trim().split('\n');
      const listItems = items
        .map(
          (item) => `<li>${item.trim().substring(item.indexOf('.') + 2)}</li>`,
        )
        .join('');
      return `<ol>${listItems}</ol>`;
    },
  );

  // Replace paragraphs
  markdownText = markdownText.replace(
    /^(?!.*<[^>]+>)(.+?)(?:(?:\r\n|\r|\n){2,}|$)(?!.*<[^>]+>)/gm,
    '<p>$1</p>',
  );

  // Replace ordered lists
  markdownText = markdownText.replace(
    /^(\s*\d+\.\s+.+$(\r?\n)?)+/gm,
    (match) => {
      const items = match.trim().split('\n');
      const listItems = items
        .map(
          (item) => `<li>${item.trim().substring(item.indexOf('.') + 1)}</li>`,
        )
        .join('');
      return `<ol>${listItems}</ol>`;
    },
  );

  // Finally remove all new lines
  return markdownText.replace(/\n/g, '');
}
