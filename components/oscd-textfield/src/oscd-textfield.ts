import {
  html,
  property,
  query,
  state,
  CSSResultGroup,
  TemplateResult,
} from 'lit-element';

import '@material/mwc-icon-button';
import '@material/mwc-list/mwc-list-item';
import '@material/mwc-menu';
import '@material/mwc-textfield';

import '@openscd/oscd-switch';

import { IconButton } from '@material/mwc-icon-button';

import { Menu } from '@material/mwc-menu';
import { SingleSelectedEvent } from '@material/mwc-list/mwc-list-foundation';

import type { OscdSwitch } from '@openscd/oscd-switch';
import type { OscdSwitchChangeEvent } from '@openscd/oscd-switch/oscd-switch.js';

import { TextField } from '@material/mwc-textfield';

import { OscdComponent } from '@openscd/core';

import styles from './oscd-textfield.styles.js';

/**
 * @cssprop [--oscd-theme-textfield-error=--oscd-theme-error] Color when errored of the underline, the outline, the caret and the icons.
 * @cssprop [--oscd-theme-textfield-primary=--oscd-theme-primary] Color when active of the underline, ripple, the outline, and the caret.
 * @cssprop [--oscd-theme-textfield-primary-surface=--oscd-theme-primary-surface] Color of the Switch track
 * @cssprop [--oscd-theme-textfield-primary-surface-active=--oscd-theme-primary-surface-active] Color of the Switch Hover state
 * @cssprop [--oscd-theme-textfield-primary-active=--oscd-theme-primary-active] Color of the Switch Hover state
 * @cssprop [--oscd-theme-textfield-fill] Color of the textfield Fill
 * @cssprop [--oscd-theme-textfield-ink] Color of the textfield Text
 * @cssprop [--oscd-theme-textfield-line] Color of the textfield Line
 *
 * @prop {boolean} required - Textfield is required
 * @prop {boolean} nullable - Textfield is nullable
 * @prop {array} multipliers - Multipliers
 * @prop {string} multiplier - Multiplier
 * @prop {string} unit - Unit
 * @prop {string} maybeValue - Maybevalue
 * @prop {string} defaultValue - Default Value
 * @prop {array} reservedValues - Reserved Values
 * @prop {string} suffix - Suffix
 * @prop {boolean} disabled - Textfield is disabled
 * @prop {boolean} helperPersistent - Helper message is persistent
 * @prop {string} value - Textfield Value
 * @prop {string} label - Textfield Label
 * @prop {string} helper - Helper Text
 * @prop {string} validationMessage - Validation Message
 * @prop {string} pattern - Textfield Pattern
 * @prop {number} minLength - Minimum length of Textfield value
 * @prop {number} maxLength - Maximum length of Textfield value
 * @prop {number} min - Minimum of Textfield value
 * @prop {number} max - Maximum of Textfield value
 *
 * @example <oscd-textfield value="John Doe" label="Name"></oscd-textfield>
 * @tagname oscd-textfield
 */
export class OscdTextfield extends OscdComponent {
  static styles: CSSResultGroup = styles;

  /**
   * @internal
   */
  static get scopedElements() {
    return {};
  }

  /**
   * OscdTextfield can be nullable. If true, use the [[maybeValue]]
   * @default false
   */
  @property({
    type: Boolean,
  })
  nullable = false;

  @property({
    type: Array,
  })
  multipliers = [null, ''];

  /**
   * @internal
   */
  private multiplierIndex = 0;

  @property({
    type: String,
  })
  get multiplier(): string | null {
    if (this.unit === '') return null;
    return (
      this.multipliers[this.multiplierIndex] ?? this.multipliers[0] ?? null
    );
  }

  set multiplier(value: string | null) {
    const index = this.multipliers.indexOf(value);
    if (index >= 0) this.multiplierIndex = index;
    this.suffix = (this.multiplier ?? '') + this.unit;
  }

