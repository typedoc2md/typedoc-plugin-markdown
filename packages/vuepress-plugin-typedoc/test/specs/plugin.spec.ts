import * as tmp from 'tmp';

tmp.setGracefulCleanup();

const tmpobj = tmp.dirSync;

describe(`Plugin:`, () => {
  beforeAll(async () => {});

  describe(`(render)`, () => {
    test(`should write docs`, () => {
      expect(true).toBeTruthy();
    });
  });
});
