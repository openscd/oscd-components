import {
  html,
  CSSResultGroup,
  TemplateResult,
  property,
  query,
  state,
} from 'lit-element';

import { classMap } from 'lit/directives/class-map.js';

import '@material/mwc-formfield';
import '@openscd/oscd-switch';
import '@material/mwc-checkbox';

import type { Checkbox } from '@material/mwc-checkbox';

import { OscdFormComponent } from '@openscd/form';

import styles from './oscd-checkbox.styles.js';

/**
 * @cssprop [--oscd-theme-checkbox-ink] - Ink color for the checkbox
 * @cssprop [--oscd-theme-checkbox-unchecked] - Unchecked color for the checkbox
 * @cssprop [--oscd-theme-checkbox-disabled] - Disabled color for the checkbox
 * @cssprop [--oscd-theme-checkbox-secondary=--oscd-theme-secondary] - Checkobx color
 * @cssprop [--oscd-theme-checkbox-ons-surface=--oscd-theme-on-surface] - On Surface color
 *
 * @example <oscd-checkbox></oscd-checkbox>
 * @tagname oscd-checkbox
 */
export class OscdCheckbox extends OscdFormComponent {
  static styles: CSSResultGroup = styles;

  /**
   * @internal
   */
  static get scopedElements() {
    return {};
  }

  /** Text label rendered after the checkbox. */
  @property({ type: String })
  label = '';

  /** Parenthetical information rendered after the label: `label (helper)` */
  @property({ type: String })
  helper = '';

  /** Whether [[`maybeValue`]] may be `null` */
  @property({ type: Boolean })
  nullable = false;

  /** The default `checked` state while [[`maybeValue`]] is `null`. */
  @property({ type: Boolean })
  defaultChecked = false;

  /** Is `"true"` when checked, `"false"` un-checked, `null` if [[`nullable`]]. */
  @property({ type: String })
  get maybeValue(): string | null {
    const res: string = this.checked ? 'true' : 'false';

    return this.null ? null : res;
  }

  set maybeValue(check: string | null) {
    if (check === null) this.null = true;
    else {
      this.null = false;
      this.checked = check === 'true';
    }
  }

  /** Disables component including null switch */
  @property({ type: Boolean, reflect: true })
  get disabled(): boolean {
    return this._disabled;
  }

  set disabled(value: boolean) {
    this._disabled = value;
    this._disabledSwitch = value;
  }

  /**
   * @internal
   */
  private _disabled: boolean = false;

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
  @state()
  private deactivateCheckbox = false;

  /**
   * @internal
   */
  protected set null(value: boolean) {
    if (!this.nullable || value === this.isNull) return;
    this.isNull = value;
    if (this.null) {
      this.disable();
    } else {
      this.enable();
    }
  }

  /**
   * @internal
   */
  private initChecked = false;

  get checked(): boolean {
    return this.checkbox?.checked ?? this.initChecked;
  }

  @property({
    type: Boolean,
  })
  set checked(value: boolean) {
    if (this.checkbox) this.checkbox.checked = value;
    else this.initChecked = value;
  }

  /**
   * @internal
   */
  @state()
  get formfieldLabel(): string {
    return this.helper ? `${this.label} (${this.helper})` : this.label;
  }

  /**
   * @internal
   */
  @query('mwc-checkbox')
  protected checkbox?: Checkbox;

  /**
   * @internal
   */
  private nulled: boolean | null = null;

  /**
   * @internal
   */
  private enable(): void {
    if (this.nulled === null) return;
    this.checked = this.nulled;
    this.nulled = null;
    this.deactivateCheckbox = false;
  }

  /**
   * @internal
   */
  private disable(): void {
    if (this.nulled !== null) return;
    this.nulled = this.checked;
    this.checked = this.defaultChecked;
    this.deactivateCheckbox = true;
  }

  /**
   * @internal
   */
  async firstUpdated(
    _changedProperties: Map<string | number | symbol, unknown>
  ): Promise<void> {
    await super.firstUpdated(_changedProperties);
    this.checkbox?.requestUpdate();
    await this.checkbox?.updateComplete;
    this._disabledSwitch = this.hasAttribute('disabled') || this.disabled;
  }

  /**
   * @internal
   */
  render(): TemplateResult {
    return html`
      <div class="container">
        <div>
          <mwc-formfield
            label="${this.formfieldLabel}"
            class="${classMap({
              disabled: this.disabled || this.deactivateCheckbox,
            })}"
            ><mwc-checkbox
              ?checked=${this.initChecked}
              ?disabled=${this.disabled || this.deactivateCheckbox}
            ></mwc-checkbox
          ></mwc-formfield>
        </div>
        <div class="container container--switch">${this.renderSwitch()}</div>
      </div>
    `;
  }
}
