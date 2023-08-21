import { fixture, html } from '@open-wc/testing';

import { visualDiff } from '@web/test-runner-visual-regression';

import '../src';
import { OscdActionIcon> } from '../src';

const factor = process.env.CI ? 2 : 1;

function timeout(ms: number) {
  return new Promise((res) => {
    setTimeout(res, ms * factor);
  });
}

mocha.timeout(2000 * factor);

describe('oscd-action-icon', () => {
  let element: OscdActionIcon;


  beforeEach(async () => {
    element = await fixture(
      html`<oscd-action-icon></oscd-action-icon>`
    );
    document.body.prepend(element);
  });

  afterEach(() => element.remove());

});
