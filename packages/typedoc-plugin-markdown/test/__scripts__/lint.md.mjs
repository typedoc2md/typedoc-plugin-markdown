import { consola } from 'consola';
import { glob } from 'glob';
import markdownlint from 'markdownlint';

const timeStart = new Date().getTime();

consola.start(`Begin linting Markdown...`);

lintMarkdown();

export async function lintMarkdown() {
  const mdFiles = await glob(`./test/out/**/*.md`);
  const options = {
    files: mdFiles,
    config: {
      default: true,
      //line-length
      MD013: false,
      //no-duplicate-header
      MD024: false,
      //ul-indent
      MD007: false,
      //blank-line-inside-blockquote
      MD028: false,
      //list-marker-space
      MD030: false,
      //no-inline-html
      MD033: false,
      //no-bare-urls
      MD034: false,
      //no-emphasis-as-heading
      MD036: false,
      //fenced-code-language
      MD040: false,
      //first-line-h1
      MD041: false,
      //reference-links-images
      MD052: false,
    },
  };
  markdownlint(options, (err, result) => {
    const resultString = err || (result || '').toString();
    if (resultString) {
      consola.error('Error linting Markdown' + '\n' + resultString + '\n');
      throw new Error();
    }
    consola.success(
      `Finished linting Markdown ${(
        (new Date().getTime() - timeStart) /
        1000
      ).toFixed(2)} seconds`,
    );
  });
}
