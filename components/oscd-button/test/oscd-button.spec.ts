import { expect, fixture, html } from '@open-wc/testing';

import '../src/OscdButton.js';
import { OscdButton } from '../src/OscdButton.js';

describe('oscd-button', () => {
  let element: OscdButton;

  beforeEach(async () => {
    element = await fixture(html`<oscd-button></oscd-button>`);
    await element.updateComplete;
  });

  it('looks like the latest snapshot', async () => {
    await expect(element).shadowDom.to.equalSnapshot();
  });
});
