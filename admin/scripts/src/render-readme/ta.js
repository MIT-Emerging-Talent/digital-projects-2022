export const ta = ({ env = {}, home = {} }, { name = '', user = '' }) => {
  const repoURL = `https://github.com/${env.org}/${env.repo}`;

  // --- scoped utilities for generating links ---

  const aList = (...rows) =>
    rows
      .filter((row) => row.length > 0)
      .map((row) => row.join(' \\| '))
      .join('<br>');

  // --- build the section ---

  const header = `<h3 id="${user}">${name}: <a href="https://github.com/${user}">${user}</a></h3>`;

  const avatar = `<img src="./${env.assetsPath.join(
    '/',
  )}/avatars/${user}.png" height="200px" width="200px" alt="${user} avatar" />`;

  const issuesLinks = [
    `<a href="${repoURL}/issues?q=assignee%3A${user}">assigned</a>`,
    `<a href="${repoURL}/issues?q=mentions%3A${user}">mentioned</a>`,
  ];

  const linksList = aList(issuesLinks);

  return `

${avatar}

${header}

${linksList}

`;
};
