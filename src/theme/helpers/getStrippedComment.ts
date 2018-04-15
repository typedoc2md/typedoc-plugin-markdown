import { Flavour } from '../enums/flavour.enum';
import { ThemeService } from '../theme.service';

/**
 * Returns comments block with new lines stripped
 * @param comment
 */
export function getStrippedComment(comment: any) {
  const options = ThemeService.getOptions();
  const lineBreak = options.mdFlavour === Flavour.BITBUCKET ? ' ' : '<br><br>';
  let newComment: string = '';
  if (comment) {
    if (comment.text) {
      newComment += comment.text.replace(/\n\n/g, lineBreak);
    }
    if (comment.shortText) {
      newComment += comment.shortText.replace(/\n\n/g, lineBreak);
    }
  }
  return newComment === '' ? '-' : newComment;
}
