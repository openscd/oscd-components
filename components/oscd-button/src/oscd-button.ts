import { html, CSSResultGroup, TemplateResult, property } from 'lit-element';

import { OscdComponent } from '@openscd/core';

import styles from './oscd-button.styles.js';

import '@material/mwc-button';

/**
 * @prop {string} label - Text for the Button
 * @prop {boolean} raised - Whether the Button is raised or not
 * @prop {boolean} disabled - Whether the Button is disabled or not
 * @prop {string} icon - The icon for the Button
 * @prop {boolean} outlined - Whether the Button is outlined or not
 *
 * @example <oscd-button></oscd-button>
 * @tagname oscd-button
 */
export class OscdButton extends OscdComponent {
  static styles: CSSResultGroup = styles;

  /**
   * @internal
   */
  static get scopedElements() {
    return {};
  }

  @property({
    type: Boolean,
  })
  disabled?: boolean = false;

  @property({
    type: String,
  })
  label: string = '';

  @property({
    type: String,
  })
  icon?: string;

  @property({
    type: Boolean,
  })
  raised?: boolean = false;

  @property({
    type: Boolean,
  })
  outlined?: boolean = false;

  render(): TemplateResult {
    return html`<mwc-button
      ?disabled=${this.disabled}
      .label=${this.label}
      .icon=${this.icon || ''}
      ?raised=${this.raised}
      ?outlined=${this.outlined}
    >
    </mwc-button>`;
  }
}
