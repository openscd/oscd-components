import {
  html,
  CSSResultGroup,
  TemplateResult,
  property,
  query,
} from 'lit-element';

import { OscdComponent, redispatchEvent } from '@openscd/core';

import '@material/mwc-dialog';

import styles from './oscd-dialog.styles.js';

/**
 *
 * @prop {boolean} open - Determines if the Dialog is open or not
 * @example <oscd-dialog></oscd-dialog>
 * @tagname oscd-dialog
 */
export class OscdDialog extends OscdComponent {
  static styles: CSSResultGroup = styles;

  /**
   * @internal
   */
  static get scopedElements() {
    return {};
  }

  @property({
    type: Boolean,
    reflect: true,
  })
  open = false;

  show(): void {
    this.open = true;
  }

  hide(): void {
    this.open = false;
  }

  onClosed(evt: Event): void {
    this.hide();
    console.log('evt: ', evt);
    redispatchEvent(this, evt);
  }

  render(): TemplateResult {
    return html`<mwc-dialog ?open=${this.open} @closed=${this.onClosed}
      ><slot></slot
      ><span slot="primaryAction"><slot name="primaryAction"></slot></span
      ><span slot="secondaryAction"><slot name="secondaryAction"></slot></span
    ></mwc-dialog>`;
  }
}
