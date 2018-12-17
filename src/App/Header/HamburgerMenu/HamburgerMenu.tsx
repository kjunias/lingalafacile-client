import * as React from 'react';
import './HamburgerMenu.css';
var imgSrc = require('./images/ham_menu.png');

class HamburgerMenu extends React.Component {
    render() {
      return (
        <div className="hamburgermenu">
            <img src={imgSrc} />
        </div>
      );
    }
  }  
export default HamburgerMenu;