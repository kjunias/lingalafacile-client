import * as React from 'react';
import './TranslateButton.css';

class TranslateButton extends React.Component {
  public render() {
    return (
      <button className="lang-button translate" type="submit">
        Translate
      </button>
    );
  }
}
export default TranslateButton;