import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: block;
  }
  .output-wrapper{
  border: 1px solid #ccc;
  }
`;
