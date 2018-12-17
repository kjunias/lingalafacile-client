import * as React from 'react';
import './Header.css';
import HamburgerMenu from './HamburgerMenu/HamburgerMenu';
import TopMenu from './TopMenu/TopMenu';

class Header extends React.Component {
    render() {
      return (
        <div className="header">
          <HamburgerMenu />
          <TopMenu />
        </div>
      );
    }
  }  
export default Header;
  