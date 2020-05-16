import React from 'react';
import { shallow } from 'enzyme';
import { findByDataAttr } from '../../utils/index';
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

  it('Should render header', () => {
    const headerWrapper = findByDataAttr(component, 'header');
    expect(headerWrapper.length).toBe(1);
  });

  it('Should render one nav', () => {
    // console.log(component.debug());
    const navWrapper = findByDataAttr(component, 'container');
    expect(navWrapper.length).toBe(1);
  });

  it('Should have one logo div', () => {
    const logoWrapper = findByDataAttr(component, 'logo');
    expect(logoWrapper.length).toBe(1);
  });

  it('Should contain logo text', () => {
    const logoWrapper = findByDataAttr(component, 'logo');
    expect(logoWrapper.contains('Testing!')).toBe(true);
  });
});
