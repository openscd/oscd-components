import { __decorate } from "tslib";
import { html, property, query, state, } from 'lit-element';
import '@material/mwc-icon-button';
import '@material/mwc-list/mwc-list-item';
import '@material/mwc-menu';
import '@material/mwc-switch';
import '@material/mwc-textfield';
import { OscdComponent } from '@openscd/core';
import styles from './oscd-textfield.styles.js';
/**
 * @cssprop [--oscd-theme-textfield-error, --oscd-theme-error] Color when errored of the underline, the outline, the caret and the icons.
 * @cssprop [--oscd-theme-textfield-primary, --oscd-theme-primary] Color when active of the underline, ripple, the outline, and the caret.
 *
 * @tagname oscd-textfield
 */
export class OscdTextfield extends OscdComponent {
    static get scopedElements() {
        return {};
    }
    get multiplier() {
        var _a, _b;
        if (this.unit === '')
            return null;
        return ((_b = (_a = this.multipliers[this.multiplierIndex]) !== null && _a !== void 0 ? _a : this.multipliers[0]) !== null && _b !== void 0 ? _b : null);
    }
    set multiplier(value) {
        var _a;
        const index = this.multipliers.indexOf(value);
        if (index >= 0)
            this.multiplierIndex = index;
        this.suffix = ((_a = this.multiplier) !== null && _a !== void 0 ? _a : '') + this.unit;
    }
    /**
     * @internal
     */
    get null() {
        return this.nullable && this.isNull;
    }
    /**
     * @internal
     */
    set null(value) {
        if (!this.nullable || value === this.isNull)
            return;
        this.isNull = value;
        if (this.null) {
            this.disable();
        }
        else {
            this.enable();
        }
    }
    get maybeValue() {
        return this.null ? null : this.value;
    }
    set maybeValue(value) {
        if (value === null) {
            this.null = true;
            if (!this.rendered) {
                return;
            }
            this.value = '';
        }
        else {
            this.null = false;
            this.value = value;
        }
    }
    /**
     * The value of the Form Control
     */
    set value(value) {
        this._value = value;
        if (this.textfield) {
            this.textfield.value = value;
        }
    }
    get value() {
        return this.textfield ? this.textfield.value : this._value;
    }
    /**
     * @internal
     */
    selectMultiplier(se) {
        this.multiplier = this.multipliers[se.detail.index];
    }
    /**
     * @internal
     */
    enable() {
        if (this.nulled === null)
            return;
        this.value = this.nulled;
        this.nulled = null;
        this.helperPersistent = false;
        this.disabled = false;
    }
    /**
     * @internal
     */
    disable() {
        if (this.nulled !== null)
            return;
        this.nulled = this.value;
        this.value = this.defaultValue;
        this.helperPersistent = true;
        this.disabled = true;
    }
    /**
     * @internal
     */
    async firstUpdated(_changedProperties) {
        var _a;
        await super.firstUpdated(_changedProperties);
        await this.textfield.firstUpdated();
        if (this.multiplierMenu)
            this.multiplierMenu.anchor = (_a = this.multiplierButton) !== null && _a !== void 0 ? _a : null;
        // eslint-disable-next-line no-self-assign
        if (!this.maybeValue) {
            this.disable();
        }
    }
    checkValidity() {
        if (this.reservedValues &&
            this.reservedValues.some((array) => array === this.value)) {
            this.textfield.setCustomValidity('unique');
            return false;
        }
        // Reset to prevent super.checkValidity to always return false
        this.textfield.setCustomValidity('');
        return this.textfield.checkValidity();
    }
    /**
     * @hidden
     */
    constructor() {
        super();
        /**
         * OscdTextfield can be nullable. If true, use the [[maybeValue]]
         * @default false
         */
        this.nullable = false;
        this.multipliers = [null, ''];
        /**
         * @internal
         */
        this.multiplierIndex = 0;
        /**
         * Unit for OscdTextfield
         * @default ''
         */
        this.unit = '';
        /**
         * @internal
         */
        this.isNull = false;
        /**
         * The default `value` displayed if [[`maybeValue`]] is `null`.
         * @default ''
         */
        this.defaultValue = '';
        /**
         * Additional values that cause validation to fail.
         * @default []
         */
        this.reservedValues = [];
        /**
         * Suffix of OscdTextfield
         * @default ''
         */
        this.suffix = '';
        /**
         * OscdTextfield should be disabled
         * @default false
         */
        this.disabled = false;
        /**
         * OscdTextfield helper should be persistent
         * @default false
         */
        this.helperPersistent = false;
        /**
         * @internal
         */
        this._value = '';
        /**
         * Label for OscdTextfield
         * @default ''
         */
        this.label = '';
        /**
         * Required input
         * @default false
         */
        this.required = false;
        /**
         * Helper text below the OscdTextfield
         * @default ''
         */
        this.helper = '';
        /**
         * Validation message for OscdTextfield (empty string if no validation should be shown)
         * @default ''
         */
        this.validationMessage = '';
        /**
         * Pattern the OscdTextfield must obey
         * @default ''
         */
        this.pattern = '';
        /**
         * Min length of the OscdTextfield (-1 if unlimited)
         * @default -1
         */
        this.minLength = -1;
        /**
         * Max length of the OscdTextfield (-1 if unlimited)
         * @default -1
         */
        this.maxLength = -1;
        /**
         * Min number of the OscdTextfield (-1 if unlimited)
         * @default -1
         */
        this.min = -1;
        /**
         * Max number of the OscdTextfield (-1 if unlimited)
         * @default -1
         */
        this.max = -1;
        // FIXME: workaround to allow disable of the whole component - need basic refactor
        this.disabledSwitch = false;
        /**
         * @internal
         */
        this.nulled = null;
        this.rendered = false;
        this.disabledSwitch = this.hasAttribute('disabled');
    }
    renderUnitSelector() {
        var _a;
        if (this.multipliers.length && this.unit)
            return html `<div style="position:relative;">
        <mwc-icon-button
          style="margin:5px;"
          icon="more"
          ?disabled=${this.null || this.disabledSwitch}
          @click=${() => { var _a; return (_a = this.multiplierMenu) === null || _a === void 0 ? void 0 : _a.show(); }}
        ></mwc-icon-button>
        <mwc-menu
          @selected=${this.selectMultiplier}
          fixed
          .anchor=${(_a = this.multiplierButton) !== null && _a !== void 0 ? _a : null}
          >${this.renderMulplierList()}</mwc-menu
        >
      </div>`;
        else
            return html ``;
    }
    renderMulplierList() {
        return html `${this.multipliers.map((multiplier) => html `<mwc-list-item ?selected=${multiplier === this.multiplier}
          >${multiplier === null ? 'no Multiplier' : multiplier}</mwc-list-item
        >`)}`;
    }
    renderSwitch() {
        if (this.nullable) {
            return html `<mwc-switch
        ?selected=${!this.null}
        ?disabled=${this.disabledSwitch}
        @click=${() => {
                this.null = !this.nullSwitch.selected;
            }}
      ></mwc-switch>`;
        }
        return html ``;
    }
    /**
     * @internal
     */
    renderTextfield() {
        return html `<mwc-textfield
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
    ></mwc-textfield>`;
    }
    render() {
        this.rendered = true;
        return html `
      <div class="oscd-textfield__container">
        <div>${this.renderTextfield()}</div>
        ${this.renderUnitSelector()}
        <div class="oscd-textfield__switch">${this.renderSwitch()}</div>
      </div>
    `;
    }
}
OscdTextfield.styles = styles;
__decorate([
    property({
        type: Boolean,
    })
], OscdTextfield.prototype, "nullable", void 0);
__decorate([
    property({
        type: Array,
    })
], OscdTextfield.prototype, "multipliers", void 0);
__decorate([
    property({
        type: String,
    })
], OscdTextfield.prototype, "multiplier", null);
__decorate([
    property({
        type: String,
    })
], OscdTextfield.prototype, "unit", void 0);
__decorate([
    state()
], OscdTextfield.prototype, "null", null);
__decorate([
    property({ type: String })
], OscdTextfield.prototype, "maybeValue", null);
__decorate([
    property({ type: String })
], OscdTextfield.prototype, "defaultValue", void 0);
__decorate([
    property({ type: Array })
], OscdTextfield.prototype, "reservedValues", void 0);
__decorate([
    property({
        type: String,
    })
], OscdTextfield.prototype, "suffix", void 0);
__decorate([
    property({
        type: Boolean,
    })
], OscdTextfield.prototype, "disabled", void 0);
__decorate([
    property({
        type: Boolean,
    })
], OscdTextfield.prototype, "helperPersistent", void 0);
__decorate([
    property({
        type: String,
    })
], OscdTextfield.prototype, "value", null);
__decorate([
    property({
        type: String,
    })
], OscdTextfield.prototype, "label", void 0);
__decorate([
    property({
        type: Boolean,
    })
], OscdTextfield.prototype, "required", void 0);
__decorate([
    property({
        type: String,
    })
], OscdTextfield.prototype, "helper", void 0);
__decorate([
    property({
        type: String,
    })
], OscdTextfield.prototype, "validationMessage", void 0);
__decorate([
    property({
        type: String,
    })
], OscdTextfield.prototype, "pattern", void 0);
__decorate([
    property({
        type: Number,
    })
], OscdTextfield.prototype, "minLength", void 0);
__decorate([
    property({
        type: Number,
    })
], OscdTextfield.prototype, "maxLength", void 0);
__decorate([
    property({
        type: Number,
    })
], OscdTextfield.prototype, "min", void 0);
__decorate([
    property({
        type: Number,
    })
], OscdTextfield.prototype, "max", void 0);
__decorate([
    query('mwc-switch')
], OscdTextfield.prototype, "nullSwitch", void 0);
__decorate([
    query('mwc-menu')
], OscdTextfield.prototype, "multiplierMenu", void 0);
__decorate([
    query('mwc-icon-button')
], OscdTextfield.prototype, "multiplierButton", void 0);
__decorate([
    query('mwc-textfield')
], OscdTextfield.prototype, "textfield", void 0);
//# sourceMappingURL=oscd-textfield.js.map