import assert from 'assert';
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
