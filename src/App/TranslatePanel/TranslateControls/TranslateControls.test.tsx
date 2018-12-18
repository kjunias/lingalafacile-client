import * as React from 'react';
import * as ReactDOM from 'react-dom';
import TranslateControls from './TranslateControls';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TranslateControls />, div);
});
