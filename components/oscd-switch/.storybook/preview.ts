import { setCustomElementsManifest } from '@storybook/web-components';

import { html } from 'lit';
import { withRootAttribute } from 'storybook-addon-root-attribute';

import '../../../themes/prebuilt/oscd.css';

import customElements from '../custom-elements.json';

setCustomElementsManifest(customElements);

export const decorators: Decorator[] = [
  withRootAttribute,
  (story) => html`<div class="story-wrapper">${story()}</div>`,
];

export const parameters = {
  controls: { expanded: true },
  actions: { argTypesRegex: '^on.*' },

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
  rootAttribute: {
    defaultState: {
      name: 'Light',
      value: null,
    },
    attribute: 'dark',
    tooltip: true,
    states: [
      {
        name: 'Dark',
        value: 'dark',
      },
    ],
  },
};