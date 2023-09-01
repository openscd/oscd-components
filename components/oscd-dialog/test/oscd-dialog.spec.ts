import { expect, fixture, html } from '@open-wc/testing';

import '../src/OscdDialog.js';
import type { OscdDialog } from '../src/oscd-dialog.js';

describe('Basic component oscd-dialog', () => {
  let element: OscdDialog;

  beforeEach(async () => {
    element = await fixture(html`<oscd-dialog></oscd-dialog>`);
    await element.updateComplete;
  });
});
