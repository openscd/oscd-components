import { css } from 'lit-element';

import { styles } from '@openscd/core';

export default css`
  ${styles}

  mwc-textfield {
    --mdc-theme-primary: var(
      --oscd-theme-textfield-primary,
      var(--oscd-theme-primary)
    );
    --mdc-theme-error: var(
      --oscd-theme-textfield-error,
      var(--oscd-theme-error)
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
