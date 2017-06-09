
export function displaySymbol(kindString: string) {

  let symbol = '';
  if (kindString === 'Constructor signature') {
    symbol = '⊕ ';
  } else {
    symbol = '► ';
  }

  return symbol;
}
