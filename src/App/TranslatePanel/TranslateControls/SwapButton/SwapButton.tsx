import * as React from 'react';
import './SwapButton.css';
import imgSrc from './images/swap_btn_icon2.png';

class SwapButton extends React.Component {
  public render() {
    return (
      <button className="lang-button swap-button" type="button">
        <img src={imgSrc} />
      </button>
    );
  }
}
export default SwapButton;