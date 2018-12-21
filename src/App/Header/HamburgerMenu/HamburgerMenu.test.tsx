import * as React from 'react';
import * as enzyme from 'enzyme';
import HamburgerMenu from './HamburgerMenu';
import imgSrc from './images/ham_menu.png';

it('renders without crashing', () => {
  const hamMenu = enzyme.shallow(<HamburgerMenu />);
  expect(hamMenu.find(".hamburgermenu img").prop("src")).toEqual(imgSrc);
});
