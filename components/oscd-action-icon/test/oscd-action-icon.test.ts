import { fixture } from '@open-wc/testing';
import { html } from 'lit-html';

import { visualDiff } from '@web/test-runner-visual-regression';

import '../src/OscdActionIcon.js';
import type { OscdActionIcon } from '../src/OscdActionIcon.js';

const factor = process.env.CI ? 2 : 1;

function timeout(ms: number) {
  return new Promise((res) => {
    setTimeout(res, ms * factor);
  });
}

mocha.timeout(2000 * factor);

describe('oscd-action-icon', () => {
  let element: OscdActionIcon;
  const label = 'Test Label';
  const icon = 'edit';

  beforeEach(async () => {
    element = await fixture(
      html`<oscd-action-icon label=${label} icon=${icon}></oscd-action-icon>`
    );
    document.body.prepend(element);
  });

  afterEach(() => element.remove());

  it('displays the title', async () => {
    await element.updateComplete;
    await timeout(500);
    await visualDiff(element, 'oscd-action-icon');
  });

  it('displays the title and icon', async () => {
    element.highlighted = true;
    await element.updateComplete;
    await timeout(500);
    await visualDiff(element, 'oscd-action-icon-highlighted');
  });
});
