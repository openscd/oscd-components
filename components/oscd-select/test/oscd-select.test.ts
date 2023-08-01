import { fixture } from '@open-wc/testing';
import { html } from 'lit';

import { visualDiff } from '@web/test-runner-visual-regression';

import '../src/OscdSelect.js';
import type { OscdSelect } from '../src/OscdSelect.js';

const factor = process.env.CI ? 2 : 1;

function timeout(ms: number) {
  return new Promise((res) => {
    setTimeout(res, ms * factor);
  });
}

mocha.timeout(2000 * factor);

describe('oscd-select', () => {
  let element: OscdSelect;

  beforeEach(async () => {
    element = await fixture(html`<oscd-select></oscd-select>`);
    document.body.prepend(element);
  });

  afterEach(() => element.remove());

  it('displays the component', async () => {
    await element.updateComplete;
    await timeout(500);
    await visualDiff(element, 'oscd-select');
  });
});
