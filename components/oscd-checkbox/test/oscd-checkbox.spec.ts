import { expect, fixture, html } from '@open-wc/testing';

import '../src';
import type { OscdCheckbox } from '../src';

describe('Basic component oscd-checkbox', () => {
  let element: OscdCheckbox;

  beforeEach(async () => {
    element = await fixture(html`<oscd-checkbox</oscd-checkbox>`);
    await element.updateComplete;
  });
});
