import { css } from 'lit-element';

import { styles } from '@openscd/core';

export default css`
  ${styles}

  :host {
    display: inline-flex;

    --mdc-theme-primary: var(--oscd-theme-primary);
    --mdc-theme-on-primary: var(--oscd-theme-on-primary);
  }
`;
