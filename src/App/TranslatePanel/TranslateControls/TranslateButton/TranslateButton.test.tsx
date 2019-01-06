import * as React from 'react';
import * as ReactDOM from 'react-dom';
import TranslateButton from './TranslateButton';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const submitTranslate = () => {
    print();
  };

  ReactDOM.render(<TranslateButton submitTranslate={submitTranslate}/>, div);
});
