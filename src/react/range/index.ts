import * as React from 'react';
import { createComponent } from '@lit/react';
import Component from '../../components/range/range.component.js';

import { type EventName } from '@lit/react';
import type { SlBlurEvent } from '../../events/events.js';
import type { SlChangeEvent } from '../../events/events.js';
import type { SlFocusEvent } from '../../events/events.js';
import type { SlInputEvent } from '../../events/events.js';
import type { SlInvalidEvent } from '../../events/events.js';
export type { SlBlurEvent } from '../../events/events.js';
export type { SlChangeEvent } from '../../events/events.js';
export type { SlFocusEvent } from '../../events/events.js';
export type { SlInputEvent } from '../../events/events.js';
export type { SlInvalidEvent } from '../../events/events.js';

const tagName = 'sl-range';
Component.define('sl-range');

/**
 * @summary Ranges allow the user to select a single value within a given range using a slider.
 * @documentation https://shoelace.style/components/range
 * @status stable
 * @since 2.0
 *
 * @slot label - The range's label. Alternatively, you can use the `label` attribute.
 * @slot help-text - Text that describes how to use the input. Alternatively, you can use the `help-text` attribute.
 *
 * @event sl-blur - Emitted when the control loses focus.
 * @event sl-change - Emitted when an alteration to the control's value is committed by the user.
 * @event sl-focus - Emitted when the control gains focus.
 * @event sl-input - Emitted when the control receives input.
 * @event sl-invalid - Emitted when the form control has been checked for validity and its constraints aren't satisfied.
 *
 * @csspart form-control - The form control that wraps the label, input, and help text.
 * @csspart form-control-label - The label's wrapper.
 * @csspart form-control-input - The range's wrapper.
 * @csspart form-control-help-text - The help text's wrapper.
 * @csspart base - The component's base wrapper.
 * @csspart input - The internal `<input>` element.
 * @csspart tooltip - The range's tooltip.
 *
 * @cssproperty --thumb-size - The size of the thumb.
 * @cssproperty --tooltip-offset - The vertical distance the tooltip is offset from the track.
 * @cssproperty --track-color-active - The color of the portion of the track that represents the current value.
 * @cssproperty --track-color-inactive - The of the portion of the track that represents the remaining value.
 * @cssproperty --track-height - The height of the track.
 * @cssproperty --track-active-offset - The point of origin of the active track.
 */
const reactWrapper = createComponent({
  tagName,
  elementClass: Component,
  react: React,
  events: {
    onSlBlur: 'sl-blur' as EventName<SlBlurEvent>,
    onSlChange: 'sl-change' as EventName<SlChangeEvent>,
    onSlFocus: 'sl-focus' as EventName<SlFocusEvent>,
    onSlInput: 'sl-input' as EventName<SlInputEvent>,
    onSlInvalid: 'sl-invalid' as EventName<SlInvalidEvent>
  },
  displayName: 'SlRange'
});

export default reactWrapper;
