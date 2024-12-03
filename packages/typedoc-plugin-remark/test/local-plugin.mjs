import { visit } from 'unist-util-visit';

export default function remarkAddKeyword() {
  return (tree) => {
    visit(tree, 'code', (node) => {
      node.meta = `playground`;
    });
  };
}
