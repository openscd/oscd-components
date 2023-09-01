import { fixture, html } from '@open-wc/testing';

import { visualDiff } from '@web/test-runner-visual-regression';

import '../src/OscdDialog.js';
import { OscdDialog } from '../src/oscd-dialog.js';

const factor = process.env.CI ? 2 : 1;

function timeout(ms: number) {
  return new Promise((res) => {
    setTimeout(res, ms * factor);
  });
}

mocha.timeout(2000 * factor);

describe('oscd-dialog', () => {
  let element: OscdDialog;

  beforeEach(async () => {
    element = await fixture(html`<oscd-dialog></oscd-dialog>`);
    document.body.prepend(element);
  });

  afterEach(() => element.remove());
});
