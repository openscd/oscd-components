import { fixture, html } from '@open-wc/testing';

import { visualDiff } from '@web/test-runner-visual-regression';

import '../src/OscdTextfield.js';
import type { OscdTextfield } from '../src/OscdTextfield.js';

const factor = process.env.CI ? 2 : 1;

function timeout(ms: number) {
  return new Promise((res) => {
    setTimeout(res, ms * factor);
  });
}

mocha.timeout(2000 * factor);

describe('oscd-textfield', () => {
  let element: OscdTextfield;
  const label = 'Test Label';
  const value = 'Value';

  beforeEach(async () => {
    element = await fixture(
      html`<oscd-textfield .label=${label} .value=${value}></oscd-textfield>`
    );
    document.body.prepend(element);
  });

  afterEach(() => element.remove());

  it('displays the label', async () => {
    await element.updateComplete;
    await timeout(500);
    await visualDiff(element, 'oscd-textfield');
  });
});
