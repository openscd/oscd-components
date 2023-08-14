import { expect, fixture, html } from '@open-wc/testing';

import '../src/OscdCard.js';
import { OscdCard } from '../src/OscdCard.js';

describe('oscd-card', () => {
  let element: OscdCard;

  beforeEach(async () => {
    element = await fixture(html`<oscd-card></oscd-card>`);
    await element.updateComplete;
  });

  it('looks like the latest snapshot', async () => {
    await expect(element).shadowDom.to.equalSnapshot();
  });
});
