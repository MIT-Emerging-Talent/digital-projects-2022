import prettier from 'prettier';

import pipe from '../../utils/pipe.js';

import { top } from './top.js';
import { section } from './section.js';

import { group } from './group.js';
import { ta } from './ta.js';

import { prettierConfig } from '../../prettier-config.js';

export const renderReadme = (config = {}) =>
  pipe({
    top: top(config),
    groups:
      config?.groups?.length > 0
        ? section(config, {
            component: group,
            data: config.groups,
          })
        : '',
    tas:
      config?.tas?.length > 0
        ? section(config, {
            title: 'TAs',
            component: ta,
            data: config.tas,
            grid: true,
          })
        : '',
    techSupport: `
<details>
<summary>Tech Support</summary>

<a href="https://rubberduckdebugging.com/" target="_blank"><img alt="Rubber Ducky" src="./admin/assets/rubber-ducky.png"/></a>

</details>`,
  })(
    Object.entries,
    ($) =>
      $.map((entry) => [entry[0], prettier.format(entry[1], prettierConfig)]),
    Object.fromEntries,
  );
