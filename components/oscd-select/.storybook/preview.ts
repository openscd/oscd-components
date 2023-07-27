import { OscdSelect } from '../src/oscd-select';

const componentName = 'oscd-select';

function defineCustomElement(): void {
  customElements.get(componentName) ||
    customElements.define(componentName, OscdSelect);
}

defineCustomElement();