  /**
   * Unit for OscdTextfield
   * @default ''
   */
  @property({
    type: String,
  })
  unit = '';

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
    if (this.null) {
      this.disable();
    } else {
      this.enable();
    }
  }

  @property({ type: String })
  get maybeValue(): string | null {
    return this.null ? null : this.value;
  }

  set maybeValue(value: string | null) {
    if (value === null) {
      this.null = true;
      if (!this.rendered) {
        return;
      }
      this.value = '';
    } else {
      this.null = false;
      this.value = value;
    }
  }

  /**
   * The default `value` displayed if [[`maybeValue`]] is `null`.
   * @default ''
   */
  @property({ type: String })
  defaultValue = '';

  /**
   * Additional values that cause validation to fail.
   * @default []
   */
  @property({ type: Array })
  reservedValues: string[] = [];

  /**
   * Suffix of OscdTextfield
   * @default ''
   */
  @property({
    type: String,
  })
  suffix = '';

  /**
   * OscdTextfield should be disabled
   * @default false
   */
  @property({
    type: Boolean,
  })
  disabled = false;

  /**
   * OscdTextfield helper should be persistent
   * @default false
   */
  @property({
    type: Boolean,
  })
  helperPersistent = false;

  /**
   * The value of the Form Control
   */
  @property({
    type: String,
  })
  set value(value: string) {
    this._value = value;

    if (this.textfield) {
      this.textfield.value = value;
    }
  }

  get value(): string {
    return this.textfield ? this.textfield.value : this._value;
  }

  /**
   * @internal
   */
  private _value = '';

  /**
   * Label for OscdTextfield
   * @default ''
   */
  @property({
    type: String,
  })
  label = '';

  /**
   * @attribute {boolean} required - Textfield is required
   * Required input
   * @default false
   */
  @property({
    type: Boolean,
  })
  required = false;

  /**
   * Helper text below the OscdTextfield
   * @default ''
   */
  @property({
    type: String,
  })
  helper = '';

  /**
   * Validation message for OscdTextfield (empty string if no validation should be shown)
   * @default ''
   */
  @property({
    type: String,
  })
  validationMessage = '';

  /**
   * Pattern the OscdTextfield must obey
   * @default ''
   */
  @property({
    type: String,
  })
  pattern = '';

  /**
   * Min length of the OscdTextfield (-1 if unlimited)
   * @default -1
   */
  @property({
    type: Number,
  })
  minLength = -1;

  /**
   * Max length of the OscdTextfield (-1 if unlimited)
   * @default -1
   */
  @property({
    type: Number,
  })
  maxLength = -1;

  /**
   * Min number of the OscdTextfield (-1 if unlimited)
   * @default -1
   */
  @property({
    type: Number,
  })
  min = -1;

  /**
   * Max number of the OscdTextfield (-1 if unlimited)
   * @default -1
   */
  @property({
    type: Number,
  })
  max = -1;

  /**
   * @internal
   */
  private _disabledSwitch: boolean = false;

  /**
   * @internal
   */
  @query('oscd-switch')
  protected nullSwitch?: OscdSwitch;

  /**
   * @internal
   */
  @query('mwc-menu')
  protected multiplierMenu?: Menu;

  /**
   * @internal
   */
  @query('mwc-icon-button')
  protected multiplierButton?: IconButton;

  /**
   * @internal
   */
  @query('mwc-textfield')
  protected textfield!: TextField;

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
  private selectMultiplier(se: SingleSelectedEvent): void {
    this.multiplier = this.multipliers[se.detail.index];
  }

  /**
   * @internal
   */
  private enable(): void {
    if (this.nulled === null) return;
    this.value = this.nulled;
    this.nulled = null;
    this.helperPersistent = false;
    this.disabled = false;
  }

  /**
   * @internal
   */
  private disable(): void {
    if (this.nulled !== null) return;
    this.nulled = this.value;
    this.value = this.defaultValue;

    this.helperPersistent = true;
    this.disabled = true;
  }

  /**
   * @internal
   */
  async firstUpdated(
    _changedProperties: Map<string | number | symbol, unknown>
  ): Promise<void> {
    await super.firstUpdated(_changedProperties);
    await this.textfield.firstUpdated();
    if (this.multiplierMenu)
      this.multiplierMenu.anchor = this.multiplierButton ?? null;

    // eslint-disable-next-line no-self-assign
    if (!this.maybeValue) {
      this.disable();
    }
    this._disabledSwitch = this.hasAttribute('disabled');
  }

  checkValidity(): boolean {
    if (
      this.reservedValues &&
      this.reservedValues.some((array) => array === this.value)
    ) {
      this.textfield.setCustomValidity('unique');
      return false;
    }
    // Reset to prevent super.checkValidity to always return false
    this.textfield.setCustomValidity('');
    return this.textfield.checkValidity();
  }

  /**
   * @internal
   */
  constructor() {
    super();
  }

  /**
   * @internal
   */
  protected renderUnitSelector(): TemplateResult {
    if (this.multipliers.length && this.unit)
      return html`<div style="position:relative;">
        <mwc-icon-button
          style="margin:5px;"
          icon="more"
          ?disabled=${this.null || this._disabledSwitch}
          @click=${() => this.multiplierMenu?.show()}
        ></mwc-icon-button>
        <mwc-menu
          @selected=${this.selectMultiplier}
          fixed
          .anchor=${this.multiplierButton ?? null}
          >${this.renderMulplierList()}</mwc-menu
        >
      </div>`;
    else return html``;
  }

  /**
   * @internal
   */
  protected renderMulplierList(): TemplateResult {
    return html`${this.multipliers.map(
      (multiplier) =>
        html`<mwc-list-item ?selected=${multiplier === this.multiplier}
          >${multiplier === null ? 'no Multiplier' : multiplier}</mwc-list-item
        >`
    )}`;
  }

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

  /**
   * @internal
   */
  private renderTextfield(): TemplateResult {
    return html`<mwc-textfield
      value=${this.value}
      ?disabled=${this.disabled}
      ?helperPersistent=${this.helperPersistent}
      ?required=${this.required}
      .suffix=${this.suffix}
      .label=${this.label}
      .pattern=${this.pattern}
      .minLength=${this.minLength}
      .maxLength=${this.maxLength}
      .min=${this.min}
      .max=${this.max}
      .validationMessage=${this.validationMessage}
      .helper=${this.helper}
    ></mwc-textfield>`;
  }

  render(): TemplateResult {
    this.rendered = true;
    return html`
      <div class="oscd-textfield__container">
        <div>${this.renderTextfield()}</div>
        ${this.renderUnitSelector()}
        <div class="oscd-textfield__switch">${this.renderSwitch()}</div>
      </div>
    `;
  }
}
