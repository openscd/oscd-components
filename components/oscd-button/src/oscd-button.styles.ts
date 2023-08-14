import { css } from 'lit-element';

import { styles } from '@openscd/core';

export default css`
  ${styles}

  :host {
    --mdc-theme-primary: var(
      --oscd-theme-button-primary,
      var(--oscd-theme-primary)
    );
    --mdc-theme-on-primary: var(
      --oscd-theme-button-on-primary,
      var(--oscd-theme-on-primary)
    );
  }
`;
