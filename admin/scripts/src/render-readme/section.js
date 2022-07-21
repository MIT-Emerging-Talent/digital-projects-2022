import { peopleGrid } from './people-grid.js';

export const section = (
  config,
  { title = '', intro = '', component = () => {}, data = [], grid = false },
) => {
  const people = data.map((item) => component(config, item));
  const renderedPeople = grid ? peopleGrid(people) : people.join('\n\n');

  return `

${title ? `## ${title}` : ''}

${intro}

${renderedPeople}

---

`;
};
