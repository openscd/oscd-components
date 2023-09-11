import { OscdTextfield } from '../src';

const componentName = 'oscd-textfield';

function defineCustomElement(): void {
  customElements.get(componentName) ||
    customElements.define(componentName, OscdTextfield);
}

defineCustomElement();
