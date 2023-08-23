import {
  html,
  state,
  property,
  query,
  CSSResultGroup,
  TemplateResult,
} from 'lit-element';

import '@openscd/oscd-switch';
import '@material/mwc-select';

import { OscdSwitch, OscdSwitchChangeEvent } from '@openscd/oscd-switch';
import { Select } from '@material/mwc-select';

import { OscdComponent, redispatchEvent } from '@openscd/core';

import styles from './oscd-select.styles.js';

/**
 *
 * @prop {boolean} nullable - Whether [[`maybeValue]] may be `null`.
 * @prop {string} value - The value of the Form Control
 * @prop {string} maybeValue - Replacement for `value`, can only be `null` if [[`nullable`]].
 * @prop {string} defaultValue - The default `value` displayed if [[`maybeValue`]] is `null`.
 * @prop {string} label - The label for the Form Control.
 * @prop {boolean} required - Whether the Form Control is required or not.
 * @prop {string} helper - The Helper text for the Form Control.
 * @prop {string} validationMessage - The Validation Message for the Form Control.
 * @prop {boolean} disabled - Whether the Form Control is disabled or not.
 *
 * @example <oscd-select></oscd-select>
 * @tagname oscd-select
 */
export class OscdSelect extends OscdComponent {
  static styles: CSSResultGroup = styles;

  /**
   * @internal
   */
  static get scopedElements() {
    return {};
  }

  /** Whether [[`maybeValue`]] may be `null` */
  @property({ type: Boolean })
  nullable = false;

  /**
   * @internal
   */
  private isNull = false;

  /**
   * @internal
   */
  @state()
  private get null(): boolean {
    return this.nullable && this.isNull;
  }

  /**
   * @internal
   */
  private set null(value: boolean) {
    if (!this.nullable || value === this.isNull) return;
    this.isNull = value;
    if (this.null) this.disable();
    else this.enable();
  }

  /** Replacement for `value`, can only be `null` if [[`nullable`]]. */
  @property({ type: String })
  get maybeValue(): string | null {
    return this.null ? null : this.value;
  }

  set maybeValue(value: string | null) {
    if (value === null) {
      this.null = true;
      if (!this.rendered) return;
      this.value = '';
    } else {
      this.null = false;
      this.value = value;
    }
  }

  /** The default `value` displayed if [[`maybeValue`]] is `null`. */
  @property({ type: String })
  defaultValue = '';

  /**
   * @prop {String} value - The value of the Form Control
   */
  @property({
    type: String,
  })
  set value(value: string) {
    this._value = value;

    if (this.select) {
      this.select.value = value;
    }
  }

  get value(): string {
    return this.select ? this.select.value : this._value;
  }

  /**
   * @internal
   */
  private _value = '';

  @property({
    type: String,
  })
  label = '';

  @property({
    type: Boolean,
  })
  required = false;

  @property({
    type: String,
  })
  helper = '';

  @property({
    type: String,
  })
  validationMessage = '';

  @property({
    type: Boolean,
  })
  disabled = false;

  // FIXME: workaround to allow disable of the whole component - need basic refactor
  /**
   * @internal
   */
  private disabledSwitch = false;

  /**
   * @internal
   */
  @query('oscd-switch')
  protected nullSwitch?: OscdSwitch;

  /**
   * @internal
   */
  @query('mwc-select')
  protected select!: Select;

  /**
   * @internal
   */
  private nulled: string | null = null;

  /**
   * @internal
   */
  private rendered = false;

  /**
   * @internal
   */
  private enable(): void {
    if (this.nulled === null) return;
    this.value = this.nulled;
    this.nulled = null;
    this.disabled = false;
  }

  /**
   * @internal
   */
  private disable(): void {
    if (this.nulled !== null) return;
    this.nulled = this.value;
    this.value = this.defaultValue;
    this.disabled = true;
  }

  /**
   * @internal
   */
  async firstUpdated(
    _changedProperties: Map<string | number | symbol, unknown>
  ): Promise<void> {
    await super.firstUpdated(_changedProperties);
    this.select.requestUpdate;
    await this.select.updateComplete;
    this.disabledSwitch = this.hasAttribute('disabled');
  }

  checkValidity(): boolean {
    if (this.nullable && !this.nullSwitch?.selected) return true;
    return this.select.checkValidity();
  }

  constructor() {
    super();
    this.addEventListener('selected', (event) => {
      redispatchEvent(this, event);
    });
  }

  /**
   * @internal
   */
  protected renderSwitch(): TemplateResult {
    if (this.nullable) {
      return html`<oscd-switch
        style="margin-left: 12px;"
        ?selected=${!this.null}
        ?disabled=${this.disabledSwitch}
        @change=${(evt: OscdSwitchChangeEvent) => {
          this.null = !evt.detail.selected;
        }}
      ></oscd-switch>`;
    }
    return html``;
  }

  private renderSelect(): TemplateResult {
    return html`<mwc-select
      value=${this.value}
      ?nullable=${this.nullable}
      ?disabled=${this.disabled}
      ?required=${this.required}
      .label=${this.label}
      .helper=${this.helper}
      .validationMessage=${this.validationMessage}
      ><slot></slot
    ></mwc-select>`;
  }

  render(): TemplateResult {
    this.rendered = true;
    return html`
      <div style="display: flex; flex-direction: row;">
        <div style="flex: auto;">${this.renderSelect()}</div>
        <div style="display: flex; align-items: center; height: 56px;">
          ${this.renderSwitch()}
        </div>
      </div>
    `;
  }
}
