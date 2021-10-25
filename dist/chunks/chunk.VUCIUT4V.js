import {
  component_styles_default
} from "./chunk.L3YJYC74.js";

// src/components/ripple/ripple.styles.ts
import { css as css2 } from "lit";

// src/components/ripple/index.litcss
import { css } from "lit";
var styles = css`:host{position:relative;display:inline-flex;align-items:center;outline:0;user-select:none}:host(:not([unbounded])){overflow:hidden}:host([overlay]){position:absolute;top:50%;left:50%;width:100%;height:100%;transform:translate(-50%,-50%)}.ripple{background:var(--ripple-color,currentcolor);opacity:var(--ripple-opacity,0.15);border-radius:100%;pointer-events:none;will-change:opacity,transform}`;
var ripple_default = styles;

// src/components/ripple/ripple.styles.ts
var ripple_styles_default = css2`
  ${component_styles_default}
  ${ripple_default}
`;

export {
  ripple_styles_default
};
