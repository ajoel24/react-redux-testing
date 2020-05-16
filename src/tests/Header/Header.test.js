import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header/Header';

describe('Header Component', () => {
  it('Should render without errors', () => {
    const component = shallow(<Header />);
    // console.log(component.debug());
    const navWrapper = component.find('nav.container');
    expect(navWrapper.length).toBe(1);
  });

  it('Should have one logo div', () => {
    const component = shallow(<Header />);
    const logoWrapper = component.find('div.logo');
    expect(logoWrapper.length).toBe(1);
  });
});
