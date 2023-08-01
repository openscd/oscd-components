import { CSSResultGroup, TemplateResult } from 'lit-element';
import '@material/mwc-icon-button';
import '@material/mwc-list/mwc-list-item';
import '@material/mwc-menu';
import '@material/mwc-switch';
import '@material/mwc-textfield';
import { IconButton } from '@material/mwc-icon-button';
import { Menu } from '@material/mwc-menu';
import { Switch } from '@material/mwc-switch';
import { TextField } from '@material/mwc-textfield';
import { OscdComponent } from '@openscd/core';
/**
 * @cssprop [--oscd-theme-textfield-error, --oscd-theme-error] Color when errored of the underline, the outline, the caret and the icons.
 * @cssprop [--oscd-theme-textfield-primary, --oscd-theme-primary] Color when active of the underline, ripple, the outline, and the caret.
 *
 * @tagname oscd-textfield
 */
export declare class OscdTextfield extends OscdComponent {
    static styles: CSSResultGroup;
    static get scopedElements(): {};
    /**
     * OscdTextfield can be nullable. If true, use the [[maybeValue]]
     * @default false
     */
    nullable: boolean;
    multipliers: (string | null)[];
    /**
     * @internal
     */
    private multiplierIndex;
    get multiplier(): string | null;
    set multiplier(value: string | null);
    /**
     * Unit for OscdTextfield
     * @default ''
     */
    unit: string;
    /**
     * @internal
     */
    private isNull;
    /**
     * @internal
     */
    private get null();
    /**
     * @internal
     */
    private set null(value);
    get maybeValue(): string | null;
    set maybeValue(value: string | null);
    /**
     * The default `value` displayed if [[`maybeValue`]] is `null`.
     * @default ''
     */
    defaultValue: string;
    /**
     * Additional values that cause validation to fail.
     * @default []
     */
    reservedValues: string[];
    /**
     * Suffix of OscdTextfield
     * @default ''
     */
    suffix: string;
    /**
     * OscdTextfield should be disabled
     * @default false
     */
    disabled: boolean;
    /**
     * OscdTextfield helper should be persistent
     * @default false
     */
    helperPersistent: boolean;
    /**
     * The value of the Form Control
     */
    set value(value: string);
    get value(): string;
    /**
     * @internal
     */
    private _value;
    /**
     * Label for OscdTextfield
     * @default ''
     */
    label: string;
    /**
     * Required input
     * @default false
     */
    required: boolean;
    /**
     * Helper text below the OscdTextfield
     * @default ''
     */
    helper: string;
    /**
     * Validation message for OscdTextfield (empty string if no validation should be shown)
     * @default ''
     */
    validationMessage: string;
    /**
     * Pattern the OscdTextfield must obey
     * @default ''
     */
    pattern: string;
    /**
     * Min length of the OscdTextfield (-1 if unlimited)
     * @default -1
     */
    minLength: number;
    /**
     * Max length of the OscdTextfield (-1 if unlimited)
     * @default -1
     */
    maxLength: number;
    /**
     * Min number of the OscdTextfield (-1 if unlimited)
     * @default -1
     */
    min: number;
    /**
     * Max number of the OscdTextfield (-1 if unlimited)
     * @default -1
     */
    max: number;
    private disabledSwitch;
    protected nullSwitch?: Switch;
    protected multiplierMenu?: Menu;
    protected multiplierButton?: IconButton;
    protected textfield: TextField;
    /**
     * @internal
     */
    private nulled;
    private rendered;
    /**
     * @internal
     */
    private selectMultiplier;
    /**
     * @internal
     */
    private enable;
    /**
     * @internal
     */
    private disable;
    /**
     * @internal
     */
    firstUpdated(_changedProperties: Map<string | number | symbol, unknown>): Promise<void>;
    checkValidity(): boolean;
    /**
     * @hidden
     */
    constructor();
    renderUnitSelector(): TemplateResult;
    renderMulplierList(): TemplateResult;
    renderSwitch(): TemplateResult;
    /**
     * @internal
     */
    private renderTextfield;
    render(): TemplateResult;
}
