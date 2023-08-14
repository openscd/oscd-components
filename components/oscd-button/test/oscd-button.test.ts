import { fixture } from '@open-wc/testing';
import { html } from 'lit';

import { visualDiff } from '@web/test-runner-visual-regression';

import '../src/OscdButton.js';
import type { OscdButton } from '../src/OscdButton.js';

const factor = process.env.CI ? 2 : 1;

function timeout(ms: number) {
  return new Promise((res) => {
    setTimeout(res, ms * factor);
  });
}

mocha.timeout(2000 * factor);

describe('oscd-button', () => {
  let element: OscdButton;

  beforeEach(async () => {
    element = await fixture(html`<oscd-button></oscd-button>`);
    document.body.prepend(element);
  });

  afterEach(() => element.remove());

  it('displays the component', async () => {
    await element.updateComplete;
    await timeout(500);
    await visualDiff(element, 'oscd-button');
  });
});
