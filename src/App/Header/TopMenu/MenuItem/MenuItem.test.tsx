import * as React from 'react';
import * as ReactDOM from 'react-dom';
import MenuItem from './MenuItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MenuItem name="MenuIten"/>, div);
});
