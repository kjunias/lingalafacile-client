import * as React from 'react';
import './LocaleItem.css';
import imgSrc from './images/locale.png';

class LocaleItem extends React.Component {
  public render() {
    return (
      <div className="localeitem">
        <img src={imgSrc} />
      </div>
    );
  }
}
export default LocaleItem;