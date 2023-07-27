import { LitElement } from 'lit-element';
import { SlotController } from './slot-controller';
declare const OscdComponent_base: typeof LitElement & import("@open-wc/dedupe-mixin").Constructor<import("@open-wc/scoped-elements/types/src/types").ScopedElementsHost>;
export declare abstract class OscdComponent extends OscdComponent_base {
    protected slotController: SlotController;
    get slotNames(): string[];
}
export {};
