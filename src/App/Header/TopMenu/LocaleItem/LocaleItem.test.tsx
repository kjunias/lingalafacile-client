import * as React from 'react';
import * as ReactDOM from 'react-dom';
import LocaleItem from './LocaleItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LocaleItem />, div);
});
