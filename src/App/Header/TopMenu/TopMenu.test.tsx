import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as enzyme from 'enzyme';
import TopMenu from './TopMenu';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TopMenu />, div);
});

it('contains correct MenuItem child elements', () => {
  const topMenu = enzyme.mount(<TopMenu />);

  expect(topMenu.find(".topmenu .menuitem").length).toEqual(4);
  expect(enzyme.shallow(topMenu.find(".topmenu .menuitem").get(0)).text()).toEqual("Sign In");
  expect(enzyme.shallow(topMenu.find(".topmenu .menuitem").get(1)).text()).toEqual("About");
  expect(enzyme.shallow(topMenu.find(".topmenu .menuitem").get(2)).text()).toEqual("Blog");
  expect(enzyme.shallow(topMenu.find(".topmenu .menuitem").get(3)).text()).toEqual("Contribute");
});

it('contains correct LocaleItem child elements', () => {
  const topMenu = enzyme.mount(<TopMenu />);

  expect(topMenu.find(".topmenu .localeitem").length).toEqual(1);
  expect(enzyme.shallow(topMenu.find(".topmenu .localeitem").get(0)).text()).toEqual("");
});
