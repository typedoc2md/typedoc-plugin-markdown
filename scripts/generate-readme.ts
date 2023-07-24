import * as fs from 'fs';

const packages = [
  'typedoc-plugin-markdown',
  'docusaurus-plugin-typedoc',
  'typedoc-github-wiki-theme',
  'typedoc-gitlab-wiki-theme',
  'typedoc-vitepress-theme',
];

const readme = ['# Packages\n'];

readme.push('| Package | Version | Downloads | Changelog | ');
readme.push('| :---| :---| :--- | --- |');

packages.forEach((packageName) => {
  readme.push(
    [
      `[${packageName}](./packages/${packageName}#readme)`,
      `![npm](https://img.shields.io/npm/v/${packageName}%2Fnext?style=flat-square&logo=npm)`,
      `![Downloads](https://img.shields.io/npm/dm/${packageName})`,
      `[Changelog](./packages/${packageName}/CHANGELOG.md)`,
    ].join(' | ') + ' | ',
  );
});

fs.writeFileSync('README.md', readme.join('\n'));
