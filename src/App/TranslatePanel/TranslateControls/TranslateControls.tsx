import * as React from 'react';
import './TranslateControls.css';
import LanguageButton from './LanguageButton/LanguageButton';
import SwapButton from './SwapButton/SwapButton';

class TranslateControls extends React.Component {
    render() {
      return (
        <div className="translate-controls">
          <div className="left">
            <LanguageButton  name="Lingala"/>
            <LanguageButton  name="English"/>
            <LanguageButton  name="Fancais"/>
          </div>
          <div className="center">
            <SwapButton />
            <LanguageButton  name="Translate" className="translate"/>
          </div>
          <div className="right">
            <LanguageButton  name="Lingala"/>
            <LanguageButton  name="English"/>
            <LanguageButton  name="Fancais"/>
          </div>
        </div>
      );
    }
  }
export default TranslateControls;
  