import { elementUpdated, expect, fixture, html, waitUntil } from '@open-wc/testing';
import sinon from 'sinon';
import '../../../dist/components/pagination/pagination.js';
import type SlPagination from './pagination.js';

describe('<sl-pagination>', () => {
  // ---------------------------------------------------------------------------
  // Rendering & defaults
  // ---------------------------------------------------------------------------
  describe('defaults', () => {
    it('should render the component', async () => {
      const el = await fixture<SlPagination>(html`<sl-pagination total="100"></sl-pagination>`);
      expect(el).to.exist;
    });

    it('should default to page 1', async () => {
      const el = await fixture<SlPagination>(html`<sl-pagination total="100"></sl-pagination>`);
      expect(el.value).to.equal(1);
    });

    it('should default to pageSize 20', async () => {
      const el = await fixture<SlPagination>(html`<sl-pagination total="100"></sl-pagination>`);
      expect(el.pageSize).to.equal(20);
    });

    it('should default to right alignment', async () => {
      const el = await fixture<SlPagination>(html`<sl-pagination total="100"></sl-pagination>`);
      expect(el.align).to.equal('right');
    });

    it('should calculate pageCount correctly', async () => {
      const el = await fixture<SlPagination>(html`<sl-pagination total="100" page-size="10"></sl-pagination>`);
      expect(el.pageCount).to.equal(10);
    });

    it('should ceil pageCount for non-even totals', async () => {
      const el = await fixture<SlPagination>(html`<sl-pagination total="101" page-size="10"></sl-pagination>`);
      expect(el.pageCount).to.equal(11);
    });
  });

  // ---------------------------------------------------------------------------
  // Empty state
  // ---------------------------------------------------------------------------
  describe('when total is 0', () => {
    it('should render the no-data container', async () => {
      const el = await fixture<SlPagination>(html`<sl-pagination total="0"></sl-pagination>`);
      expect(el.shadowRoot!.querySelector('[part~="no-data"]')).to.exist;
    });

    it('should not render navigation buttons', async () => {
      const el = await fixture<SlPagination>(html`<sl-pagination total="0"></sl-pagination>`);
      expect(el.shadowRoot!.querySelector('[part~="prev-button"]')).to.not.exist;
      expect(el.shadowRoot!.querySelector('[part~="next-button"]')).to.not.exist;
    });

    it('should accept custom no-data slot content', async () => {
      const el = await fixture<SlPagination>(html`
        <sl-pagination total="0">
          <span slot="no-data">Keine Einträge vorhanden</span>
        </sl-pagination>
      `);
      const slot = el.shadowRoot!.querySelector<HTMLSlotElement>('slot[name="no-data"]')!;
      const assigned = slot.assignedNodes({ flatten: true });
      expect(assigned.length).to.be.greaterThan(0);
      expect(assigned[0].textContent).to.equal('Keine Einträge vorhanden');
    });
  });

  // ---------------------------------------------------------------------------
  // Parts
  // ---------------------------------------------------------------------------
  describe('parts', () => {
    it('should expose a base part', async () => {
      const el = await fixture<SlPagination>(html`<sl-pagination total="100"></sl-pagination>`);
      expect(el.shadowRoot!.querySelector('[part~="base"]')).to.exist;
    });

    it('should expose a pageWrap part', async () => {
      const el = await fixture<SlPagination>(html`<sl-pagination total="100"></sl-pagination>`);
      expect(el.shadowRoot!.querySelector('[part~="pageWrap"]')).to.exist;
    });

    it('should expose prev-button and next-button parts', async () => {
      const el = await fixture<SlPagination>(html`<sl-pagination total="100"></sl-pagination>`);
      expect(el.shadowRoot!.querySelector('[part~="prev-button"]')).to.exist;
      expect(el.shadowRoot!.querySelector('[part~="next-button"]')).to.exist;
    });

    it('should expose first-button part when showFirst is true', async () => {
      const el = await fixture<SlPagination>(html`<sl-pagination total="100" .showFirst=${true}></sl-pagination>`);
      expect(el.shadowRoot!.querySelector('[part~="first-button"]')).to.exist;
    });

    it('should not expose first-button part when showFirst is false', async () => {
      const el = await fixture<SlPagination>(html`<sl-pagination total="100"></sl-pagination>`);
      expect(el.shadowRoot!.querySelector('[part~="first-button"]')).to.not.exist;
    });

    it('should expose last-button part when showLast is true', async () => {
      const el = await fixture<SlPagination>(html`<sl-pagination total="100" .showLast=${true}></sl-pagination>`);
      expect(el.shadowRoot!.querySelector('[part~="last-button"]')).to.exist;
    });

    it('should not expose last-button part when showLast is false', async () => {
      const el = await fixture<SlPagination>(html`<sl-pagination total="100"></sl-pagination>`);
      expect(el.shadowRoot!.querySelector('[part~="last-button"]')).to.not.exist;
    });

    it('should expose page-button parts on all page number buttons', async () => {
      const el = await fixture<SlPagination>(html`<sl-pagination total="100" page-size="10"></sl-pagination>`);
      const pageButtons = el.shadowRoot!.querySelectorAll('[part~="page-button"]');
      expect(pageButtons.length).to.be.greaterThan(0);
    });

    it('should mark only the active page with active-page-button part', async () => {
      const el = await fixture<SlPagination>(html`<sl-pagination total="100" page-size="10" value="3"></sl-pagination>`);
      const activeButtons = el.shadowRoot!.querySelectorAll('[part~="active-page-button"]');
      expect(activeButtons.length).to.equal(1);
      expect(activeButtons[0].textContent?.trim()).to.equal('3');
    });

    it('should update active-page-button part when page changes', async () => {
      const el = await fixture<SlPagination>(html`<sl-pagination total="100" page-size="10" value="3"></sl-pagination>`);
      el.goToPage(5);
      await elementUpdated(el);
      const activeButton = el.shadowRoot!.querySelector('[part~="active-page-button"]');
      expect(activeButton?.textContent?.trim()).to.equal('5');
    });

    it('should expose page-jump part when showPageChange is true', async () => {
      const el = await fixture<SlPagination>(html`<sl-pagination total="100" show-page-change></sl-pagination>`);
      expect(el.shadowRoot!.querySelector('[part~="page-jump"]')).to.exist;
    });

    it('should not expose page-jump part by default', async () => {
      const el = await fixture<SlPagination>(html`<sl-pagination total="100"></sl-pagination>`);
      expect(el.shadowRoot!.querySelector('[part~="page-jump"]')).to.not.exist;
    });

    it('should expose show-size-change part when showSizeChange is true', async () => {
      const el = await fixture<SlPagination>(html`<sl-pagination total="100" show-size-change></sl-pagination>`);
      expect(el.shadowRoot!.querySelector('[part~="show-size-change"]')).to.exist;
    });
  });

  // ---------------------------------------------------------------------------
  // Slots
  // ---------------------------------------------------------------------------
  describe('slots', () => {
    describe('icon slots — defaults', () => {
      it('should render chevron-left as default prev-icon', async () => {
        const el = await fixture<SlPagination>(html`<sl-pagination total="100"></sl-pagination>`);
        const icon = el.shadowRoot!.querySelector('[part~="prev-button"] sl-icon');
        expect(icon?.getAttribute('name')).to.equal('chevron-left');
      });

      it('should render chevron-right as default next-icon', async () => {
        const el = await fixture<SlPagination>(html`<sl-pagination total="100"></sl-pagination>`);
        const icon = el.shadowRoot!.querySelector('[part~="next-button"] sl-icon');
        expect(icon?.getAttribute('name')).to.equal('chevron-right');
      });

      it('should render chevron-bar-left as default first-icon when showFirst is true', async () => {
        const el = await fixture<SlPagination>(html`<sl-pagination total="100" .showFirst=${true}></sl-pagination>`);
        const icon = el.shadowRoot!.querySelector('[part~="first-button"] sl-icon');
        expect(icon?.getAttribute('name')).to.equal('chevron-bar-left');
      });

      it('should render chevron-bar-right as default last-icon when showLast is true', async () => {
        const el = await fixture<SlPagination>(html`<sl-pagination total="100" .showLast=${true}></sl-pagination>`);
        const icon = el.shadowRoot!.querySelector('[part~="last-button"] sl-icon');
        expect(icon?.getAttribute('name')).to.equal('chevron-bar-right');
      });
    });

    describe('icon slots — custom content', () => {
      it('should accept custom prev-icon slot content', async () => {
        const el = await fixture<SlPagination>(html`
          <sl-pagination total="100">
            <span slot="prev-icon">Zurück</span>
          </sl-pagination>
        `);
        const slot = el.shadowRoot!.querySelector<HTMLSlotElement>('slot[name="prev-icon"]')!;
        expect(slot.assignedNodes({ flatten: true }).length).to.be.greaterThan(0);
      });

      it('should accept custom next-icon slot content', async () => {
        const el = await fixture<SlPagination>(html`
          <sl-pagination total="100">
            <span slot="next-icon">Weiter</span>
          </sl-pagination>
        `);
        const slot = el.shadowRoot!.querySelector<HTMLSlotElement>('slot[name="next-icon"]')!;
        expect(slot.assignedNodes({ flatten: true }).length).to.be.greaterThan(0);
      });

      it('should accept custom first-icon slot content when showFirst is true', async () => {
        const el = await fixture<SlPagination>(html`
          <sl-pagination total="100" .showFirst=${true}>
            <span slot="first-icon">Erste</span>
          </sl-pagination>
        `);
        const slot = el.shadowRoot!.querySelector<HTMLSlotElement>('slot[name="first-icon"]')!;
        expect(slot.assignedNodes({ flatten: true }).length).to.be.greaterThan(0);
      });

      it('should accept custom last-icon slot content when showLast is true', async () => {
        const el = await fixture<SlPagination>(html`
          <sl-pagination total="100" .showLast=${true}>
            <span slot="last-icon">Letzte</span>
          </sl-pagination>
        `);
        const slot = el.shadowRoot!.querySelector<HTMLSlotElement>('slot[name="last-icon"]')!;
        expect(slot.assignedNodes({ flatten: true }).length).to.be.greaterThan(0);
      });
    });

    describe('prefix and default slots', () => {
      it('should accept content in the prefix slot', async () => {
        const el = await fixture<SlPagination>(html`
          <sl-pagination total="100">
            <span slot="prefix">Seite:</span>
          </sl-pagination>
        `);
        const slot = el.shadowRoot!.querySelector<HTMLSlotElement>('slot[name="prefix"]')!;
        expect(slot.assignedNodes({ flatten: true }).length).to.be.greaterThan(0);
      });

      it('should accept content in the default slot', async () => {
        const el = await fixture<SlPagination>(html`
          <sl-pagination total="100">
            <span>Extra</span>
          </sl-pagination>
        `);
        const slot = el.shadowRoot!.querySelector<HTMLSlotElement>('slot:not([name])')!;
        expect(slot.assignedNodes({ flatten: true }).length).to.be.greaterThan(0);
      });
    });
  });

  // ---------------------------------------------------------------------------
  // Navigation
  // ---------------------------------------------------------------------------
  describe('navigation', () => {
    it('should disable prev-button on the first page', async () => {
      const el = await fixture<SlPagination>(html`<sl-pagination total="100" page-size="10" value="1"></sl-pagination>`);
      const prevButton = el.shadowRoot!.querySelector('[part~="prev-button"]')!;
      expect(prevButton.hasAttribute('disabled')).to.be.true;
    });

    it('should enable prev-button on pages after the first', async () => {
      const el = await fixture<SlPagination>(html`<sl-pagination total="100" page-size="10" value="2"></sl-pagination>`);
      const prevButton = el.shadowRoot!.querySelector('[part~="prev-button"]')!;
      expect(prevButton.hasAttribute('disabled')).to.be.false;
    });

    it('should disable next-button on the last page', async () => {
      const el = await fixture<SlPagination>(html`<sl-pagination total="100" page-size="10" value="10"></sl-pagination>`);
      const nextButton = el.shadowRoot!.querySelector('[part~="next-button"]')!;
      expect(nextButton.hasAttribute('disabled')).to.be.true;
    });

    it('should enable next-button on pages before the last', async () => {
      const el = await fixture<SlPagination>(html`<sl-pagination total="100" page-size="10" value="1"></sl-pagination>`);
      const nextButton = el.shadowRoot!.querySelector('[part~="next-button"]')!;
      expect(nextButton.hasAttribute('disabled')).to.be.false;
    });

    it('should go to the specified page with goToPage()', async () => {
      const el = await fixture<SlPagination>(html`<sl-pagination total="100" page-size="10" value="1"></sl-pagination>`);
      el.goToPage(5);
      await elementUpdated(el);
      expect(el.value).to.equal(5);
    });

    it('should clamp to page 1 when goToPage() receives a value below 1', async () => {
      const el = await fixture<SlPagination>(html`<sl-pagination total="100" page-size="10" value="3"></sl-pagination>`);
      el.goToPage(-5);
      await elementUpdated(el);
      expect(el.value).to.equal(1);
    });

    it('should clamp to the last page when goToPage() receives a value above pageCount', async () => {
      const el = await fixture<SlPagination>(html`<sl-pagination total="100" page-size="10" value="3"></sl-pagination>`);
      el.goToPage(999);
      await elementUpdated(el);
      expect(el.value).to.equal(10);
    });
  });

  // ---------------------------------------------------------------------------
  // Events
  // ---------------------------------------------------------------------------
  describe('events', () => {
    it('should emit sl-page-change with the new page in detail', async () => {
      const el = await fixture<SlPagination>(html`<sl-pagination total="100" page-size="10" value="1"></sl-pagination>`);
      const changeHandler = sinon.spy();
      el.addEventListener('sl-page-change', changeHandler);

      el.goToPage(4);
      await waitUntil(() => changeHandler.calledOnce);

      expect(changeHandler).to.have.been.calledOnce;
      expect(changeHandler.args[0][0].detail.value).to.equal(4);
    });

    it('should emit sl-page-before-change before sl-page-change', async () => {
      const el = await fixture<SlPagination>(html`<sl-pagination total="100" page-size="10" value="1"></sl-pagination>`);
      const order: string[] = [];
      el.addEventListener('sl-page-before-change', () => order.push('before'));
      el.addEventListener('sl-page-change', () => order.push('change'));

      el.goToPage(2);
      await waitUntil(() => order.length === 2);

      expect(order).to.deep.equal(['before', 'change']);
    });

    it('should cancel navigation when sl-page-before-change is preventDefault()ed', async () => {
      const el = await fixture<SlPagination>(html`<sl-pagination total="100" page-size="10" value="1"></sl-pagination>`);
      el.addEventListener('sl-page-before-change', (e: Event) => e.preventDefault());
      const changeHandler = sinon.spy();
      el.addEventListener('sl-page-change', changeHandler);

      el.goToPage(3);
      await elementUpdated(el);

      expect(el.value).to.equal(1);
      expect(changeHandler).not.to.have.been.called;
    });
  });

  // ---------------------------------------------------------------------------
  // Simple mode
  // ---------------------------------------------------------------------------
  describe('simple mode', () => {
    it('should render a page-jump input instead of page buttons', async () => {
      const el = await fixture<SlPagination>(html`<sl-pagination total="100" page-size="10" .simple=${true}></sl-pagination>`);
      expect(el.shadowRoot!.querySelector('[part~="page-jump"]')).to.exist;
      expect(el.shadowRoot!.querySelector('[part~="page-button"]')).to.not.exist;
    });

    it('should render the page span with total pages', async () => {
      const el = await fixture<SlPagination>(html`<sl-pagination total="100" page-size="10" .simple=${true}></sl-pagination>`);
      const pageSpan = el.shadowRoot!.querySelector('[part~="page"]');
      expect(pageSpan).to.exist;
      expect(pageSpan!.textContent).to.include('10');
    });
  });

  // ---------------------------------------------------------------------------
  // Accessibility (WCAG)
  // ---------------------------------------------------------------------------
  describe('accessibility', () => {
    it('should have role="navigation" on the base element', async () => {
      const el = await fixture<SlPagination>(html`<sl-pagination total="100"></sl-pagination>`);
      const base = el.shadowRoot!.querySelector('[part~="base"]')!;
      expect(base.getAttribute('role')).to.equal('navigation');
    });

    it('should have an aria-label on the base element', async () => {
      const el = await fixture<SlPagination>(html`<sl-pagination total="100"></sl-pagination>`);
      const base = el.shadowRoot!.querySelector('[part~="base"]')!;
      expect(base.getAttribute('aria-label')).to.not.be.empty;
    });

    it('should have aria-label on the prev-button', async () => {
      const el = await fixture<SlPagination>(html`<sl-pagination total="100"></sl-pagination>`);
      const btn = el.shadowRoot!.querySelector('[part~="prev-button"]')!;
      expect(btn.getAttribute('aria-label')).to.not.be.empty;
    });

    it('should have aria-label on the next-button', async () => {
      const el = await fixture<SlPagination>(html`<sl-pagination total="100"></sl-pagination>`);
      const btn = el.shadowRoot!.querySelector('[part~="next-button"]')!;
      expect(btn.getAttribute('aria-label')).to.not.be.empty;
    });

    it('should have aria-label on the first-button when showFirst is true', async () => {
      const el = await fixture<SlPagination>(html`<sl-pagination total="100" .showFirst=${true}></sl-pagination>`);
      const btn = el.shadowRoot!.querySelector('[part~="first-button"]')!;
      expect(btn.getAttribute('aria-label')).to.not.be.empty;
    });

    it('should have aria-label on the last-button when showLast is true', async () => {
      const el = await fixture<SlPagination>(html`<sl-pagination total="100" .showLast=${true}></sl-pagination>`);
      const btn = el.shadowRoot!.querySelector('[part~="last-button"]')!;
      expect(btn.getAttribute('aria-label')).to.not.be.empty;
    });

    it('should have aria-label on each page number button', async () => {
      const el = await fixture<SlPagination>(html`<sl-pagination total="100" page-size="10"></sl-pagination>`);
      const pageButtons = el.shadowRoot!.querySelectorAll('[part~="page-button"]');
      pageButtons.forEach(btn => {
        expect(btn.getAttribute('aria-label')).to.not.be.empty;
      });
    });

    it('should set aria-current="page" on the active page button only', async () => {
      const el = await fixture<SlPagination>(html`<sl-pagination total="100" page-size="10" value="4"></sl-pagination>`);
      const activeButtons = el.shadowRoot!.querySelectorAll('[aria-current="page"]');
      expect(activeButtons.length).to.equal(1);
      expect(activeButtons[0].textContent?.trim()).to.equal('4');
    });

    it('should not set aria-current on inactive page buttons', async () => {
      const el = await fixture<SlPagination>(html`<sl-pagination total="100" page-size="10" value="1"></sl-pagination>`);
      const pageButtons = el.shadowRoot!.querySelectorAll('[part~="page-button"]:not([part~="active-page-button"])');
      pageButtons.forEach(btn => {
        expect(btn.hasAttribute('aria-current')).to.be.false;
      });
    });

    it('should have a live region in the shadow DOM', async () => {
      const el = await fixture<SlPagination>(html`<sl-pagination total="100"></sl-pagination>`);
      const liveRegion = el.shadowRoot!.querySelector('[role="status"][aria-live="polite"]');
      expect(liveRegion).to.exist;
    });

    it('should update the live region text when page changes', async () => {
      const el = await fixture<SlPagination>(html`<sl-pagination total="100" page-size="10" value="1"></sl-pagination>`);
      el.goToPage(5);
      await elementUpdated(el);
      const liveRegion = el.shadowRoot!.querySelector('[role="status"]')!;
      expect(liveRegion.textContent).to.not.be.empty;
      expect(liveRegion.textContent).to.include('5');
    });
  });

  // ---------------------------------------------------------------------------
  // Alignment
  // ---------------------------------------------------------------------------
  describe('alignment', () => {
    ['left', 'center', 'right'].forEach(align => {
      it(`should reflect align="${align}" on the base element`, async () => {
        const el = await fixture<SlPagination>(html`<sl-pagination total="100" align="${align}"></sl-pagination>`);
        const base = el.shadowRoot!.querySelector('[part~="base"]')!;
        expect(base.getAttribute('page-align')).to.equal(align);
      });
    });
  });
});
