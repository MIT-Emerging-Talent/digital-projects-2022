import { learner } from './learner.js';
import { peopleGrid } from './people-grid.js';

export const group = (
  config,
  { name = '', topic = '', repo = '', members = [] },
) => `
## ${name}

> [project repository](${repo}), [check-ins](https://github.com/${
  config.home.org
}/${config.home.repo}/issues?q=label%3Acheck-in+label%3A%22${encodeURIComponent(
  name,
)}%22)

${topic}

${
  members && members.length !== 0
    ? peopleGrid(members.map((m) => learner(config, m)))
    : ''
}

  `;
