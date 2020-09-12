import { PageEvent } from 'typedoc/dist/lib/output/events';

export function reflectionTitle(this: PageEvent, withParams: boolean) {
  const title: string[] = [];
  if (this.url === this.project.url) {
    return 'Globals';
  }
  if (this.model.kindString) {
    title.push(`${this.model.kindString}: `);
  }
  title.push(this.model.name);
  if (withParams && this.model.typeParameters) {
    const typeParameters = this.model.typeParameters
      .map((typeParameter) => typeParameter.name)
      .join(', ');
    title.push(`\\<**${typeParameters}**>`);
  }
  return title.join('');
}
