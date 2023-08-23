import { expect, fixture, html } from '@open-wc/testing';

import '../src';
import type { OscdSelect } from '../src';

describe('Basic component oscd-select', () => {
  let element: OscdSelect;

  beforeEach(async () => {
    element = await fixture(html`<oscd-select</oscd-select>`);
    await element.updateComplete;
  });
});
