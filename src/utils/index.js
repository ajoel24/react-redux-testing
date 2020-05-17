import { checkPropTypes } from 'prop-types';

export const findByDataAttr = (component, attr) => {
  return component.find(`[data-test='${attr}']`);
};

export const checkProps = (component, expectedProps) => {
  return checkPropTypes(
    component.propTypes,
    expectedProps,
    'props',
    component.name
  );
};
