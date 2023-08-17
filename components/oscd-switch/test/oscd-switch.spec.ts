import { expect, fixture, html } from '@open-wc/testing';

import '../src/OscdSwitch.js';
import type { OscdSwitch } from '../src/OscdSwitch.js';

describe('Basic component oscd-switch', () => {
  let element: OscdSwitch;

  beforeEach(async () => {
    element = await fixture(html`<oscd-switch></oscd-switch>`);
    await element.updateComplete;
  });
});
