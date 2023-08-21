import { expect, fixture, html } from '@open-wc/testing';

import '../src';
import type { OscdActionPane } from '../src';

describe('Basic component oscd-action-pane', () => {
  let element: OscdActionPane;

  beforeEach(async () => {
    element = await fixture(html`<oscd-action-pane</oscd-action-pane>`);
    await element.updateComplete;
  });
});
