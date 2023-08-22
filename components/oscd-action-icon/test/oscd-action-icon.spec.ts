import { expect, fixture, html } from '@open-wc/testing';

import '../src/OscdActionIcon.js';
import { OscdActionIcon } from '../src/OscdActionIcon.js';

describe('Basic component action-icon', () => {
  let element: OscdActionIcon;

  beforeEach(async () => {
    element = await fixture(
      html`<oscd-action-icon header="test header"></oscd-action-icon>`
    );
    await element.updateComplete;
  });
  describe('with icon property set', () => {
    it('looks like the latest snapshot', async () => {
      await expect(element).shadowDom.to.equalSnapshot();
    });
  });

  describe('with unset icon property ', () => {
    beforeEach(async () => {
      element.icon = 'edit';
      await element.updateComplete;
    });
    it('looks like the latest snapshot', async () => {
      await expect(element).shadowDom.to.equalSnapshot();
    });
  });
});
