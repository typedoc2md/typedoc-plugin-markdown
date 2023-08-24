import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkToc from 'remark-toc';
import { read, writeSync } from 'to-vfile';
import guideOptions from './remark/guide-options.mjs';
import readmeOptions from './remark/readme-options.mjs';

readmePage();
optionsPage();

async function readmePage() {
  const file = await read('./README.md');
  const vfile = await remark()
    .use(remarkGfm)
    .use(readmeOptions)
    .use(remarkToc, { heading: 'Contents', maxDepth: 2 })
    .process(file);
  writeSync(vfile);
}

async function optionsPage() {
  const file = await read('./docs/guides/options.md');
  const processor = await remark().use(remarkGfm).use(guideOptions);
  const vfile = await remark()
    .use(remarkToc, { heading: 'Contents', maxDepth: 3 })
    .processSync(processor.processSync(file));
  writeSync(vfile);
}
