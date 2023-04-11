const getDependencyReleaseLine = async (changesets, dependenciesUpdated) => {
  if (dependenciesUpdated.length === 0) return '';

  const updatedDependenciesList = dependenciesUpdated.map(
    (dependency) => `  - ${dependency.name}@${dependency.newVersion}`,
  );

  return [['- Updated peer dependencies'], ...updatedDependenciesList].join(
    '\n',
  );
};

const getReleaseLine = async (changeset, _type) => {
  let usersFromSummary = [];
  changeset.summary
    .replace(/^\s*(?:author|user):\s*@?([^\s]+)/gim, (_, user) => {
      usersFromSummary.push(user);
      return '';
    })
    .trim();
  const users = usersFromSummary.length
    ? usersFromSummary
        .map(
          (userFromSummary) =>
            `[@${userFromSummary}](https://github.com/${userFromSummary})`,
        )
        .join(', ')
    : null;
  const summary = changeset.summary.replace(
    /\(\#(.+?)\)/g,
    '([#$1](https://github.com/tgreyuk/typedoc-plugin-markdown/issues/$1))',
  );

  return [summary, users].join('\n\n');
};

const defaultChangelogFunctions = {
  getReleaseLine,
  getDependencyReleaseLine,
};

exports.default = defaultChangelogFunctions;
