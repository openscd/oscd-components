import { expect, fixture, html } from '@open-wc/testing';

import '../src';
import type { OscdActionIcon } from '../src';

describe('Basic component oscd-action-icon', () => {
  let element: OscdActionIcon;

  beforeEach(async () => {
    element = await fixture(html`<oscd-action-icon</oscd-action-icon>`);
    await element.updateComplete;
  });
});
