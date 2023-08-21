import { css } from 'lit-element';

import { styles } from '@openscd/core';

export default css`
  ${styles}

  :host {
    outline: none;
  }

  :host(:focus-within) section {
    box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
      0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);
    outline-width: 4px;
    transition: all 250ms linear;
  }

  section {
    background-color: var(
      --oscd-action-pane-theme-surface,
      var(--oscd-theme-surface)
    );
    transition: all 200ms linear;
    outline-style: solid;
    margin: 0px;
    outline-width: 0px;
    outline-color: var(
      --oscd-action-pane-theme-primary,
      var(--oscd-theme-primary)
    );
  }

  section.secondary {
    outline-color: var(
      --oscd-action-pane-theme-secondary,
      var(--oscd-theme-secondary)
    );
  }

  section > div {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 8px 12px 16px;
    clear: right;
  }

  .highlighted {
    outline-style: dotted;
    outline-width: 2px;
  }

  :host(:focus-within) .highlighted {
    outline-style: solid;
  }

  .contrasted {
    background-color: var(
      --oscd-action-pane-theme-on-primary,
      var(--oscd-theme-on-primary)
    );
  }

  h1,
  h2,
  h3,
  h4 {
    color: var(
      --oscd-action-pane-theme-on-surface,
      var(--oscd-theme-on-surface)
    );
    font-family: var(--oscd-action-pane-theme-font, var(--oscd-theme-font));
    font-weight: 300;
    overflow: clip visible;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin: 0px;
    line-height: 52px;
    padding-left: 0.3em;
  }

  nav {
    float: right;
  }

  mwc-icon {
    vertical-align: middle;
    position: relative;
    top: -0.1em;
    --mdc-icon-size: 1em;
  }

  ::slotted([slot='icon']) {
    vertical-align: middle;
    position: relative;
    top: -0.1em;
    --mdc-icon-size: 1em;
  }
`;
