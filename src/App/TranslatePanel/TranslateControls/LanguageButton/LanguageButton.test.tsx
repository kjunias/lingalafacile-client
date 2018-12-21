import * as React from 'react';
import * as ReactDOM from 'react-dom';
import LanguageButton from './LanguageButton';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const active = () => {
    print();
  };

  ReactDOM.render(<LanguageButton name="MenuIten" active="Lingala" setActive={active} />, div);
});
