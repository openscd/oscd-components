import { html, CSSResultGroup, TemplateResult } from 'lit-element';

import { OscdComponent } from '@openscd/core';

import styles from './oscd-select.styles.js';

/**
 * @tag oscd-select
 */
export class OscdSelect extends OscdComponent {
  static styles: CSSResultGroup = styles;

  render(): TemplateResult {
    return html`<span>oscd-select works!</span>`;
  }
}
