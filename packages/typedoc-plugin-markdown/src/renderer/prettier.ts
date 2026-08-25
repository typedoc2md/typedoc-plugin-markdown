import { Renderer } from 'typedoc';

/**
 * Prettier helpers.
 */
export async function formatWithPrettierIfAvailable(
  renderer: Renderer,
  contents: string,
  fileName: string,
) {
  const prettier = await getPrettier();
  if (!prettier) {
    renderer.application.logger.warn(
      '[typedoc-plugin-markdown] Prettier formatting skipped as Prettier must be installed for the `formatWithPrettier` option to work. Please npm i prettier --save-dev.',
    );
    return contents;
  }

  // Check Prettier version
  const version = prettier.version;

  // Ensure compatibility with a specific version (if needed)
  const [major] = version.split('.');
  if (Number(major) < 3) {
    renderer.application.logger.warn(
      '[typedoc-plugin-markdown] Prettier formatting skipped as Prettier must be above version 3 for the `formatWithPrettier` option to work.',
    );
    return contents;
  }

  const prettierConfigFile = renderer.application.options.getValue(
    'prettierConfigFile',
  ) as string;

  /**
   * Resolve Prettier configuration against the file being written, so that
   * path-specific config (and `.editorconfig` sections such as `[*.md]`) apply.
   */
  const config = await prettier.resolveConfig(fileName, {
    editorconfig: true,
    ...(prettierConfigFile ? { config: prettierConfigFile } : {}),
  });

  // Format code using Prettier
  const formattedCode = prettier.format(contents, {
    ...config,
    parser: 'markdown',
  });

  renderer.application.logger.verbose(
    '[typedoc-plugin-markdown] Markdown formatted with Prettier.',
  );

  return formattedCode;
}

async function getPrettier() {
  try {
    //@ts-error - prettier is optional and doesn't have to be installed
    return await import('prettier');
  } catch {
    return null;
  }
}
