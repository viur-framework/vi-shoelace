const resouce = {
  pageBtn: {
    total: (total: number) => {
      return `${total} items`;
    },
    first: 'First page',
    last: 'Last page',
    prev: 'Previous page',
    next: 'Next page',
    navigation: 'Pagination',
    page: (page: number, total: number) => `Page ${page} of ${total}`,
    pageAnnounce: (page: number, total: number) => `Page ${page} of ${total}`
  },
  transferSelectedFun: (selected: number, filterSize: number, _total: number) => {
    let temp = filterSize > 0 ? ' items' : ' item';
    return selected > 0 ? selected + '/' + filterSize + temp : filterSize + '' + temp;
  },
  transferSourceTitle: 'source',
  transferTargetTitle: 'target',

  seachTransfer: 'search....',
  noData: 'No Data!',
  date: {
    showHeaderStr: function (date: Date, mode: 'year' | 'month' | 'date') {
      if (mode === 'date') {
        return date.getFullYear() + '-' + String(date.getMonth() + 1).padStart(2, '0') + '';
      }
      if (mode === 'month') {
        return date.getFullYear() + '';
      } else {
        const nv = date.getFullYear();
        const n = parseInt(String(nv / 20));
        const year = n * 20;
        return year.toString().padStart(4, '0') + ' - ' + (year + 19).toString().padStart(4, '0') + '';
      }
    },
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October ', 'November', 'December'],
    weekDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sta']
  }
};
export default resouce;
