describe(`Navigation:`, () => {
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
      expect(theme.getNavigation(project)).toMatchSnapshot();
    });

    test(`should get urls (excludeGroups=false, includeFileNumberPrefixes: true)`, async () => {
      const { project, theme } = await global.bootstrap(
        ['modules/module-1', 'categories.ts'],
        {
          options: {
            excludeGroups: false,
            includeFileNumberPrefixes: true,
          },
        },
      );
      expect(theme.getNavigation(project)).toMatchSnapshot();
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
      expect(theme.getNavigation(project)).toMatchSnapshot();
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
      expect(theme.getNavigation(project)).toMatchSnapshot();
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
      expect(theme.getNavigation(project)).toMatchSnapshot();
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
      expect(theme.getNavigation(project)).toMatchSnapshot();
    });
    test(`should get urls (excludeGroups=true, includeFileNumberPrefixes=true, readme=none)`, async () => {
      const { project, theme } = await global.bootstrap(['categories.ts'], {
        options: {
          readme: 'none',
          excludeGroups: true,
          includeFileNumberPrefixes: true,
        },
      });
      expect(theme.getNavigation(project)).toMatchSnapshot();
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
      expect(theme.getNavigation(project)).toMatchSnapshot();
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
      expect(theme.getNavigation(project)).toMatchSnapshot();
    });
  });
});
