import { expect, fixture, html } from '@open-wc/testing';

import '../src/OscdSelect.js';
import { OscdSelect } from '../src/OscdSelect.js';

describe('oscd-select', () => {
  let element: OscdSelect;

  beforeEach(async () => {
    element = await fixture(html`<oscd-select></oscd-select>`);
    await element.updateComplete;
  });

  it('looks like the latest snapshot', async () => {
    await expect(element).shadowDom.to.equalSnapshot();
  });
});
