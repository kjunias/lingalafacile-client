import * as React from 'react';
import * as ReactDOM from 'react-dom';
import SearchArea from './SearchArea';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const onTextChange = () => print()
  ReactDOM.render(<SearchArea searchText="test" searchResult="test" onSearchTextChange={onTextChange}/>, div);
});
