import { css } from 'lit-element';

import { styles } from '@openscd/core';

export default css`
  ${styles}

  mwc-textfield,
  mwc-switch {
    --mdc-theme-primary: var(
      --oscd-theme-textfield-primary,
      var(--oscd-theme-primary)
    );
    --mdc-theme-error: var(
      --oscd-theme-textfield-state-danger,
      var(--oscd-theme-state-danger)
    );
  }

  mwc-switch {
    margin-left: 12px;
  }

  .oscd-textfield__container {
    display: flex;
    flex-direction: row;
  }

  .oscd-textfield__container > div {
    flex: auto;
  }

  .oscd-textfield__switch {
    display: flex;
    align-items: center;
    height: 56px;
  }
`;
