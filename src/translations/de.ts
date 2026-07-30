import { registerTranslation } from '../utilities/localize.js';
import type { Translation } from '../utilities/localize.js';

const translation: Translation = {
  $code: 'de',
  $name: 'Deutsch',
  $dir: 'ltr',

  carousel: 'Karussell',
  clearEntry: 'Eingabe löschen',
  close: 'Schließen',
  copied: 'Kopiert',
  copy: 'Kopieren',
  currentValue: 'Aktueller Wert',
  error: 'Fehler',
  goToSlide: (slide, count) => `Zu Folie ${slide} von ${count} gehen`,
  hidePassword: 'Passwort verbergen',
  loading: 'Wird geladen',
  nextSlide: 'Nächste Folie',
  numOptionsSelected: num => {
    if (num === 0) return 'Keine Optionen ausgewählt';
    if (num === 1) return '1 Option ausgewählt';
    return `${num} Optionen ausgewählt`;
  },
  previousSlide: 'Vorherige Folie',
  progress: 'Fortschritt',
  remove: 'Entfernen',
  resize: 'Größe ändern',
  scrollToEnd: 'Zum Ende scrollen',
  scrollToStart: 'Zum Anfang scrollen',
  selectAColorFromTheScreen: 'Farbe vom Bildschirm auswählen',
  showPassword: 'Passwort anzeigen',
  slideNum: slide => `Folie ${slide}`,
  toggleColorFormat: 'Farbformat umschalten',

  firstPage: 'Erste Seite',
  previousPage: 'Vorherige Seite',
  nextPage: 'Nächste Seite',
  lastPage: 'Letzte Seite',
  pagination: 'Seitennavigation',
  paginationNoData: 'Keine Daten!',
  goToPage: (page, total) => `Seite ${page} von ${total}`,
  ofTotalPages: total => `von ${total}`,

  backToTop: 'Nach oben',

  comboboxSuggestionsAvailable: count => (count === 1 ? '1 Vorschlag verfügbar' : `${count} Vorschläge verfügbar`)
};

registerTranslation(translation);

export default translation;
