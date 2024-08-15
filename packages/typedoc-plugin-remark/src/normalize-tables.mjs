/**
 * Normalize tables to have a newline before and after the content of each cell.
 *
 * This is necessary to ensure that the content of each cell is properly formatted by `htmlTable` formatting option
 * from typedoc-plugin-markdown is used.
 */
export default function () {
  const compiler = this.compiler || this.Compiler;
  this.compiler = (tree) => {
    let content = compiler(tree);
    content = content
      .replace(/^\s*(<\/?(table|thead|tbody|tr|th|td)>)/gm, (match, p1) => p1)
      .replace(
        /<td>\s*([\s\S]*?)\s*<\/td>/gm,
        (match, p1) =>
          `<td>\n\n${p1
            .split('\n')
            .map((line) => line.trim())
            .join('\n')}\n\n</td>`,
      );
    return content;
  };
}
