const resouce = {
  pageBtn: {
    total: (total: number) => {
      return `${total} éléments`;
    },
    first: 'Première page',
    last: 'Dernière page',
    prev: 'Page précédente',
    next: 'Page suivante',
    navigation: 'Pagination',
    page: (page: number, total: number) => `Page ${page} sur ${total}`,
    pageAnnounce: (page: number, total: number) => `Page ${page} sur ${total}`
  },
  transferSelectedFun: (selected: number, filterSize: number, _total: number) => {
    let temp = filterSize > 1 ? ' éléments' : ' élément';
    return selected > 0 ? selected + '/' + filterSize + temp : filterSize + '' + temp;
  },
  transferSourceTitle: 'Source',
  transferTargetTitle: 'Cible',

  seachTransfer: 'rechercher....',
  noData: 'Aucune donnée !',
  date: {
    showHeaderStr: function (date: Date, mode: 'year' | 'month' | 'date') {
      if (mode === 'date') {
        return String(date.getMonth() + 1).padStart(2, '0') + '/' + date.getFullYear();
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
    months: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
    weekDays: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam']
  }
};
export default resouce;
