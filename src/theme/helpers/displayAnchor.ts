import { Options } from '../options';
export function displayAnchor(ref: string) {

  const isGithub = Options.markdownRepoHost === 'github';
  let md = '';
  if (isGithub) {
  md = `<a id="${ref.toLowerCase()}"></a>`;
  }
  return md;
}
