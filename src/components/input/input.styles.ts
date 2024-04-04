import { css } from 'lit';

export default css`
  :host {
    display: block;
    --font-size: var(--sl-input-font-size-medium);
    --font-family: var(--sl-input-font-family);
    --font-weight: var(--sl-input-font-weight);
    --letter-spacing: var(--sl-input-letter-spacing);
    --transition: var(--sl-transition-fast) color,
                  var(--sl-transition-fast) border,
                  var(--sl-transition-fast) box-shadow,
                  var(--sl-transition-fast) background-color;
    --background: var(--sl-input-background-color);
    --color: var(--sl-input-color);
    --caret-color: var(--sl-input-color);
    --placeholder-color: var(--sl-input-placeholder-color);
    --icon-color: var(--sl-input-icon-color);
    --border-width: var(--sl-input-border-width);
    --border-style: solid;
    --border-color: var(--sl-input-border-color);
    --border-radius: 0;
    --box-shadow: none;
    --box-shadow-inset: none;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-size: var(--font-size);
    font-family: var(--font-family);
    font-weight: var(--font-weight);
    letter-spacing: var(--letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition: var(--transition);
    background: var(--background);
    border-width: var(--border-width);
    border-style: var(--border-style);
    border-color: var(--border-color);
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
  }

  /* Standard inputs */
  .input--standard {
    --background: var(--sl-input-background-color);
    --border-width: var(--sl-input-border-width);
    --border-style: solid;
    --border-color: var(--sl-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    --background: var(--sl-input-background-color-hover);
    --border-color: var(--sl-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    --background: var(--sl-input-background-color-focus);
    --border-color: var(--sl-input-border-color-focus);
    --box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    --color: var(--sl-input-color-focus);
  }

  .input--standard.input--disabled {
    --background: var(--sl-input-background-color-disabled);
    --border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    --color: var(--sl-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    --color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    --border-style: none;
    --background: var(--sl-input-filled-background-color);
    --color: var(--sl-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    --background: var(--sl-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    --background: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .input--filled.input--disabled {
    --background: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--color);
    border: none;
    background: inherit;
    box-shadow: var(--box-shadow-inset);
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    --box-shadow-inset: 0 0 0 var(--sl-input-height-large) var(--sl-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--sl-color-primary-500);
    caret-color: var(--caret-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    --box-shadow-inset: 0 0 0 var(--sl-input-height-large) var(--sl-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    --color: var(--sl-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix ::slotted(sl-icon),
  .input__suffix ::slotted(sl-icon) {
    color: var(--icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    --border-radius: var(--sl-input-border-radius-small);
    --font-size: var(--sl-input-font-size-small);
    height: var(--sl-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-small) * 2);
  }

  .input--small .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .input--medium {
    --border-radius: var(--sl-input-border-radius-medium);
    --font-size: var(--sl-input-font-size-medium);
    height: var(--sl-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .input--large {
    --border-radius: var(--sl-input-border-radius-large);
    --font-size: var(--sl-input-font-size-large);
    height: var(--sl-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-large) * 2);
  }

  .input--large .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    --border-radius: var(--sl-input-height-small);
  }

  .input--pill.input--medium {
    --border-radius: var(--sl-input-height-medium);
  }

  .input--pill.input--large {
    --border-radius: var(--sl-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear,
  .input__password-toggle {
    --color: var(--sl-input-icon-color);
    --transition: var(--sl-transition-fast) color;
    --font-size: inherit;
    --background: none;
    --border-style: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    --color: var(--sl-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  :host(.sl-button-group__button--last:not(.sl-button-group__button--first)) .input {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  :host(.sl-button-group__button--first:not(.sl-button-group__button--last)) .input {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host(.sl-button-group__button--inner) .input {
    --border-radius: 0;
  }

`;
