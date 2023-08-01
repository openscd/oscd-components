import { expect, fixture, html } from '@open-wc/testing';
import { OscdTextfield } from '../src/oscd-textfield.js';
customElements.define('oscd-textfield', OscdTextfield);
describe('Basic component oscd-textfield', () => {
    let element;
    beforeEach(async () => {
        element = await fixture(html `<oscd-textfield label="Label"></oscd-textfield>`);
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
});
//# sourceMappingURL=oscd-textfield.spec.js.map