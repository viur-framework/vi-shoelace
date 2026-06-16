const resouce = {
  pageBtn: {
    total: (total: number) => {
      return `共${total}条记录`;
    },
    first: '第一页',
    last: '最后一页',
    prev: '上一页',
    next: '下一页',
    navigation: '分页',
    page: (page: number, total: number) => `第${page}页，共${total}页`,
    pageAnnounce: (page: number, total: number) => `当前第${page}页，共${total}页`
  },
  transferSelectedFun: (selected: number, filterSize: number, _total: number) => {
    return selected > 0 ? selected + '/' + filterSize + ' 项' : filterSize + ' 项';
  },
  seachTransfer: '请输入搜索内容',
  noData: '没有任何数据',
  date: {
    showHeaderStr: function (date: Date, mode: 'year' | 'month' | 'date') {
      if (mode === 'date') {
        return date.getFullYear() + '年' + String(date.getMonth() + 1).padStart(2, '0') + '月';
      }
      if (mode === 'month') {
        return date.getFullYear() + '年';
      } else {
        const nv = date.getFullYear();
        const n = parseInt(String(nv / 20));
        const year = n * 20;
        return year.toString().padStart(4, '0') + '年-' + (year + 19).toString().padStart(4, '0') + '年';
      }
    },
    months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
    weekDays: ['日', '一', '二', '三', '四', '五', '六']
  }
};
export default resouce;
