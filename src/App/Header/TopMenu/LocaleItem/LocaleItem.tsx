import * as React from 'react';
import './LocaleItem.css';
import locale from './images/locale.png';

class LocaleItem extends React.Component {
  public render() {
    return (
      <div className="localeitem">
        <img src={locale} />
      </div>
    );
  }
}
export default LocaleItem;