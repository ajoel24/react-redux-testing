import React from 'react';
import { shallow } from 'enzyme';
import Headline from '../../components/Headline/Headline';
import { findByDataAttr, checkProps } from '../../utils/index';

const setup = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe('Headline component', () => {
  describe('PropTypes', () => {
    it('Should not throw warnings', () => {
      const expectedProps = {
        title: 'hello',
        desc: 'hello',
        temp: {
          name: 'Andrew Joel',
          age: 20,
          isOnline: true,
        },
        likes: [
          {
            music: 'Billie Jean',
            number: 1,
          },
        ],
      };

      const propsErr = checkProps(Headline, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });
  describe('Have props', () => {
    let wrapper;

    beforeEach(() => {
      const props = {
        title: 'Test header',
        desc: 'Test desc',
      };
      wrapper = setup(props);
    });

    it('Should render without errors', () => {
      const component = findByDataAttr(wrapper, 'headline');
      expect(component.length).toBe(1);
    });

    it('Should render a title', () => {
      const postTitle = findByDataAttr(wrapper, 'title');
      expect(postTitle.contains('Test header')).toBe(true);
    });

    it('Should render a description', () => {
      const descPara = findByDataAttr(wrapper, 'desc');
      expect(descPara.contains('Test desc')).toBe(true);
    });
  });

  describe('Have no props', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = setup();
    });

    it('Should not render component', () => {
      const component = findByDataAttr(wrapper, 'headline');
      expect(component.length).not.toBe(1);
    });

    it('Should not render title', () => {
      const postTitle = findByDataAttr(wrapper, 'title');
      expect(postTitle.length).not.toBe(1);
    });

    it('Should not render desc', () => {
      const descPara = findByDataAttr(wrapper, 'desc');
      expect(descPara.length).not.toBe(1);
    });
  });
});
