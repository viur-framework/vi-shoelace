import {
  getIconLibrary,
  unwatchIcon,
  watchIcon
} from "./chunk.HR6PXJB3.js";
import {
  requestIcon
} from "./chunk.ARRH633M.js";
import {
  icon_styles_default
} from "./chunk.YUTGEP6Q.js";
import {
  watch
} from "./chunk.BD26TKS4.js";
import {
  emit
} from "./chunk.53VVVNUW.js";
import {
  __decorateClass
} from "./chunk.G5Q3RJKK.js";

// src/components/icon/icon.ts
import { LitElement, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { unsafeSVG } from "lit/directives/unsafe-svg.js";
var parser = new DOMParser();
var SlIcon = class extends LitElement {
  constructor() {
    super(...arguments);
    this.svg = "";
    this.library = "default";
  }
  connectedCallback() {
    super.connectedCallback();
    watchIcon(this);
  }
  firstUpdated() {
    this.setIcon();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    unwatchIcon(this);
  }
  getLabel() {
    let label = "";
    if (this.label) {
      label = this.label;
    } else if (this.name) {
      label = this.name.replace(/-/g, " ");
    } else if (this.src) {
      label = this.src.replace(/.*\//, "").replace(/-/g, " ").replace(/\.svg/i, "");
    }
    return label;
  }
  getUrl() {
    const library = getIconLibrary(this.library);
    if (this.name && library) {
      return library.resolver(this.name);
    } else {
      return this.src;
    }
  }
  redraw() {
    this.setIcon();
  }
  async setIcon() {
    const library = getIconLibrary(this.library);
    const url = this.getUrl();
    if (url) {
      try {
        const file = await requestIcon(url);
        if (url !== this.getUrl()) {
          return;
        } else if (file.ok) {
          const doc = parser.parseFromString(file.svg, "text/html");
          const svgEl = doc.body.querySelector("svg");
          if (svgEl) {
            if (library && library.mutator) {
              library.mutator(svgEl);
            }
            this.svg = svgEl.outerHTML;
            emit(this, "sl-load");
          } else {
            this.svg = "";
            emit(this, "sl-error", { detail: { status: file.status } });
          }
        } else {
          this.svg = "";
          emit(this, "sl-error", { detail: { status: file.status } });
        }
      } catch (e) {
        emit(this, "sl-error", { detail: { status: -1 } });
      }
    } else if (this.svg) {
      this.svg = "";
    }
  }
  handleChange() {
    this.setIcon();
  }
  render() {
    return html` <div part="base" class="icon" role="img" aria-label=${this.getLabel()}>${unsafeSVG(this.svg)}</div>`;
  }
};
SlIcon.styles = icon_styles_default;
__decorateClass([
  state()
], SlIcon.prototype, "svg", 2);
__decorateClass([
  property()
], SlIcon.prototype, "name", 2);
__decorateClass([
  property()
], SlIcon.prototype, "src", 2);
__decorateClass([
  property()
], SlIcon.prototype, "label", 2);
__decorateClass([
  property()
], SlIcon.prototype, "library", 2);
__decorateClass([
  watch("name"),
  watch("src"),
  watch("library")
], SlIcon.prototype, "setIcon", 1);
SlIcon = __decorateClass([
  customElement("sl-icon")
], SlIcon);

export {
  SlIcon
};
