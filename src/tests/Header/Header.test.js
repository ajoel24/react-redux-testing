import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header/Header';

const setup = (props) => {
  const component = shallow(<Header {...props} />);
  return component;
};

describe('Header Component', () => {
  let component;

  // Runs before each test
  beforeEach(() => {
    component = setup();
  });

  it('Should render without errors', () => {
    // console.log(component.debug());
    const navWrapper = component.find('nav.container');
    expect(navWrapper.length).toBe(1);
  });

  it('Should have one logo div', () => {
    const logoWrapper = component.find('div.logo');
    expect(logoWrapper.length).toBe(1);
  });
});
