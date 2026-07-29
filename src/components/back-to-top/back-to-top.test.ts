import { expect, fixture, html } from '@open-wc/testing';
import sinon from 'sinon';
import '../../../dist/components/back-to-top/back-to-top.js';
import type SlBackToTop from './back-to-top.js';

describe('<sl-back-to-top>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <sl-back-to-top></sl-back-to-top> `);

    expect(el).to.exist;
  });

  describe('scroll listener lifecycle', () => {
    it('should remove the previous scroll listener before adding a new one on repeated initSlot calls', async () => {
      const el = await fixture<SlBackToTop>(html` <sl-back-to-top></sl-back-to-top> `);
      const removeSpy = sinon.spy(document, 'removeEventListener');

      el.initSlot();
      el.initSlot();

      expect(removeSpy.withArgs('scroll').callCount).to.equal(2);
      removeSpy.restore();
    });

    it('should remove the scroll listener when disconnected from the DOM', async () => {
      const el = await fixture<SlBackToTop>(html` <sl-back-to-top></sl-back-to-top> `);
      const removeSpy = sinon.spy(document, 'removeEventListener');

      el.remove();

      expect(removeSpy.withArgs('scroll').calledOnce).to.be.true;
      removeSpy.restore();
    });
  });
});
