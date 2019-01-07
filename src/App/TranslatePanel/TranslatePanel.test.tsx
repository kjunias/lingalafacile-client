import * as React from 'react';
import * as ReactDOM from 'react-dom';
import TranslatePanel from './TranslatePanel';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const handleSubmit = () =>
  ReactDOM.render(<TranslatePanel fromLanguage="English" toLanguage="Lingala" fromText="Test" getTranslation={handleSubmit}/>, div);
});
