import { registerTranslation } from '../utilities/localize.js';
import type { Translation } from '../utilities/localize.js';

const translation: Translation = {
  $code: 'fr',
  $name: 'Français',
  $dir: 'ltr',

  carousel: 'Carrousel',
  clearEntry: `Effacer l'entrée`,
  close: 'Fermer',
  copied: 'Copié',
  copy: 'Copier',
  currentValue: 'Valeur actuelle',
  error: 'Erreur',
  goToSlide: (slide, count) => `Aller à la diapositive ${slide} de ${count}`,
  hidePassword: 'Masquer le mot de passe',
  loading: 'Chargement',
  nextSlide: 'Diapositive suivante',
  numOptionsSelected: num => {
    if (num === 0) return 'Aucune option sélectionnée';
    if (num === 1) return '1 option sélectionnée';
    return `${num} options sélectionnées`;
  },
  previousSlide: 'Diapositive précédente',
  progress: 'Progrès',
  remove: 'Retirer',
  resize: 'Redimensionner',
  scrollToEnd: `Faire défiler jusqu'à la fin`,
  scrollToStart: `Faire défiler jusqu'au début`,
  selectAColorFromTheScreen: `Sélectionnez une couleur à l'écran`,
  showPassword: 'Montrer le mot de passe',
  slideNum: slide => `Diapositive ${slide}`,
  toggleColorFormat: 'Changer le format de couleur',

  firstPage: 'Première page',
  previousPage: 'Page précédente',
  nextPage: 'Page suivante',
  lastPage: 'Dernière page',
  pagination: 'Pagination',
  paginationNoData: 'Aucune donnée !',
  goToPage: (page, total) => `Page ${page} sur ${total}`,
  ofTotalPages: total => `sur ${total}`,

  backToTop: 'Retour en haut'
};

registerTranslation(translation);

export default translation;
