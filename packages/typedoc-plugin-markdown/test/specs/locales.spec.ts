import { assertToMatchSnapshot } from '@devtools/testing';
import * as assert from 'assert';
import * as fs from 'fs';
import * as path from 'path';
import { de, en, fr, ja, ko, zh } from '../../dist/internationalization/index.js';
import { getOutDir } from '../helpers.js';

const LOCALES = { en, de, fr, ja, ko, zh };

/**
 * Keys that are declared and translated but that nothing renders. Listed
 * explicitly rather than skipped silently, so that adding a key forces a
 * decision about whether the fixtures need to cover it.
 *
 * `theme_globals`, `theme_member` and `theme_member_plural` are read by no
 * template at all.
 */
const UNRENDERED_KEYS = ['theme_globals', 'theme_member', 'theme_member_plural'];

/**
 * Only ever rendered by the packages index, which runs under a single locale -
 * see `test/fixtures/locales.cjs`.
 */
const PACKAGES_KEYS = ['theme_package', 'theme_packages', 'theme_version'];

const PACKAGES_LANG = 'de';

/**
 * Snapshots one locale per page. The layout is identical in every locale - only
 * the words differ - and the assertions below already cover the translations
 * themselves, so snapshotting all six buys near-identical files and a diff
 * nobody can review.
 */
function expectSnapshotFileToEqual(
  strategy: string,
  lang: string,
  file: string,
) {
  const contents = fs
    .readFileSync(path.join(getOutDir(), 'md', 'locales', strategy, lang, file))
    .toString();
  assertToMatchSnapshot(
    `locales/locales.${strategy}.${lang}.${file.replace(/\//g, '-')}`,
    contents,
  );
}

function readLocaleOutput(lang: string) {
  const files: string[] = [];
  const walk = (dir: string) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(full);
      } else if (entry.name.endsWith('.md')) {
        files.push(full);
      }
    }
  };
  walk(path.join(getOutDir(), 'md', 'locales', 'members', lang));
  return files.map((file) => ({
    file: path.relative(getOutDir(), file),
    contents: fs.readFileSync(file).toString(),
  }));
}

describe(`typedoc-plugin-markdown (Integration / Locales)`, () => {
  Object.keys(LOCALES).forEach((lang) => {
    it(`should translate every string rendered in "${lang}"`, () => {
      // A string the plugin fails to register falls back to its own key, so
      // scanning for a raw key catches that whole class of failure exactly.
      const raw = readLocaleOutput(lang).flatMap(({ file, contents }) =>
        [...contents.matchAll(/\btheme_[a-z_]+/g)].map(
          (match) => `${file}: ${match[0]}`,
        ),
      );
      assert.deepEqual(raw, []);
    });

    it(`should render every translatable string in "${lang}"`, () => {
      // Guards the fixtures themselves: a key stops being covered the moment
      // the sources stop producing the construct that renders it.
      const contents = readLocaleOutput(lang)
        .map(({ contents }) => contents)
        .join('\n');
      const missing = Object.entries(LOCALES[lang])
        .filter(([key]) => !UNRENDERED_KEYS.includes(key))
        .filter(([key]) => !PACKAGES_KEYS.includes(key))
        .filter(([, value]) => !contents.includes(value as string))
        .map(([key]) => key);
      assert.deepEqual(missing, []);
    });
  });

  it(`should translate the packages index`, () => {
    const contents = fs
      .readFileSync(
        path.join(
          getOutDir(),
          'md',
          'locales',
          'packages',
          PACKAGES_LANG,
          'README.md',
        ),
      )
      .toString();
    const missing = PACKAGES_KEYS.filter(
      (key) => !contents.includes(LOCALES[PACKAGES_LANG][key]),
    );
    assert.deepEqual(missing, []);
    assert.deepEqual([...contents.matchAll(/\btheme_[a-z_]+/g)], []);
  });

  it(`should compile class hierarchy and properties`, () => {
    expectSnapshotFileToEqual('members', 'en', 'index/classes/ChildClass.md');
  });

  it(`should compile enum members`, () => {
    expectSnapshotFileToEqual('members', 'en', 'index/enumerations/SomeEnum.md');
  });

  it(`should compile interface event properties`, () => {
    expectSnapshotFileToEqual('members', 'en', 'index/interfaces/SomeInterface.md');
  });

  it(`should compile union members`, () => {
    expectSnapshotFileToEqual('members', 'en', 'index/type-aliases/SomeUnion.md');
  });

  it(`should compile defaulted type parameters`, () => {
    expectSnapshotFileToEqual('members', 'en', 'index/type-aliases/SomeGeneric.md');
  });

  it(`should compile the index and its references`, () => {
    expectSnapshotFileToEqual('members', 'en', 'index/README.md');
  });

  it(`should compile the packages index`, () => {
    expectSnapshotFileToEqual('packages', PACKAGES_LANG, 'README.md');
  });
});
