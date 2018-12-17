import * as React from 'react';
import './LocaleItem.css';
var imgSrc = require('./images/locale.png');

class LocaleItem extends React.Component {
    render() {
      return (
        <div className="localeitem">
            <img src={imgSrc} />
        </div>
      );
    }
  }  
export default LocaleItem;