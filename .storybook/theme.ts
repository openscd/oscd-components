import { create } from '@storybook/theming/create';

import * as Theme from '../themes/built/oscd/variables.js';

export default create({
  base: 'light',
  brandTitle: 'Oscd Components',
  brandUrl: 'https://example.com',
  brandImage: './oscd_components-logo.svg',
  brandTarget: '_self',

  barTextColor: Theme.ColorOscdRefGrayGray900,
  barSelectedColor: Theme.ColorOscdSysLightPrimary,
  barBg: Theme.ColorOscdRefGrayGray200,

  colorPrimary: Theme.ColorOscdSysLightPrimary,
  colorSecondary: Theme.ColorOscdSysLightSecondary,

  textColor: Theme.ColorOscdRefGrayGray900,
});
