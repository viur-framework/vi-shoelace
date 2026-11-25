import { expect } from '@open-wc/testing';
import { pageItems } from './pagination.js';

describe('pageItems', () => {
  it('shows every page when they fit', () => {
    expect(pageItems(1, 5, 1, 1)).to.deep.equal([1, 2, 3, 4, 5]);
    expect(pageItems(3, 7, 1, 1)).to.deep.equal([1, 2, 3, 4, 5, 6, 7]);
  });

  it('keeps the window size while moving through the pages', () => {
    expect(pageItems(1, 11, 1, 1)).to.deep.equal([1, 2, 3, 4, 5, 'ellipsis', 11]);
    expect(pageItems(6, 11, 1, 1)).to.deep.equal([1, 'ellipsis', 5, 6, 7, 'ellipsis', 11]);
    expect(pageItems(11, 11, 1, 1)).to.deep.equal([1, 'ellipsis', 7, 8, 9, 10, 11]);
  });

  it('shows a page number instead of an ellipsis for a gap of one page', () => {
    expect(pageItems(4, 8, 1, 1)).to.deep.equal([1, 2, 3, 4, 5, 'ellipsis', 8]);
    expect(pageItems(5, 8, 1, 1)).to.deep.equal([1, 'ellipsis', 4, 5, 6, 7, 8]);
    expect(pageItems(5, 9, 1, 1)).to.deep.equal([1, 'ellipsis', 4, 5, 6, 'ellipsis', 9]);
  });

  it('honours wider boundaries and siblings', () => {
    expect(pageItems(10, 20, 2, 2)).to.deep.equal([1, 2, 'ellipsis', 8, 9, 10, 11, 12, 'ellipsis', 19, 20]);
    expect(pageItems(1, 20, 3, 0)).to.deep.equal([1, 2, 3, 4, 5, 'ellipsis', 18, 19, 20]);
  });

  it('handles the edges', () => {
    expect(pageItems(1, 1, 1, 1)).to.deep.equal([1]);
    expect(pageItems(1, 0, 1, 1)).to.deep.equal([]);
    expect(pageItems(2, 2, 1, 1)).to.deep.equal([1, 2]);
  });
});
