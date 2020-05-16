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

  const findByDataAttr = (component, attr) => {
    return component.find(`[data-test='${attr}']`);
  };

  it('Should render without errors', () => {
    // console.log(component.debug());
    const navWrapper = findByDataAttr(component, 'container');
    expect(navWrapper.length).toBe(1);
  });

  it('Should have one logo div', () => {
    const logoWrapper = findByDataAttr(component, 'logo');
    expect(logoWrapper.length).toBe(1);
  });
});
