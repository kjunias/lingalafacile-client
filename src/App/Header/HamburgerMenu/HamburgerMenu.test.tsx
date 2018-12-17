import * as React from 'react';
import * as ReactDOM from 'react-dom';
import HamburgerMenu from './HamburgerMenu';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HamburgerMenu />, div);
});
