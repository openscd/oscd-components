import { fixture, html } from '@open-wc/testing';

import { visualDiff } from '@web/test-runner-visual-regression';

import '../src';

import { OscdButton } from '../src';

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
});
