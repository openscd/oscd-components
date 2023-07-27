import { LitElement } from 'lit-element';
import { ScopedElementsMixin } from '@open-wc/scoped-elements';
import { SlotController } from './slot-controller';
export class OscdComponent extends ScopedElementsMixin(LitElement) {
    constructor() {
        super(...arguments);
        this.slotController = new SlotController(this, ...this.slotNames);
    }
    get slotNames() {
        return [];
    }
}
//# sourceMappingURL=oscd-component.js.map