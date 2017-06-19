
export function displayComment(comment: any) {
  let newComment: string = '';
  if (comment) {
  if (comment.text) {
    newComment += comment.text.replace(/\n/g, '');
  }

  if (comment.shortText) {
    newComment += comment.shortText.replace(/\n/g, '');
  }

  }

  return newComment === '' ? '-' : newComment;
}
