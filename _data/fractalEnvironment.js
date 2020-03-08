// Pass the fractal environment, components
let localComponents = global.fractal.components.toJSON().items;

module.exports = {
  fractal: global.fractal,
  localComponents: localComponents
};
