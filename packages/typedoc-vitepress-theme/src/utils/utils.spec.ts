import { slugifyAnchor } from './utils';

describe('slugifyAnchor', () => {
  it('should anchors with underscores', () => {
    expect(slugifyAnchor('_prop_with_underscore_')).toBe(
      'prop-with-underscore',
    );
  });

  it('should anchors with colons', () => {
    expect(slugifyAnchor('prop:colon')).toBe('prop-colon');
  });
});
