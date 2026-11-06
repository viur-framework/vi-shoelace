export type PageItem = number | 'ellipsis';

/**
 * The page numbers a pager shows for the current page: the first and last `boundaryCount`
 * pages, the current page with `siblingCount` neighbours on each side, and an ellipsis for
 * every gap wider than one page. The window keeps its size towards the edges, so moving
 * through the pages never changes the number of items (the MUI pagination rule).
 */
export function pageItems(page: number, count: number, boundaryCount: number, siblingCount: number): PageItem[] {
  if (count < 1) {
    return [];
  }
  const range = (start: number, end: number) =>
    Array.from({ length: Math.max(end - start + 1, 0) }, (_, i) => start + i);
  const startPages = range(1, Math.min(boundaryCount, count));
  const endPages = range(Math.max(count - boundaryCount + 1, boundaryCount + 1), count);
  const siblingsStart = Math.max(
    Math.min(page - siblingCount, count - boundaryCount - siblingCount * 2 - 1),
    boundaryCount + 2
  );
  const siblingsEnd = Math.min(
    Math.max(page + siblingCount, boundaryCount + siblingCount * 2 + 2),
    count - boundaryCount - 1
  );
  const items: PageItem[] = [...startPages];
  if (siblingsStart > boundaryCount + 2) {
    items.push('ellipsis');
  } else if (boundaryCount + 1 < count - boundaryCount) {
    items.push(boundaryCount + 1);
  }
  items.push(...range(siblingsStart, siblingsEnd));
  if (siblingsEnd < count - boundaryCount - 1) {
    items.push('ellipsis');
  } else if (count - boundaryCount > boundaryCount) {
    items.push(count - boundaryCount);
  }
  items.push(...endPages);
  return items;
}
