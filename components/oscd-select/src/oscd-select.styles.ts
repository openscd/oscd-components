import { css } from 'lit-element';

import { styles } from '@openscd/core';

export default css`
  ${styles}

  mwc-select {
    width: 100%;
    --mdc-theme-primary: var(
      --oscd-theme-select-primary,
      var(--oscd-theme-primary)
    );
    --mdc-theme-error: var(
      --oscd-theme-select-state-danger,
      var(--oscd-theme-state-danger)
    );

    --mdc-select-fill-color: var(--oscd-theme-select-fill);

    --mdc-select-ink-color: var(--oscd-theme-select-ink);
    --mdc-select-label-ink-color: var(--oscd-theme-select-ink);

    --mdc-select-idle-line-color: var(--oscd-theme-select-line);

    --mdc-select-disabled-ink-color: var(--oscd-theme-select-disabled-ink);
    --mdc-select-disabled-fill-color: var(--oscd-theme-select-disabled-fill);

    --mdc-select-dropdown-icon-color: var(--oscd-theme-select-ink);
  }
`;
