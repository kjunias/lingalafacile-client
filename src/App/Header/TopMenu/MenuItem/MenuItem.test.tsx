import * as React from 'react';
import * as enzyme from 'enzyme';
import MenuItem from './MenuItem';

it('renders without crashing', () => {
  const itemText = "Sign In";
  const menuItem = enzyme.shallow(<MenuItem name={itemText}/>);
  expect(menuItem.find(".menuitem").text()).toEqual(itemText);
});
