import {
  html,
  CSSResultGroup,
  TemplateResult,
  property,
  query,
} from 'lit-element';

import '@material/mwc-switch';
import type { Switch } from '@material/mwc-switch';

import { OscdComponent } from '@openscd/core';

import styles from './oscd-switch.styles.js';

export interface OscdSwitchChangeEvent extends CustomEvent {
  detail: {
    selected: boolean;
  };
}

const newOscdSwitchChangeEvent = (selected: boolean): OscdSwitchChangeEvent => {
  return new CustomEvent('change', {
    detail: { selected: selected },
    bubbles: true,
    composed: true,
  });
};

/**
 *
 * @prop {boolean} selected - Selected state of the Switch
 * @prop {boolean} disabled - Disabled state of the Switch
 *
 * @prop {string} value - Value of the Switch
 * @prop {string} name - Name of the Switch
 *
 * @fires change {OscdSwitchChangeEvent} Fired whenever `selected` changes due to user
 * interaction (bubbles and composed).
 *
 * @example <oscd-switch></oscd-switch>
 * @tagname oscd-switch
 */
export class OscdSwitch extends OscdComponent {
  static styles: CSSResultGroup = styles;

  @property({
    type: Boolean,
  })
  selected?: boolean = false;

  @property({
    type: Boolean,
  })
  disabled?: boolean = false;

  @property({
    type: String,
  })
  value: string = 'on';

  @property({
    type: String,
  })
  name: string = '';

  /**
   * @internal
   */
  @query('mwc-switch')
  switch!: Switch;

  /**
   * @internal
   */
  static get scopedElements() {
    return {};
  }

  render(): TemplateResult {
    return html`<mwc-switch
      ?selected=${this.selected}
      ?disabled=${this.disabled}
      .value=${this.value}
      .name=${this.name}
      @click=${this.onClick}
    ></mwc-switch>`;
  }

  onClick() {
    if (this.disabled) {
      return;
    }

    this.dispatchEvent(newOscdSwitchChangeEvent(this.switch.selected));
  }
}
