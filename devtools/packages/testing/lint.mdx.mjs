#!/usr/bin/env node

import { consola } from 'consola';
import { glob } from 'glob';
import { remark } from 'remark';
import remarkMdx from 'remark-mdx';
import { read } from 'to-vfile';

const timeStart = new Date().getTime();

let error = false;

consola.start(`Begin linting MDX...`);

lintMdx();

async function lintMdx() {
  const mdFiles = await glob(`./test/out/**/opts-1/**/*.md`);

  mdFiles.forEach(async (file) => {
    const vfile = await read(file);
    try {
      await remark().use(remarkMdx).processSync(vfile);
    } catch (e) {
      error = true;
      consola.error(`Error linting MDX on file ${file}`);
      throw new Error(e);
    }
  });
}

process.on('exit', () => {
  if (!error) {
    consola.success(
      `Finished linting MDX in ${(
        (new Date().getTime() - timeStart) /
        1000
      ).toFixed(2)} seconds`,
    );
  }
});
