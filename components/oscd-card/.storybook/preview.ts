import { OscdCard } from '../src/oscd-card';

const componentName = 'oscd-card';

function defineCustomElement(): void {
  customElements.get(componentName) ||
    customElements.define(componentName, OscdCard);
}

defineCustomElement();
