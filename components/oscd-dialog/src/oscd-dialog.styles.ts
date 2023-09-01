import { css } from 'lit-element';

import { styles } from '@openscd/core';

export default css`
  ${styles}

  mwc-dialog {
    --mdc-theme-surface: var(--oscd-theme-surface);
    --mdc-dialog-content-ink-color: var(--oscd-theme-text-color);
  }
`;
