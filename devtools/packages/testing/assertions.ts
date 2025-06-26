import assert from 'assert';
import * as fs from 'fs';
import { diff } from 'jest-diff';
import { getSnapshot } from './helpers.js';

export function assertToMatchSnapshot(name: string, actual: string | string[]) {
  const snapshot = getSnapshot(name, actual);
  try {
    assert.strictEqual(actual, snapshot);
  } catch (error) {
    console.error(diff(actual, snapshot));
    throw error;
  }
}

export function assertFileExists(file: string) {
  const fullPath = `${process.cwd()}/test/${file}`;
  const exists = fs.existsSync(fullPath);
  const assertMessage = `Expected file to exist:`;
  assert.ok(exists, `${assertMessage}: ${fullPath}`);
}
