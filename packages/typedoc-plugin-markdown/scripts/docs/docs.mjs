import { consola } from 'consola';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkToc from 'remark-toc';
import { read, writeSync } from 'to-vfile';
import guideOptions from './remark/guide-options.mjs';
import readmeOptions from './remark/readme-options.mjs';

const timeStart = new Date().getTime();

consola.start('Updating docs...');

readmePage();
optionsPage();

async function readmePage() {
  const file = await read('./README.md');
  const vfile = await remark()
    .use(remarkGfm)
    .use(readmeOptions)
    .use(remarkToc, { heading: 'Contents', maxDepth: 2, tight: true })
    .process(file);
  writeSync(vfile);
}

async function optionsPage() {
  const file = await read('./docs/plugin-options.md');
  const processor = await remark().use(remarkGfm).use(guideOptions);
  const vfile = await remark()
    .use(remarkToc, { heading: 'Contents', maxDepth: 3 })
    .processSync(processor.processSync(file));
  writeSync(vfile);
}

process.on('exit', function () {
  consola.success(
    `Finished updating docs in ${(
      (new Date().getTime() - timeStart) /
      1000
    ).toFixed(2)} seconds`,
  );
});
