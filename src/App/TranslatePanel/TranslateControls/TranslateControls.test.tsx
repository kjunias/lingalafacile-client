import * as React from 'react';
import * as ReactDOM from 'react-dom';
import TranslateControls from './TranslateControls';

it('renders without crashing', () => {
  const div = document.createElement('div');

  const changeTranslateFromLanguage = (lang: string) => {
    return lang.toString();
  };

  const changeTranslateToLanguage = (lang: string) => {
    return lang.toString();
  };

  const submitTranslate = (text: string) => {
    return text.toString();
  };

  ReactDOM.render(<TranslateControls from={{ active: "test" }} to={{ active: "test" }} changeTranslateFromLanguage={changeTranslateFromLanguage} changeTranslateToLanguage={changeTranslateToLanguage} submitTranslate={submitTranslate}/>, div);
});