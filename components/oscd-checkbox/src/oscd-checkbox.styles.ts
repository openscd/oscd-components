import { css } from 'lit-element';

import { styles } from '@openscd/core';

export default css`
  ${styles}

  mwc-checkbox {
    --mdc-checkbox-ink-color: var(--oscd-theme-checkbox-ink);
    --mdc-checkbox-unchecked-color: var(--oscd-theme-checkbox-unchecked);
    --mdc-checkbox-disabled-color: var(--oscd-theme-checkbox-disabled);

    --mdc-theme-secondary: var(
      --oscd-theme-checkbox-secondary,
      var(--oscd-theme-secondary)
    );
    --mdc-theme-on-surface: var(
      --oscd-theme-checkbox-on-surface,
      var(--oscd-theme-on-surface)
    );
  }
`;
