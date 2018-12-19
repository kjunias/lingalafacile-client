import * as React from 'react';
import './TranslateButton.css';

class TranslateButton extends React.Component <object> {

  constructor (props: object) {
    super(props);
    this.state = { isActive: false };
  }

  render() {
    return (
      <button className="lang-button translate" type="submit">
        Translate
      </button>
    );
  }
}  
export default TranslateButton;