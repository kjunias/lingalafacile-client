import * as React from 'react';
import './HamburgerMenu.css';
import imgSrc from './images/ham_menu.png';

class HamburgerMenu extends React.Component {
  public  render() {
    return (
      <div className="hamburgermenu">
          <img src={imgSrc} />
      </div>
    );
  }
}
export default HamburgerMenu;