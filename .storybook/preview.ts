import cssVariablesTheme from '@etchteam/storybook-addon-css-variables-theme';

const createStyleTags = (url) => {
  return {
    styleTag: null,
    innerStyles: '',
    use: async function () {
      if (!this.styleTag) {
        this.styleTag = document.createElement('style');
        this.styleTag.type = 'text/css';
        this.innerStyles = (await import(/* @vite-ignore */ url)).default;
        this.styleTag.innerHTML = this.innerStyles;
        document.body.appendChild(this.styleTag);
        return;
      }
      this.styleTag.innerHTML = this.innerStyles;
    },
    unuse: function () {
      if (this.styleTag) {
        this.styleTag.innerHTML = '';
      }
    },
  };
};

const OpenSCD = createStyleTags('../themes/oscd.css?inline');

import { OscdTextfield } from '../components/oscd-textfield/src/oscd-textfield';

export const decorators = [cssVariablesTheme];

export const parameters = {
  cssVariables: {
    files: {
      'Oscd Theme': OpenSCD,
    },
    defaultTheme: 'Oscd Theme',
  },
};

function defineCustomElement(
  name: string,
  element: CustomElementConstructor
): void {
  customElements.get(name) || customElements.define(name, element);
}

defineCustomElement('oscd-textfield', OscdTextfield);
