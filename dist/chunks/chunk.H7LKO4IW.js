import {
  focusVisibleSelector
} from "./chunk.Y5UMS2H6.js";
import {
  component_styles_default
} from "./chunk.L3YJYC74.js";

// src/components/tab/tab.styles.ts
import { css } from "lit";
var tab_styles_default = css`
  ${component_styles_default}

  :host {
    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    border-radius: var(--sl-border-radius-medium);
    color: rgb(var(--sl-color-neutral-600));
    padding: var(--sl-spacing-medium) var(--sl-spacing-large);
    white-space: nowrap;
    user-select: none;
    cursor: pointer;
    transition: var(--transition-speed) box-shadow, var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: rgb(var(--sl-color-primary-600));
  }

  .tab:focus {
    outline: none;
  }

  .tab${focusVisibleSelector}:not(.tab--disabled) {
    color: rgb(var(--sl-color-primary-600));
    box-shadow: inset var(--sl-focus-ring);
  }

  .tab.tab--active:not(.tab--disabled) {
    color: rgb(var(--sl-color-primary-600));
  }

  .tab.tab--closable {
    padding-right: var(--sl-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--sl-font-size-large);
    margin-left: var(--sl-spacing-2x-small);
  }

  .tab__close-button::part(base) {
    padding: var(--sl-spacing-3x-small);
  }
`;

export {
  tab_styles_default
};
