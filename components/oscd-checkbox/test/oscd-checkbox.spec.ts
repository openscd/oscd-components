import { html, fixture, expect } from '@open-wc/testing';

import '../src/OscdCheckbox.js';
import { OscdCheckbox } from '../src/oscd-checkbox.js';

function timeout(ms: number) {
  return new Promise((res) => {
    setTimeout(res, ms);
  });
}

describe('oscd-checkbox', () => {
  let element: OscdCheckbox;
  beforeEach(async () => {
    element = await fixture(html`<oscd-checkbox></oscd-checkbox>`);
  });

  describe('with no attribute set', () => {
    it('does not render a null value switch', () => {
      const switchEl: HTMLElement | null =
        element.shadowRoot!.querySelector('oscd-switch');

      expect(switchEl).to.not.exist;
    });

    it('is enabled', () => {
      expect(
        element.shadowRoot!.querySelector('mwc-checkbox')!
      ).to.have.property('disabled', false);
    });
    it('is un-checked', () => {
      expect(
        element.shadowRoot!.querySelector('mwc-checkbox')!
      ).to.have.property('checked', false);
    });

    it('returns the checked attribute as maybeValue', () => {
      element.maybeValue = 'true';
      expect(element).to.have.property('maybeValue', 'true');
    });

    it('is un-checked for invalid maybeValue input', () => {
      element.maybeValue = 'someinvalidinput';
      expect(
        element.shadowRoot!.querySelector('mwc-checkbox')!
      ).to.have.property('checked', false);
    });

    it('is un-checked in case input null with non-nullable property', () => {
      element.maybeValue = null;
      expect(
        element.shadowRoot!.querySelector('mwc-checkbox')!
      ).to.have.property('checked', false);
    });
  });

  describe('with nullable set', () => {
    beforeEach(async () => {
      element.nullable = true;
      await element.updateComplete;
    });

    it('renders a null value switch', async () =>
      expect(element.shadowRoot!.querySelector('oscd-switch')).to.exist);

    it('disables itself on switch toggle', async () => {
      expect(element).to.have.property('maybeValue', 'false');
      expect(
        element.shadowRoot!.querySelector('mwc-checkbox')
      ).to.have.property('disabled', false);
      await (
        element.shadowRoot
          ?.querySelector('oscd-switch')
          ?.shadowRoot?.querySelector('mwc-switch') as HTMLElement
      ).click();
      await element.requestUpdate();
      await element.updateComplete;
      await timeout(500);
      expect(element).to.have.property('maybeValue', null);
      expect(
        element.shadowRoot!.querySelector('mwc-checkbox')
      ).to.have.property('disabled', true);
    });

    it('remembers its previous value on switch toggle', async () => {
      element.maybeValue = 'true';
      await element.updateComplete;
      (element.shadowRoot?.querySelector('oscd-switch') as HTMLElement).click();
      await element.updateComplete;
      (element.shadowRoot?.querySelector('oscd-switch') as HTMLElement).click();
      await element.updateComplete;
      expect(
        element.shadowRoot!.querySelector('mwc-checkbox')
      ).to.have.property('disabled', false);
      expect(element).to.have.property('maybeValue', 'true');
    });

    describe('with a null value', () => {
      beforeEach(async () => {
        element.maybeValue = null;
        await element.updateComplete;
      });

      it('enables itself on switch toggle', async () => {
        (
          element.shadowRoot
            ?.querySelector('oscd-switch')
            ?.shadowRoot?.querySelector('mwc-switch') as HTMLElement
        ).click();
        await element.updateComplete;
        expect(
          element.shadowRoot!.querySelector('mwc-checkbox')!
        ).to.have.property('disabled', false);
      });

      it('has a disabled checkbox', () => {
        expect(
          element.shadowRoot!.querySelector('mwc-checkbox')!
        ).to.have.property('disabled', true);
      });

      it('is false per default', () => {
        expect(
          element.shadowRoot!.querySelector('mwc-checkbox')!
        ).to.have.property('checked', false);
      });

      it('is checked with true defaultChecked', async () => {
        element.defaultChecked = true;
        (
          element.shadowRoot?.querySelector('oscd-switch') as HTMLElement
        ).click();
        await element.requestUpdate();

        element.maybeValue = 'true';
        await element.requestUpdate();

        (
          element.shadowRoot?.querySelector('oscd-switch') as HTMLElement
        ).click();
        await element.requestUpdate();

        expect(
          element.shadowRoot!.querySelector('mwc-checkbox')
        ).to.have.property('checked', true);
      });

      it('returns null', () => {
        expect(element).to.have.property('maybeValue', null);
      });
    });
  });

  describe('disabled', () => {
    beforeEach(async () => {
      element = await fixture(
        html`<oscd-checkbox value=${'true'} nullable disabled></oscd-checkbox>`
      );

      await element.updateComplete;
    });

    it('disables checkbox', () => {
      expect(
        element.shadowRoot!.querySelector('mwc-checkbox')
      ).to.have.property('disabled', true);
    });

    it('disables null switch', () => {
      expect(element.shadowRoot!.querySelector('oscd-switch')).to.have.property(
        'disabled',
        true
      );
    });

    it('turns off null switch', async () => {
      (element.shadowRoot?.querySelector('oscd-switch') as HTMLElement).click();
      await element.updateComplete;
      (element.shadowRoot?.querySelector('oscd-switch') as HTMLElement).click();
      await element.updateComplete;

      expect(
        element.shadowRoot!.querySelector('mwc-checkbox')
      ).to.have.property('disabled', true);
    });
  });

  it('Should have no scoped elements', async () => {
    expect(OscdCheckbox.scopedElements).to.be.empty;
  });
});
