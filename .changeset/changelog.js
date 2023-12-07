const getReleaseLine = async (changeset, _type) => {
  return changeset.summary.replace(
    /\(\#(.+?)\)/g,
    '([#$1](https://github.com/tgreyuk/typedoc-plugin-markdown/issues/$1))',
  );
};

const getDependencyReleaseLine = async (changesets, dependenciesUpdated) => {
  if (dependenciesUpdated.length === 0) return '';

  const updatedDependenciesList = dependenciesUpdated.map(
    (dependency) => `  - ${dependency.name}@${dependency.newVersion}`,
  );

  return [['- Updated peer dependencies'], ...updatedDependenciesList].join(
    '\n',
  );
};

const defaultChangelogFunctions = {
  getReleaseLine,
  getDependencyReleaseLine,
};

exports.default = defaultChangelogFunctions;
