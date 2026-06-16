const resouce = {
  pageBtn: {
    total: (total: number) => {
      return `${total} Enträge`;
    },
    first: 'Erste Seite',
    last: 'Letzte Seite',
    prev: 'Vorherige Seite',
    next: 'Nächste Seite',
    navigation: 'Seitennavigation',
    page: (page: number, total: number) => `Seite ${page} von ${total}`,
    pageAnnounce: (page: number, total: number) => `Seite ${page} von ${total}`
  },
  transferSelectedFun: (selected: number, filterSize: number, _total: number) => {
    let temp = filterSize > 0 ? ' Einträge' : ' Eintrag';
    return selected > 0 ? selected + '/' + filterSize + temp : filterSize + '' + temp;
  },
  transferSourceTitle: 'Quelle',
  transferTargetTitle: 'Ziel',

  seachTransfer: 'suche....',
  noData: 'keine Daten!',
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
    months: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober ', 'November', 'Dezember'],
    weekDays: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa']
  }
};
export default resouce;
