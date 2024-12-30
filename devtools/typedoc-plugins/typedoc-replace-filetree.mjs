import { Converter } from 'typedoc';

export function load(app) {
  app.converter.on(
    Converter.EVENT_CREATE_DECLARATION,
    (_context, reflection) => {
      if (
        reflection.comment &&
        reflection?.comment?.summary &&
        reflection?.comment?.summary.length
      ) {
        reflection.comment.summary = reflection.comment.summary.map(
          (summary) => ({
            ...summary,
            text: summary.text.replace(
              /<FileTree\b[^>]*>.*?<\/FileTree>/gs,
              '*See public docs for file tree example.*',
            ),
          }),
        );
      }
    },
  );
}
