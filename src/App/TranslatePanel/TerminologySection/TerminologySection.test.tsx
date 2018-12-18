import * as React from 'react';
import * as ReactDOM from 'react-dom';
import TerminologySection from './TerminologySection';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TerminologySection />, div);
});
