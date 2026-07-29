import { registerTranslation } from '@shoelace-style/localize';
import type { Translation } from '../utilities/localize.js';

const translation: Translation = {
  $code: 'en',
  $name: 'English',
  $dir: 'ltr',

  carousel: 'Carousel',
  clearEntry: 'Clear entry',
  close: 'Close',
  copied: 'Copied',
  copy: 'Copy',
  currentValue: 'Current value',
  error: 'Error',
  goToSlide: (slide, count) => `Go to slide ${slide} of ${count}`,
  hidePassword: 'Hide password',
  loading: 'Loading',
  nextMonth: 'Next month',
  nextSlide: 'Next slide',
  numOptionsSelected: num => {
    if (num === 0) return 'No options selected';
    if (num === 1) return '1 option selected';
    return `${num} options selected`;
  },
  previousMonth: 'Previous month',
  previousSlide: 'Previous slide',
  progress: 'Progress',
  remove: 'Remove',
  resize: 'Resize',
  scrollToEnd: 'Scroll to end',
  scrollToStart: 'Scroll to start',
  selectAColorFromTheScreen: 'Select a color from the screen',
  showPassword: 'Show password',
  slideNum: slide => `Slide ${slide}`,
  toggleColorFormat: 'Toggle color format',

  firstPage: 'First page',
  previousPage: 'Previous page',
  nextPage: 'Next page',
  lastPage: 'Last page',
  pagination: 'Pagination',
  paginationNoData: 'No Data!',
  goToPage: (page, total) => `Page ${page} of ${total}`,
  ofTotalPages: total => `of ${total}`,

  backToTop: 'Back to top'
};

registerTranslation(translation);

export default translation;
