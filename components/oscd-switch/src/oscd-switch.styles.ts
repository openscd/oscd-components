import { css } from 'lit-element';

import { styles } from '@openscd/core';

export default css`
  ${styles}

  mwc-switch {
    --mdc-theme-primary: var(
      --oscd-theme-switch-primary,
      var(--oscd-theme-primary)
    );

    --mdc-switch-selected-track-color: var(
      --oscd-theme-switch-primary-surface,
      var(--oscd-theme-primary-surface)
    );

    --mdc-switch-selected-hover-track-color: var(
      --oscd-theme-switch-primary-surface-active,
      var(--oscd-theme-primary-surface-active)
    );

    --mdc-switch-selected-pressed-track-color: var(
      --oscd-theme-switch-primary-surface-active,
      var(--oscd-theme-primary-surface-active)
    );

    --mdc-switch-selected-focus-track-color: var(
      --oscd-theme-switch-primary-surface-active,
      var(--oscd-theme-primary-surface-active)
    );

    --mdc-switch-selected-hover-handle-color: var(
      --oscd-theme-switch-primary-active,
      var(--oscd-theme-primary-active)
    );

    --mdc-switch-selected-pressed-handle-color: var(
      --oscd-theme-switch-primary-active,
      var(--oscd-theme-primary-active)
    );

    --mdc-switch-selected-focus-handle-color: var(
      --oscd-theme-switch-primary-active,
      var(--oscd-theme-primary-active)
    );

    --mdc-switch-disabled-unselected-track-color: var(
      --oscd-theme-switch-disabled,
      var(--oscd-theme-disabled)
    );

`;
