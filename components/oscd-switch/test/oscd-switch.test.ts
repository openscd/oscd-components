import { fixture, html } from '@open-wc/testing';

import { visualDiff } from '@web/test-runner-visual-regression';

import '../src/OscdSwitch.js';
import { OscdSwitch } from '../src/OscdSwitch.js';

const factor = process.env.CI ? 2 : 1;

function timeout(ms: number) {
  return new Promise((res) => {
    setTimeout(res, ms * factor);
  });
}

mocha.timeout(2000 * factor);

describe('oscd-switch', () => {
  let element: OscdSwitch;

  beforeEach(async () => {
    element = await fixture(html`<oscd-switch></oscd-switch>`);
    document.body.prepend(element);
  });

  it('Should look like screenshot', async () => {
    await element.updateComplete;
    await timeout(500);
    await visualDiff(element, 'oscd-switch');
  });

  describe('selected', () => {
    it('Should look like screenshot', async () => {
      element.selected = true;
      await element.updateComplete;
      await timeout(500);
      await visualDiff(element, 'oscd-switch-selected');
    });
  });

  afterEach(() => element.remove());
});
