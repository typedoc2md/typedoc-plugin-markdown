import { Options } from '../options';
export function displayAnchor(ref: string) {

  const isGithub = Options.markdownFlavour === 'github';
  let md = '';
  if (isGithub) {

    if (ref) {
    md = `<a id="${ref.toLowerCase()}"></a>`;
    }
  }
  return md;
}
