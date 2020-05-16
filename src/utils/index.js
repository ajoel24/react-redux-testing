export const findByDataAttr = (component, attr) => {
  return component.find(`[data-test='${attr}']`);
};
