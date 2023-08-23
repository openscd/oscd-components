import { expect, fixture, html } from '@open-wc/testing';

import '../src';
import type { OscdButton } from '../src';

describe('Basic component oscd-button', () => {
  let element: OscdButton;

  beforeEach(async () => {
    element = await fixture(html`<oscd-button></oscd-button>`);
    await element.updateComplete;
  });
});
