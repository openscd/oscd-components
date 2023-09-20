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

import type { Select } from '@material/mwc-select';

import { redispatchEvent } from '@openscd/core';
import { OscdFormComponent } from '@openscd/form';

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
export class OscdSelect extends OscdFormComponent {
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
  @state()
  protected get null(): boolean {
    return this.nullable && this.isNull;
  }

  /**
   * @internal
   */
  protected set null(value: boolean) {
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
    return this.select && this.select.value ? this.select.value : this._value;
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

  /** Disables component including null switch */
  @property({ type: Boolean })
  get disabled(): boolean {
    return this._disabled;
  }

  set disabled(value: boolean) {
    this._disabled = value;
    this._disabledSwitch = this._disabled;
  }

  /**
   * @internal
   */
  private _disabled: boolean = false;

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
  @state()
  private deactivateSelect: boolean = false;

  /**
   * @internal
   */
  private enable(): void {
    if (this.nulled === null) return;
    this.value = this.nulled;
    this.nulled = null;
    this.deactivateSelect = false;
  }

  /**
   * @internal
   */
  private disable(): void {
    if (this.nulled !== null) return;
    this.nulled = this.value;
    this.value = this.defaultValue;
    this.deactivateSelect = true;
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
    this._disabledSwitch = this.hasAttribute('disabled') || this.disabled;
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

  private renderSelect(): TemplateResult {
    return html`<mwc-select
      value=${this.value}
      ?nullable=${this.nullable}
      ?disabled=${this.disabled || this.deactivateSelect}
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
      <div class="container">
        <div>${this.renderSelect()}</div>
        <div class="container container--switch">${this.renderSwitch()}</div>
      </div>
    `;
  }
}
