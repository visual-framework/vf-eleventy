
// A port-fork of the Fractal render extension for Nunjucks for 11ty
// Original: https://github.com/frctl/nunjucks/blob/develop/src/extensions/render.js

module.exports = function (nunjucksEngine,fractal) {

  this.tags = ["render"];

  this.parse = function (parser, nodes) {
      var tok = parser.nextToken();
      var args = parser.parseSignature(null, true);
      parser.advanceAfterBlockEnd(tok.value);
      return new nodes.CallExtensionAsync(this, 'run', args);
  };

  this.run = function () {

      const source = fractal.components;
      const args = Array.from(arguments);
      const rootContext = args[0].ctx;
      const callback = args.pop();
      args.shift();
      const handle = args[0];
      let context = args[1];
      const merge = args[2] || false;
      const entity = source.find(handle);
      if (!entity) {
          throw new Error(`Could not render component '${handle}' - component not found.`);
      }
      const defaultContext = entity.isComponent ? entity.variants().default().context : entity.context;
      if (!context) {
          context = defaultContext;
      } else if (merge) {
          context = utils.defaultsDeep(context, defaultContext);
      }

      source.resolve(context).then(context => {
          // fix env for rendered components
          // let env = JSON.parse(JSON.stringify(rootContext._env));
          // context._env = env;
          entity.render(context).then(html => {
              let ret = new nunjucksEngine.runtime.SafeString(html);
              callback(null, ret);
          }).catch(err => {
              callback(err);
          });
      });
  };

};
