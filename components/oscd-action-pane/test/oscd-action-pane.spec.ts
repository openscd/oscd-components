import { expect, fixture, html } from '@open-wc/testing';

import '../src/OscdActionPane.js';
import { OscdActionPane } from '../src/OscdActionPane.js';

describe('oscd-action-pane', () => {
  let element: OscdActionPane;
  const label = 'test label';

  beforeEach(async () => {
    element = await fixture(
      html`<oscd-action-pane
        header="test header"
        label="${label}"
      ></oscd-action-pane>`
    );
    await element.updateComplete;
  });

  it('looks like the latest snapshot', () => {
    expect(element).shadowDom.to.equalSnapshot();
  });
  it('renders the header as <h1> per default', () => {
    const header: HTMLElement | null =
      element.shadowRoot?.querySelector(`[title="${label}"]`) ?? null;
    expect(header).to.exist;
    expect(header?.tagName).to.equal('H1');
  });

  it('renders the header as <h1> with level 1', async () => {
    element.level = 1;
    await element.updateComplete;
    const header: HTMLElement | null =
      element.shadowRoot?.querySelector(`[title="${label}"]`) ?? null;
    expect(header).to.exist;
    expect(header?.tagName).to.equal('H1');
  });

  it('renders the header as <h2> with level 2', async () => {
    element.level = 2;
    await element.updateComplete;
    const header: HTMLElement | null =
      element.shadowRoot?.querySelector(`[title="${label}"]`) ?? null;
    expect(header).to.exist;
    expect(header?.tagName).to.equal('H2');
  });

  it('renders the header as <h3> with level 3', async () => {
    element.level = 3;
    await element.updateComplete;
    const header: HTMLElement | null =
      element.shadowRoot?.querySelector(`[title="${label}"]`) ?? null;
    expect(header).to.exist;
    expect(header?.tagName).to.equal('H3');
  });

  it('renders the header as <h4> with level 4', async () => {
    element.level = 4;
    await element.updateComplete;
    const header: HTMLElement | null =
      element.shadowRoot?.querySelector(`[title="${label}"]`) ?? null;
    expect(header).to.exist;
    expect(header?.tagName).to.equal('H4');
  });

  it('renders the header as <h4> for levels > 4', async () => {
    element.level = 7;
    await element.updateComplete;
    const header: HTMLElement | null =
      element.shadowRoot?.querySelector(`[title="${label}"]`) ?? null;
    expect(header).to.exist;
    expect(header?.tagName).to.equal('H4');
  });

  it('renders the header as <h1> for levels < 1', async () => {
    element.level = -1;
    await element.updateComplete;
    const header: HTMLElement | null =
      element.shadowRoot?.querySelector(`[title="${label}"]`) ?? null;
    expect(header).to.exist;
    expect(header?.tagName).to.equal('H1');
  });

  it('renders the title on the <h1>', async () => {
    element.level = 1;
    await element.updateComplete;
    expect(
      element.shadowRoot?.querySelector('h1')!.getAttribute('title')
    ).to.be.equals(label);
  });

  it('renders the title on the <h2>', async () => {
    element.level = 2;
    await element.updateComplete;
    expect(
      element.shadowRoot?.querySelector('h2')!.getAttribute('title')
    ).to.be.equals(label);
  });

  it('renders the title on the <h3>', async () => {
    element.level = 3;
    await element.updateComplete;
    expect(
      element.shadowRoot?.querySelector('h3')!.getAttribute('title')
    ).to.be.equals(label);
  });

  it('renders the title on the <h4>', async () => {
    element.level = 4;
    await element.updateComplete;
    expect(
      element.shadowRoot?.querySelector('h4')!.getAttribute('title')
    ).to.be.equals(label);
  });

  it('does not set contrasted class property with odd level', async () => {
    element.level = 3;
    await element.updateComplete;

    expect(
      element.shadowRoot
        ?.querySelector('section')
        ?.classList.contains('contrasted')
    ).to.be.false;
  });

  it('sets contrasted class property with even levels', async () => {
    element.level = 4;
    await element.updateComplete;

    expect(
      element.shadowRoot
        ?.querySelector('section')
        ?.classList.contains('contrasted')
    ).to.be.true;
  });

  describe('with icon property set', () => {
    beforeEach(async () => {
      element.icon = 'edit';
      await element.updateComplete;
    });

    it('looks like the latest snapshot', () => {
      expect(element).shadowDom.to.equalSnapshot();
    });
  });
});
