import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as enzyme from 'enzyme';
import Header from './Header';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header />, div);
});

it('contains correct child elements', () => {
  const header = enzyme.mount(<Header />);

  expect(header.find(".header .hamburgermenu").length).toEqual(1);
  expect(header.find(".header .topmenu").length).toEqual(1);
});
