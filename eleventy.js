const { DateTime } = require('luxon');
const _            = require('lodash');
const Path         = require('path');

module.exports = function(config) {

  // get the fractal enviroment
  var fractal = global.fractal;

  // A useful way to reference to the contect we are runing eleventy in
  let env = process.env.ELEVENTY_ENV;

  // Layout aliases can make templates more portable
  config.addLayoutAlias('default', 'layouts/base.njk');


  // BroswerSync options
  config.setBrowserSyncConfig({ open: true });

  // Filters
  // https://www.11ty.io/docs/filters/
  // -----

  // {{ "myContent" | sampleFilter }}
  config.addFilter("sampleFilter", function(value) {
    return 'ddd' + value;
  });

  // Add some utiliuty filters
  config.addFilter("markdown", require("./src/filters/markdown.js") );
  config.addFilter("squash", require("./src/filters/squash.js") );
  config.addFilter("dateDisplay", (dateObj, format = "LLL d, y") => {
    return DateTime.fromJSDate(dateObj, {
      zone: "utc"
    }).toFormat(format);
  });

  // Shortcodes
  // https://www.11ty.io/docs/shortcodes/
  // -----

  // nunjucks
  // {% sampleShortcode "firstName", "lastName" %}
  // handlebars
  // {{ sampleShortcode "firstName" "lastName" }}
  // config.addShortcode("sampleShortcode", function(firstName, lastName) {
  //   return 'hi ' + firstName + lastName;
  // });

  // minify the html output
  // config.addTransform("htmlmin", require("./src/utils/minify-html.js"));

  // Support the fractal-style render
  // `{% render "@vf-heading", {"title": "EMBL.org", "type": "extra-large"} %}`
  // config.addNunjucksTag("render", require("./src/filters/render.js"));
  config.addNunjucksTag("render", function(nunjucksEngine) {
    var fractalRenderExtension = require("./src/filters/render.js");
    return new fractalRenderExtension(nunjucksEngine,fractal);
  });

  // Add a tag level markdown filter
  // {% markdown %}
  //
  // [I'm some markdown](#link)
  //
  // {% endmarkdown %}
  config.addNunjucksTag("markdown", function(nunjucksEngine) {
    var fractalRenderExtension = require("./src/filters/markdown_tag.js");
    return new fractalRenderExtension(nunjucksEngine);
  });

  // config.addNunjucksTag("uppercase", function(nunjucksEngine) {
  //   return new function() {
  //     this.tags = ["uppercase"];
  //
  //     this.parse = function(parser, nodes, lexer) {
  //       var tok = parser.nextToken();
  //
  //       var args = parser.parseSignature(null, true);
  //       parser.advanceAfterBlockEnd(tok.value);
  //
  //       return new nodes.CallExtensionAsync(this, "run", args);
  //     };
  //
  //     this.run = function(context, myStringArg, callback) {
  //       let ret = new nunjucksEngine.runtime.SafeString(
  //         myStringArg.toUpperCase()
  //       );
  //       callback(null, ret);
  //     };
  //   }();
  // });

  // pass some assets right through
  config.addPassthroughCopy("./src/site/images");

  // rss feed plugin
  // https://github.com/11ty/eleventy-plugin-rss
  const pluginRss = require("@11ty/eleventy-plugin-rss");
  config.addPlugin(pluginRss);

  // make the seed target act like prod
  env = (env=="seed") ? "prod" : env;
  return {
    dir: {
      input: "src/site",
      output: "build",
      data: "_data"
    },
    templateFormats : [
      "njk", "md", // note that .md files will also be parsed with njk processor
      "css", "js" // passthrough file copying for static assets
    ],
    openBrowser: true,
    htmlTemplateEngine : ["njk", "md"],
    markdownTemplateEngine : "njk",
    passthroughFileCopy: true,
    pathPrefix: "/vf-eleventy/"
  };

};
