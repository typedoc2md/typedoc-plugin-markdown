import { MarkdownThemeContext } from '@plugin/theme/index.js';
import { strict as assert } from 'assert';
import { getAnchoredTitle } from './get-anchored-title.js';

function contextWith(options: Record<string, unknown>) {
  return {
    options: { getValue: (name: string) => options[name] },
  } as unknown as MarkdownThemeContext;
}

describe('typedoc-plugin-markdown (Theme / getAnchoredTitle)', () => {
  it('should return the title unchanged without an anchor', () => {
    const context = contextWith({
      useHTMLAnchors: true,
      useCustomAnchors: true,
      customAnchorsFormat: 'curlyBrace',
    });
    assert.deepStrictEqual(getAnchoredTitle(context, 'Foo', undefined), {
      title: 'Foo',
    });
  });

  it('should return an html anchor', () => {
    const context = contextWith({ useHTMLAnchors: true });
    assert.deepStrictEqual(getAnchoredTitle(context, 'Foo', 'foo'), {
      htmlAnchor: '<a id="foo"></a>',
      title: 'Foo',
    });
  });

  it('should append each custom anchor format', () => {
    const formats: Record<string, string> = {
      curlyBrace: 'Foo {#foo}',
      escapedCurlyBrace: 'Foo \\{#foo\\}',
      squareBracket: 'Foo [#foo]',
    };
    Object.entries(formats).forEach(([customAnchorsFormat, expected]) => {
      const context = contextWith({
        useCustomAnchors: true,
        customAnchorsFormat,
      });
      assert.strictEqual(
        getAnchoredTitle(context, 'Foo', 'foo').title,
        expected,
      );
    });
  });

  it('should throw for an unknown custom anchor format', () => {
    const context = contextWith({
      useCustomAnchors: true,
      customAnchorsFormat: 'unknown',
    });
    assert.throws(() => getAnchoredTitle(context, 'Foo', 'foo'));
  });
});
