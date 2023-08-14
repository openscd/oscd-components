import cssVariablesTheme from '@etchteam/storybook-addon-css-variables-theme';
import { createStyleTags } from '@oscd/utils';

const OpenSCD = createStyleTags('../../../../themes/prebuilt/oscd.css?inline');

export const decorators = [cssVariablesTheme];

export const parameters = {
  cssVariables: {
    files: {
      'Oscd Theme': OpenSCD,
    },
    defaultTheme: 'Oscd Theme',
  },
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
