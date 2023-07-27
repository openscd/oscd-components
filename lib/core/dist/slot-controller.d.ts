import { ReactiveController, ReactiveControllerHost } from 'lit';
export declare class SlotController implements ReactiveController {
    host: ReactiveControllerHost & Element;
    slotNames: string[];
    constructor(host: ReactiveControllerHost & Element, ...slotNames: string[]);
    private hasDefaultSlot;
    private hasNamedSlot;
    test(slotName: string): boolean;
    hostConnected(): void;
    hostDisconnected(): void;
    private handleSlotChange;
}
