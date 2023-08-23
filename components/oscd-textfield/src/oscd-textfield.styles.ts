import { css } from 'lit-element';

import { styles } from '@openscd/form';

export default css`
  ${styles}

  mwc-textfield {
    width: 100%;
    --mdc-theme-primary: var(
      --oscd-theme-textfield-primary,
      var(--oscd-theme-primary)
    );
    --mdc-theme-error: var(
      --oscd-theme-textfield-state-danger,
      var(--oscd-theme-state-danger)
    );

    --mdc-text-field-fill-color: var(--oscd-theme-textfield-fill);

    --mdc-text-field-ink-color: var(--oscd-theme-textfield-ink);
    --mdc-text-field-label-ink-color: var(--oscd-theme-textfield-ink);

    --mdc-text-field-idle-line-color: var(--oscd-theme-textfield-line);

    --mdc-text-field-disabled-ink-color: var(
      --oscd-theme-textfield-disabled-ink
    );
    --mdc-text-field-disabled-fill-color: var(
      --oscd-theme-textfield-disabled-fill
    );
  }

  oscd-switch {
    margin-left: 12px;
  }

  mwc-icon-button {
    color: var(--oscd-theme-textfield-ink);
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
