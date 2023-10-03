import { fixture, html } from '@open-wc/testing';

import { visualDiff } from '@web/test-runner-visual-regression';

import '../src/OscdButton.js';
import type { OscdButton } from '../src/oscd-button.js';

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
    element = await fixture(
      html`<oscd-button label="Click me!"></oscd-button>`
    );
    document.body.prepend(element);
  });

  afterEach(() => element.remove());

  it('displays the label', async () => {
    await element.updateComplete;
    await timeout(500);
    await visualDiff(element, 'oscd-button');
  });

  it('displays the icon', async () => {
    element.icon = 'arrow_back';
    await element.updateComplete;
    await timeout(500);
    await visualDiff(element, 'oscd-button-icon');
  });

  it('is disabled', async () => {
    element.disabled = true;
    await element.updateComplete;
    await timeout(500);
    await visualDiff(element, 'oscd-button-disabled');
  });

  describe('raised', () => {
    beforeEach(async () => {
      element = await fixture(
        html`<oscd-button raised label="Click me!"></oscd-button>`
      );
      document.body.prepend(element);
    });

    it('displays the label', async () => {
      await element.updateComplete;
      await timeout(500);
      await visualDiff(element, 'oscd-button--raised');
    });

    it('displays the icon', async () => {
      element.icon = 'arrow_back';
      await element.updateComplete;
      await timeout(500);
      await visualDiff(element, 'oscd-button--raised-icon');
    });

    it('is disabled', async () => {
      element.disabled = true;
      await element.updateComplete;
      await timeout(500);
      await visualDiff(element, 'oscd-button--raised-disabled');
    });
  });

  describe('outlined', () => {
    beforeEach(async () => {
      element = await fixture(
        html`<oscd-button outlined label="Click me!"></oscd-button>`
      );
      document.body.prepend(element);
    });

    it('displays the label', async () => {
      await element.updateComplete;
      await timeout(500);
      await visualDiff(element, 'oscd-button--outlined');
    });

    it('displays the icon', async () => {
      element.icon = 'arrow_back';
      await element.updateComplete;
      await timeout(500);
      await visualDiff(element, 'oscd-button--outlined-icon');
    });

    it('is disabled', async () => {
      element.disabled = true;
      await element.updateComplete;
      await timeout(500);
      await visualDiff(element, 'oscd-button--outlined-disabled');
    });
  });
});
