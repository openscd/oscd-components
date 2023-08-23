import { TemplateResult, html, property, state, query } from 'lit-element';

import { OscdComponent } from '@openscd/core';

import '@openscd/oscd-switch';
import type { OscdSwitch, OscdSwitchChangeEvent } from '@openscd/oscd-switch';

export abstract class OscdFormComponent extends OscdComponent {
  /**
   * Form Control can be nullable. If true, use the [[maybeValue]]
   * @default false
   */
  @property({
    type: Boolean,
  })
  nullable = false;

  /**
   * @internal
   */
  protected isNull = false;

  protected abstract get null(): boolean;
  protected abstract set null(value: boolean);

  protected _disabledSwitch: boolean = false;

  /**
   * @internal
   */
  @query('oscd-switch')
  protected nullSwitch?: OscdSwitch;

  /**
   * @internal
   */
  protected renderSwitch(): TemplateResult {
    if (this.nullable) {
      return html`<oscd-switch
        ?selected=${!this.null}
        ?disabled=${this._disabledSwitch}
        @change=${(evt: OscdSwitchChangeEvent) => {
          this.null = !evt.detail.selected;
        }}
      ></oscd-switch>`;
    }
    return html``;
  }
}
