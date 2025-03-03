import * as React from 'react';
import { createComponent } from '@lit/react';
import Component from '../../components/option/option.component.js';

const tagName = 'sl-option';
Component.define('sl-option');

/**
 * @summary Options define the selectable items within various form controls such as [select](/components/select).
 * @documentation https://shoelace.style/components/option
 * @status stable
 * @since 2.0
 *
 * @dependency sl-icon
 *
 * @slot - The option's label.
 * @slot prefix - Used to prepend an icon or similar element to the menu item.
 * @slot suffix - Used to append an icon or similar element to the menu item.
 *
 * @csspart checked-icon - The checked icon, an `<sl-icon>` element.
 * @csspart base - The component's base wrapper.
 * @csspart label - The option's label.
 * @csspart prefix - The container that wraps the prefix.
 * @csspart suffix - The container that wraps the suffix.
 */
const reactWrapper = createComponent({
  tagName,
  elementClass: Component,
  react: React,
  events: {},
  displayName: 'SlOption'
});

export default reactWrapper;
