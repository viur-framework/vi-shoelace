import { html } from 'lit';
import {customElement, property, query} from 'lit/decorators.js';
import styles from './back-to-top.styles.js';
import ShoelaceElement from '../../internal/shoelace-element.js';

/**
 * @since 2.0
 * @status experimental
 * @viur 0.5
 *
 * @slot - The default slot.
 *
 * @csspart wrapper - The component's base wrapper.
 */
@customElement('sl-back-to-top')
export default class SlBackToTop extends ShoelaceElement {
  static styles = styles;
  targetElement:any;
  @query('.back-to-top-wrapper') wrapper: HTMLElement;

  private scrollTarget: EventTarget | null = null;
  private handleScroll = (e: Event) => this.scolling(e);

  /** selector for scroll target */
  @property() target = "html";

  scrollToTop(){
    if (this.target == "html"){
      document.getElementsByTagName("html")[0].scrollTo({ top: 0, behavior: 'smooth' })
    }else{
      this.targetElement.scrollTo({ top: 0, behavior: 'smooth' });
    }


  }

  scolling(e:any){
    if (this.target == "html") {
      this.classList.toggle("scrolled", 1.5 * document.getElementsByTagName("html")[0].scrollTop > document.getElementsByTagName("html")[0].clientHeight )
    }else{
      this.classList.toggle("scrolled", 1.5 * e.target.scrollTop > e.target.clientHeight )
    }
  }

  initSlot(){
    this.scrollTarget?.removeEventListener("scroll", this.handleScroll);

    if (this.target == "html"){
      this.scrollTarget = document;
    }else{
      this.targetElement = document.querySelector(this.target)
      this.scrollTarget = this.targetElement;
    }

    this.scrollTarget?.addEventListener("scroll", this.handleScroll);
  }

  firstUpdated() {
    this.initSlot()
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.scrollTarget?.removeEventListener("scroll", this.handleScroll);
    this.scrollTarget = null;
  }

  render() {
    return html`<div part="wrapper" class="back-to-top-wrapper" @click="${this.scrollToTop}">
        <slot @slotchange=${this.initSlot}>
          <sl-button circle><sl-icon name="arrow-up"></sl-icon></sl-button>
        </slot>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sl-back-to-top': SlBackToTop;
  }
}
