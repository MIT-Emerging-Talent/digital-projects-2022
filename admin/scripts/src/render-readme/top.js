const nameToTitle = (name = '') =>
  typeof name !== 'string'
    ? ''
    : name
        .split('-')
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join(' ');

export const top = ({ env = {}, home = {} }) =>
  `# ${env.name ? nameToTitle(env.name) : 'Study Repo'}: ${nameToTitle(
    env.repo,
  )}

- [Issues](https://github.com/${env.org}/${env.repo}/issues?q=is%3Aopen)
  - [help wanted](https://github.com/${env.org}/${
    env.repo
  }/issues?q=label%3A%22help%20wanted%22+is%3Aopen)
  - [questions](https://github.com/${env.org}/${
    env.repo
  }/issues?q=label%3Aquestion+is%3Aopen)
  - [discussion](https://github.com/${env.org}/${
    env.repo
  }/issues?q=label%3Adiscussion+is%3Aopen)
- [Shared Notes](./shared-notes)
- [Guides](./guides)


---

`;
