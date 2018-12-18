import * as React from 'react';
import './SwapButton.css';
var imgSrc = require('./images/swap_btn_icon2.png');

class SwapButton extends React.Component {
    render() {
      return (
        <button className="lang-button swap-button">
            <img src={imgSrc} />
        </button>
      );
    }
  }  
export default SwapButton;