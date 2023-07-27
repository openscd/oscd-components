import { OscdTextfield } from '../components/oscd-textfield/src/oscd-textfield';

function defineCustomElement(
  name: string,
  element: CustomElementConstructor
): void {
  customElements.get(name) || customElements.define(name, element);
}

defineCustomElement('oscd-textfield', OscdTextfield);
