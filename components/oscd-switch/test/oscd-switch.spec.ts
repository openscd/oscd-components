import { Switch } from '@material/mwc-switch';
import { expect, fixture, html } from '@open-wc/testing';

import '../src/OscdSwitch.js';
import type { OscdSwitch } from '../src/oscd-switch.js';

describe('Basic component oscd-switch', () => {
  let element: OscdSwitch;

  beforeEach(async () => {
    element = await fixture(html`<oscd-switch></oscd-switch>`);
    await element.updateComplete;
  });

  it('Should be selected', async () => {
    element.selected = true;

    await element.updateComplete;

    const el: Switch = element.shadowRoot!.querySelector('mwc-switch')!;

    expect(el.selected).to.be.true;
  });
});
