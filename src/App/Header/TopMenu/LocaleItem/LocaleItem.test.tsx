import * as React from 'react';
import * as enzyme from 'enzyme';
import LocaleItem from './LocaleItem';
import imgSrc from './images/locale.png';

it('renders without crashing', () => {
  const localeItem = enzyme.shallow(<LocaleItem />);
  expect(localeItem.find(".localeitem img").prop("src")).toEqual(imgSrc);
});
