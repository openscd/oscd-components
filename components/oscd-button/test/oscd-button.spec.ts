import { expect, fixture, html } from '@open-wc/testing';

import '../src/OscdButton.js';
import { OscdButton } from '../src/oscd-button.js';

describe('Basic component oscd-button', () => {
  let element: OscdButton;

  beforeEach(async () => {
    element = await fixture(html`<oscd-button></oscd-button>`);
    await element.updateComplete;
  });

  it('Should have basic text', async () => {
    const label = 'Click me!';
    element.label = label;

    await element.updateComplete;

    expect(element.shadowRoot!.querySelector('mwc-button')?.label).to.equal(
      label
    );
  });

  it('Should be raised', async () => {
    element.raised = true;

    await element.updateComplete;

    expect(element.shadowRoot?.querySelector('mwc-button')!.raised).to.be.true;
  });

  it('Should be outlined', async () => {
    element.outlined = true;

    await element.updateComplete;

    expect(element.shadowRoot?.querySelector('mwc-button')?.outlined).to.be
      .true;
  });

  it('Should be disabled', async () => {
    element.disabled = true;

    await element.updateComplete;

    expect(element.shadowRoot?.querySelector('mwc-button')?.disabled).to.be
      .true;
  });

  it('Should have icon', async () => {
    const icon = 'edit';
    element.icon = icon;

    await element.updateComplete;

    expect(element.shadowRoot?.querySelector('mwc-button')?.icon).to.equal(
      icon
    );
  });

  it('Should have no scoped elements', async () => {
    expect(OscdButton.scopedElements).to.be.empty;
  });
});
