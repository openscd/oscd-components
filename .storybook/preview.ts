import { setCustomElementsManifest } from '@storybook/web-components';
import { withThemeByDataAttribute } from '@storybook/addon-themes';

import '../themes/prebuilt/oscd.css';

import customElements from '../custom-elements.json';

setCustomElementsManifest(customElements);

export const decorators = [
  withThemeByDataAttribute({
    themes: {
      light: '',
      dark: 'dark',
    },
    defaultTheme: 'light',
    attributeName: 'data-theme',
  }),
];

export const parameters = {
  statuses: {
    released: {
      background: '#0000ff',
      color: '#ffffff',
      description: 'This component is stable and released',
    },
    beta: {
      background: '#FF0000',
      color: '#FFFFFF',
      description: 'This component is still in beta',
    },
  },
};
