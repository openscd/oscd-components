import { expect, fixture, html } from '@open-wc/testing';

import '../src';
import type { OscdDialog } from '../src';

describe('Basic component oscd-dialog', () => {
  let element: OscdDialog;

  beforeEach(async () => {
    element = await fixture(html`<oscd-dialog</oscd-dialog>`);
    await element.updateComplete;
  });
});
