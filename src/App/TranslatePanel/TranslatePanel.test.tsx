import * as React from 'react';
import * as ReactDOM from 'react-dom';
import TranslatePanel from './TranslatePanel';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const handleSubmit = (translatedText: string) =>
  ReactDOM.render(<TranslatePanel translateToTextChange={handleSubmit}/>, div);
});
