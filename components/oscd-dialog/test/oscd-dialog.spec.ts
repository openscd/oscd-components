import { expect, fixture, html } from '@open-wc/testing';

import '../src/OscdDialog.js';
import { OscdDialog } from '../src/oscd-dialog.js';

describe('Basic component oscd-dialog', () => {
  let element: OscdDialog;

  beforeEach(async () => {
    element = await fixture(html`<oscd-dialog></oscd-dialog>`);
    await element.updateComplete;
  });

  it('Should have no scoped elements', async () => {
    expect(OscdDialog.scopedElements).to.be.empty;
  });
});
