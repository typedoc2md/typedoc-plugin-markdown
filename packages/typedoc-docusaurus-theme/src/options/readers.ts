import { Application, Options, OptionsReader } from 'typedoc';

export function addReaders(app: Application, presets: Record<string, any>) {
  app.options.addReader(
    new (class implements OptionsReader {
      name = 'docusaurus-options-pre';
      readonly order = 0;
      readonly supportsPackages = false;
      read(container: Options) {
        Object.entries(presets)
          .filter(([key]) => key !== 'out')
          .forEach(([key, value]) => container.setValue(key, value));
      }
    })(),
  );
  app.options.addReader(
    new (class implements OptionsReader {
      name = 'docusaurus-options-post';
      readonly order = 100;
      readonly supportsPackages = false;
      read(container: Options) {
        if (!app.options.isSet('outputs') && !app.options.isSet('out')) {
          container.setValue('out', presets.out);
        }
      }
    })(),
  );
}
