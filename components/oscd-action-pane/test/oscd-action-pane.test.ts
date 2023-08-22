import { fixture } from '@open-wc/testing';
import { html } from 'lit-html';

import { visualDiff } from '@web/test-runner-visual-regression';

import '../src/OscdActionPane.js';
import type { OscdActionPane } from '../src/OscdActionPane.js';

const factor = process.env.CI ? 2 : 1;

function timeout(ms: number) {
  return new Promise((res) => {
    setTimeout(res, ms * factor);
  });
}

mocha.timeout(2000 * factor);

describe('oscd-action-pane', () => {
  let element: OscdActionPane;
  const label = 'Test Title';

  beforeEach(async () => {
    element = await fixture(
      html`<oscd-action-pane label=${label}>Testing</oscd-action-pane>`
    );
    document.body.prepend(element);
  });

  afterEach(() => element.remove());

  it('displays the title', async () => {
    await element.updateComplete;
    await timeout(500);
    await visualDiff(element, 'oscd-action-pane');
  });

  it('displays the title and icon', async () => {
    element.icon = 'arrow_back';
    await element.updateComplete;
    await timeout(500);
    await visualDiff(element, 'oscd-action-pane-icon');
  });
});
