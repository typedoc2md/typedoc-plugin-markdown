module.exports = {
  entryPoints: ['./src/sources.ts'],
  tsconfig: './tsconfig.json',
  media: './media/',
  includeVersion: true,
  cleanOutputDir: true,
  githubPages: false,
  sort: ['kind', 'instance-first'],
  disableSources: false,
};
