import * as React from 'react';
import { createComponent } from '@lit/react';
import Component from '../../components/back-to-top/back-to-top.component.js';

const tagName = 'sl-back-to-top';
Component.define('sl-back-to-top');

/**
 * @since 2.0
 * @status experimental
 * @viur 0.5
 *
 * @slot - The default slot. Content must be focusable and keyboard-operable (e.g. a button):
 * clicks are handled on the wrapper via bubbling, there is no separate keyboard fallback for
 * non-interactive slotted content.
 *
 * @csspart wrapper - The component's base wrapper.
 */
const reactWrapper = createComponent({
  tagName,
  elementClass: Component,
  react: React,
  events: {},
  displayName: 'SlBackToTop'
});

export default reactWrapper;
