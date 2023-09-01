import { html, fixture, expect } from '@open-wc/testing';

import '@material/mwc-list/mwc-list-item';

import '../src/OscdSelect.js';
import { OscdSelect } from '../src/oscd-select.js';

describe('oscd-select', () => {
  let element: OscdSelect;
  const items = ['one', 'two', 'three'];
  beforeEach(async () => {
    element = await fixture(
      html`<oscd-select
        >${items.map(
          (item) => html`<mwc-list-item value="${item}">${item}</mwc-list-item>`
        )}</oscd-select
      >`
    );
  });

  it('does not render a null value switch', () => {
    expect(element.shadowRoot!.querySelector('oscd-switch')).to.not.exist;
  });

  it('is enabled', () => {
    expect(element).to.have.property('disabled', false);
  });

  it('returns the select value as its maybeValue', () => {
    element.value = 'two';
    expect(element.maybeValue).to.equal(element.value);
  });

  describe('nullable', () => {
    beforeEach(async () => {
      element.nullable = true;
      element.value = 'one';
      await element.updateComplete;
    });

    it('renders a null value switch', async () => {
      expect(element.shadowRoot?.querySelector('oscd-switch')).to.exist;
    });

    it('disables itself on switch toggle', async () => {
      expect(element).to.have.property('maybeValue', 'one');
      expect(element.shadowRoot!.querySelector('mwc-select')).to.have.property(
        'disabled',
        false
      );
      await (
        element.shadowRoot
          ?.querySelector('oscd-switch')
          ?.shadowRoot?.querySelector('mwc-switch') as HTMLElement
      ).click();
      await element.updateComplete;
      expect(element).to.have.property('maybeValue', null);
      expect(element.shadowRoot?.querySelector('mwc-select')).to.have.property(
        'disabled',
        true
      );
    });

    it('remebers its previous value on switch toggle', async () => {
      element.maybeValue = 'three';
      await element.updateComplete;
      element.shadowRoot
        ?.querySelector('oscd-switch')
        ?.shadowRoot?.querySelector('mwc-switch')!
        .click();
      await element.updateComplete;
      element.shadowRoot
        ?.querySelector('oscd-switch')
        ?.shadowRoot?.querySelector('mwc-switch')!
        .click();
      await element.updateComplete;
      expect(element).to.have.property('disabled', false);
      expect(element).to.have.property('maybeValue', 'three');
    });

    describe('with a null value', () => {
      beforeEach(async () => {
        element.maybeValue = null;
        await element.updateComplete;
      });

      it('enables itself on switch toggle', async () => {
        element.shadowRoot
          ?.querySelector('oscd-switch')
          ?.shadowRoot?.querySelector('mwc-switch')!
          .click();
        await element.updateComplete;
        expect(element).to.have.property('disabled', false);
      });

      it('has a disabled textfield', () => {
        expect(
          element.shadowRoot?.querySelector('mwc-select')
        ).to.have.property('disabled', true);
      });

      it('does not show anything in the textfield', () => {
        expect(element).to.have.property('value', '');
      });

      it('returns null', () => {
        expect(element).to.have.property('maybeValue', null);
      });
    });
  });

  describe('disabled', () => {
    beforeEach(async () => {
      element = await fixture(html`<oscd-select
        .maybeValue=${'three'}
        nullable
        disabled
        >${items.map(
          (item) => html`<mwc-list-item value="${item}">${item}</mwc-list-item>`
        )}</oscd-select
      >`);

      await element.updateComplete;
    });

    it('disables select', () => {
      expect(element).to.have.property('disabled', true);
    });

    it('disables null switch', () => {
      expect(element.shadowRoot!.querySelector('oscd-switch')).to.have.property(
        'disabled',
        true
      );
    });

    it('turns off null switch', async () => {
      element.shadowRoot
        ?.querySelector('oscd-switch')
        ?.shadowRoot?.querySelector('mwc-switch')!
        .click();
      await element.updateComplete;
      element.shadowRoot
        ?.querySelector('oscd-switch')
        ?.shadowRoot?.querySelector('mwc-switch')!
        .click();
      await element.updateComplete;

      expect(element).to.have.property('disabled', true);
    });
  });

  it('Should have no scoped elements', async () => {
    expect(OscdSelect.scopedElements).to.be.empty;
  });
});
