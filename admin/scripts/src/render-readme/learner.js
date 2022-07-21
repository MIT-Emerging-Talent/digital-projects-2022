export const learner = ({ env = {} }, { name = '', user = '' }) => {
  const repoURL = `https://github.com/${env.org}/${env.repo}`;

  // --- scoped utilities for generating links ---

  const issuesSearch = (label = [], linkText = label, role = 'assignee') =>
    `[${linkText}](${repoURL}/issues/?q=${role}%3A${user}+${
      Array.isArray(label)
        ? label.map((l) => `label%3A%22${encodeUIRComponent(l)}%22`).join('+')
        : `label%3A%22${encodeURIComponent(label)}%22`
    })`;

  const aList = (...rows) =>
    rows
      .filter((row) => row.length > 0)
      .map((row) => row.join(' \\| '))
      .join('<br>');

  // --- build the section ---

  const header = `<h4 id="${user}">${name} - <a href="https://github.com/${user}">${user}</a></h4>`;

  const avatar = `<img src="./${env.assetsPath.join(
    '/',
  )}/avatars/${user}.png" height="200px" width="200px" alt="${user} avatar" />`;

  const classLinks = [
    issuesSearch('help wanted', 'help wanted', 'author'),
    issuesSearch('question', 'questions', 'author'),
  ];

  const linksList = aList(classLinks);

  return `

${avatar}

${header}

[study repository](https://github.com/${user}/learning-in-public)

${linksList}

`;
};
