import { LitElement } from 'lit-element';

import { ScopedElementsMixin } from '@open-wc/scoped-elements';
import { SlotController } from './slot-controller';

export abstract class OscdComponent extends ScopedElementsMixin(LitElement) {
  protected slotController: SlotController = new SlotController(
    this,
    ...this.slotNames
  );

  get slotNames(): string[] {
    return [];
  }
}
