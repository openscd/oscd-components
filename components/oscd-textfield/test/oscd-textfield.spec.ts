import { TextField } from '@material/mwc-textfield';
import { expect, fixture, html } from '@open-wc/testing';

import '../src/OscdTextfield.js';
import type { OscdTextfield } from '../src/oscd-textfield.js';

describe('Basic component oscd-textfield', () => {
  let element: OscdTextfield;

  beforeEach(async () => {
    element = await fixture(
      html`<oscd-textfield label="Label"></oscd-textfield>`
    );
    await element.updateComplete;
  });

  describe('with label property set', () => {
    it('looks like the latest snapshot', async () => {
      await expect(element).shadowDom.to.equalSnapshot();
    });
  });

  describe('without label property ', () => {
    beforeEach(async () => {
      element.label = '';
      await element.updateComplete;
    });
    it('looks like the latest snapshot', async () => {
      await expect(element).shadowDom.to.equalSnapshot();
    });
  });

  describe('With maybe value', () => {
    beforeEach(async () => {
      element.maybeValue = 'John Doe';
      element.nullable = true;
      await element.updateComplete;
    });
    it('looks like the latest snapshot', async () => {
      await expect(element).shadowDom.to.equalSnapshot();
    });

    it('Should have null switch', async () => {
      expect(element.querySelector('mwc-switch')).not.to.be.undefined;
    });
  });

  describe('Pass properties down', () => {
    it('Should pass correct property down', async () => {
      element.value = 'John Doe';
      element.disabled = true;
      element.helperPersistent = true;
      element.validationMessage = 'Validation Message';
      element.required = true;
      element.suffix = '@example.org';
      element.label = 'Email';
      element.minLength = 1;
      element.maxLength = 100;
      element.min = 5;
      element.max = 100;

      await element.updateComplete;

      const textField: TextField =
        element.shadowRoot!.querySelector<TextField>('mwc-textfield')!;

      expect(element.value).to.equal(textField.value);
      expect(element.disabled).to.equal(textField.disabled);
      expect(element.helperPersistent).to.equal(textField.helperPersistent);
      expect(element.validationMessage).to.equal(textField.validationMessage);
      expect(element.required).to.equal(textField.required);
      expect(element.suffix).to.equal(textField.suffix);
      expect(element.label).to.equal(textField.label);
      expect(element.minLength).to.equal(textField.minLength);
      expect(element.maxLength).to.equal(textField.maxLength);
      expect(element.min).to.equal(textField.min);
      expect(element.max).to.equal(textField.max);
    });
  });

  describe('Multiplier', () => {
    beforeEach(async () => {
      element.multipliers = ['First multiplier', 'Second multiplier'];
      element.unit = 'Unit';
      await element.updateComplete;
    });

    it('Should add multipliers', () => {
      expect(element).shadowDom.to.equalSnapshot();
    });
  });
});
