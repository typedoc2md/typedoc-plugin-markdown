import { glob } from 'glob';
import { remark } from 'remark';
import remarkMdx from 'remark-mdx';
import { read } from 'to-vfile';

const timeStart = new Date().getTime();

let error = false;

console.log(`Begin linting MDX...`);

lintMdx();

async function lintMdx() {
  const mdFiles = await glob(`./docs/**/*.md`);

  mdFiles.forEach(async (file) => {
    const vfile = await read(file);
    try {
      console.log(`Linting ${file}`);
      await remark().use(remarkMdx).processSync(vfile);
    } catch (e) {
      error = true;
      throw new Error(e);
    }
  });
}

process.on('exit', () => {
  if (!error) {
    console.log(
      `Finished linting MDX in ${(
        (new Date().getTime() - timeStart) /
        1000
      ).toFixed(2)} seconds`,
    );
  }
});
