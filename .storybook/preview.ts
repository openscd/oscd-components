import { VtCheckbox } from '@volturi/vt-checkbox';

function defineCustomElement(
  name: string,
  element: CustomElementConstructor
): void {
  customElements.get(name) || customElements.define(name, element);
}

defineCustomElement('vt-checkbox', VtCheckbox);
