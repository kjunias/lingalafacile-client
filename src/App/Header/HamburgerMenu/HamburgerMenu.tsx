import * as React from 'react';
import './HamburgerMenu.css';
import ham_menu from './images/ham_menu.png';

class HamburgerMenu extends React.Component {
  public  render() {
    return (
      <div className="hamburgermenu">
          <img src={ham_menu} />
      </div>
    );
  }
}
export default HamburgerMenu;