export const workshop = ({}, { name = '', url = '', description = '' }) => {
  // --- build the section ---

  let workshopSection = `### [${name}](${url})`;

  if (description) {
    workshopSection += ' \n\n> ' + description;
  }

  return workshopSection + '\n\n';
};
