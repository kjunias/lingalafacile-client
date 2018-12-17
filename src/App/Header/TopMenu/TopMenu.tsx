import * as React from 'react';
import './TopMenu.css';
import MenuItem from './MenuItem/MenuItem';
import LocaleItem from './LocaleItem/LocaleItem';

class TopMenu extends React.Component {
    render() {
      return (
        <div className="topmenu">
          <LocaleItem/>
          <MenuItem name="Sign In"/>
          <MenuItem name="About"/>
          <MenuItem name="Blog"/>
          <MenuItem name="Contribute"/>
        </div>
      );
    }
  }  
export default TopMenu;
  