import * as React from 'react';
import * as ReactDOM from 'react-dom';
import TranslatePanel from './TranslatePanel';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TranslatePanel />, div);
});
