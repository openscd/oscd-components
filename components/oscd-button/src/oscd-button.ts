import { html, CSSResultGroup, TemplateResult, property } from 'lit-element';

import '@material/mwc-button';

import { OscdComponent } from '@openscd/core';

import styles from './oscd-button.styles.js';

/**
 * @tag oscd-button
 */
export class OscdButton extends OscdComponent {
  static styles: CSSResultGroup = styles;

  @property({
    type: Boolean,
  })
  raised: boolean = false;

  @property({
    type: String,
  })
  icon?: string;

  @property({
    type: String,
  })
  label: string = '';

  @property({
    type: Boolean,
  })
  disabled: boolean = false;

  render(): TemplateResult {
    return html`<mwc-button
      ?raised=${this.raised}
      .icon=${this.icon || ''}
      .label=${this.label}
      ?disabled=${this.disabled}
      ><slot></slot
    ></mwc-button>`;
  }
}
