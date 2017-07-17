/**
 * Returns the member symbol
 * @param kindString
 */
export function getMemberSymbol(kindString: string) {
  let symbol = '';
  switch (kindString) {
    case 'Constructor signature':
      symbol = '⊕ ';
      break;
    case 'Call signature':
      symbol = '► ';
      break;
    case 'Type alias':
      symbol = 'Τ';
      break;
    case 'Property':
    case 'Variable':
      symbol = '● ';
      break;
    default:
  }
  return symbol;
}
