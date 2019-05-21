import { UrlMapping } from 'typedoc';
import { bootstrapTheme, getExpectedUrls } from '../../test/test.utils';
import { BitbucketTheme } from './theme.bitbucket';

describe(`bitbucket theme`, () => {
  describe(`build urls`, () => {
    test(`should getUrls for mode='modules'`, () => {
      const app = bootstrapTheme([{ name: 'platform', value: 'bitbucket' }, { name: 'mode', value: 'modules' }]);
      const theme = app.theme as BitbucketTheme;
      const project = app.project;
      const urlMappings = theme.getUrls(project) as UrlMapping[];
      expect(getExpectedUrls(urlMappings)).toMatchSnapshot();
    });

    test(`should getUrls for mode='file' and readme='none'`, () => {
      const app = bootstrapTheme([
        { name: 'platform', value: 'bitbucket' },
        { name: 'mode', value: 'file' },
        { name: 'readme', value: 'none' },
      ]);
      const theme = app.theme as BitbucketTheme;
      const project = app.project;
      const urlMappings = theme.getUrls(project) as UrlMapping[];
      expect(getExpectedUrls(urlMappings)).toMatchSnapshot();
    });
  });
});
