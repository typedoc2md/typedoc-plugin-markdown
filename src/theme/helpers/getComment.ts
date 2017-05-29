
export function getComment(comment: string) {
    let newComment: string = '';
    if (comment) {
        newComment = comment.replace('\n', '');
    }

    return newComment === '' ? '-' : newComment;
}
