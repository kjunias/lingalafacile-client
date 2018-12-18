import * as React from 'react';
import * as ReactDOM from 'react-dom';
import LanguageButton from './LanguageButton';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LanguageButton name="MenuIten"/>, div);
});
