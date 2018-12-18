import * as React from 'react';
import * as ReactDOM from 'react-dom';
import SwapButton from './SwapButton';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SwapButton />, div);
});
