describe(`Urls:`, () => {
  describe(`(Multiple entrypoints)`, () => {
    test(`should get urls (excludeGroups=false)`, async () => {
      const { project, theme } = await global.bootstrap(
        ['categories.ts', 'modules/module-1'],
        {
          options: {
            excludeGroups: false,
          },
        },
      );
      expect(theme.getUrls(project).map((url) => url.url)).toMatchSnapshot();
    });

    test(`should get urls (flattenOutputFiles=true)`, async () => {
      const { project, theme } = await global.bootstrap(
        ['reflections.ts', 'modules/module-1'],
        {
          options: {
            flattenOutputFiles: true,
          },
        },
      );
      expect(theme.getUrls(project).map((url) => url.url)).toMatchSnapshot();
    });

    test(`should get urls (excludeGroups=false, includeFileNumberPrefixes: true, globalsPageStrategy:auto)`, async () => {
      const { project, theme } = await global.bootstrap(
        ['modules/module-1', 'categories.ts'],
        {
          options: {
            excludeGroups: false,
            includeFileNumberPrefixes: true,
            globalsPageStrategy: 'auto',
          },
        },
      );
      expect(theme.getUrls(project).map((url) => url.url)).toMatchSnapshot();
    });

    test(`should get urls (excludeGroups=false, outputFileStrategy=modules, includeFileNumberPrefixes: true)`, async () => {
      const { project, theme } = await global.bootstrap(
        ['categories.ts', 'modules/module-1'],
        {
          options: {
            excludeGroups: false,
            outputFileStrategy: 'modules',
            includeFileNumberPrefixes: true,
          },
        },
      );
      expect(theme.getUrls(project).map((url) => url.url)).toMatchSnapshot();
    });

    test(`should get urls (excludeGroups=true, includeFileNumberPrefixes: true)`, async () => {
      const { project, theme } = await global.bootstrap(
        ['modules/module-1', 'categories.ts'],
        {
          options: {
            excludeGroups: true,
            includeFileNumberPrefixes: true,
          },
        },
      );
      expect(theme.getUrls(project).map((url) => url.url)).toMatchSnapshot();
    });

    test(`should get urls (excludeGroups=true, outputFileStrategy=modules, includeFileNumberPrefixes: true, readme=none)`, async () => {
      const { project, theme } = await global.bootstrap(
        ['categories.ts', 'modules/module-1'],
        {
          options: {
            readme: 'none',
            excludeGroups: true,
            outputFileStrategy: 'modules',
            includeFileNumberPrefixes: true,
          },
        },
      );
      expect(theme.getUrls(project).map((url) => url.url)).toMatchSnapshot();
    });
  });

  describe(`(Single entrypoint)`, () => {
    test(`should get urls (excludeGroups=false, includeFileNumberPrefixes=true)`, async () => {
      const { project, theme } = await global.bootstrap(['categories.ts'], {
        options: {
          excludeGroups: false,
          includeFileNumberPrefixes: true,
        },
      });
      expect(theme.getUrls(project).map((url) => url.url)).toMatchSnapshot();
    });

    test(`should get urls (flattenOutputFiles=true)`, async () => {
      const { project, theme } = await global.bootstrap(['reflections.ts'], {
        options: {
          flattenOutputFiles: true,
        },
      });
      expect(theme.getUrls(project).map((url) => url.url)).toMatchSnapshot();
    });

    test(`should get urls (excludeGroups=true, includeFileNumberPrefixes=true, readme=none)`, async () => {
      const { project, theme } = await global.bootstrap(['categories.ts'], {
        options: {
          readme: 'none',
          excludeGroups: true,
          includeFileNumberPrefixes: true,
        },
      });
      expect(theme.getUrls(project).map((url) => url.url)).toMatchSnapshot();
    });
  });

  describe(`(Monorepo)`, () => {
    test(`should get urls (entryPointStrategy=packages)`, async () => {
      const { project, theme } = await global.bootstrap(
        ['monorepo/packages/*'],
        {
          options: {
            entryPointStrategy: 'packages',
          },
        },
      );
      expect(theme.getUrls(project).map((url) => url.url)).toMatchSnapshot();
    });

    test(`should get urls (entryPointStrategy=packages, includeFileNumberPrefixes=true)`, async () => {
      const { project, theme } = await global.bootstrap(
        ['monorepo/packages/*'],
        {
          options: {
            entryPointStrategy: 'packages',
            includeFileNumberPrefixes: true,
          },
        },
      );
      expect(theme.getUrls(project).map((url) => url.url)).toMatchSnapshot();
    });

    test(`should get urls for single package (entryPointStrategy=packages)`, async () => {
      const { project, theme } = await global.bootstrap(
        ['monorepo/packages/package-1'],
        {
          options: {
            entryPointStrategy: 'packages',
          },
        },
      );
      expect(theme.getUrls(project).map((url) => url.url)).toMatchSnapshot();
    });
  });
});
