import * as fs from 'fs-extra';
import { RendererEvent } from 'typedoc/dist/lib/output/events';
import { bootstrapTheme, getNavigationMock } from '../../test/test.utils';
import { GitbookTheme } from './theme.gitbook';

describe(`gitbook theme`, () => {
  let theme: GitbookTheme;
  beforeAll(() => {
    const app = bootstrapTheme([{ name: 'platform', value: 'gitbook' }, { name: 'mode', value: 'modules' }]);
    theme = app.theme as GitbookTheme;
  });
  describe(`summary`, () => {
    test(`should create correct summary output`, () => {
      theme.navigation = getNavigationMock();
      jest.spyOn(fs, 'writeFileSync').mockImplementation();
      jest.spyOn(fs, 'mkdirSync').mockImplementation();
      expect(theme.getSummaryMarkdown(getNavigationMock())).toMatchSnapshot();
    });

    test(`should write summary to file`, () => {
      jest.spyOn(theme, 'getSummaryMarkdown').mockReturnValue('getSummaryMarkdown');
      theme.writeSummary({ outputDirectory: '/outputPath' } as RendererEvent);
      expect(fs.writeFileSync).toHaveBeenCalled();
    });
  });
});
