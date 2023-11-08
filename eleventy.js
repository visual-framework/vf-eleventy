const { DateTime } = require('luxon');
const _            = require('lodash');
const Path         = require('path');
const yaml         = require("js-yaml");

module.exports = function(config) {

  // Add in tags, filters useful for Visual Framework installs
  // (fractal's render tag, codeblock, markdown, etc)
  // and common configuration
  const vfEleventyExtension = require("@visual-framework/vf-extensions\/11ty");
  config.addPlugin(vfEleventyExtension);

  // BroswerSync options
  config.setBrowserSyncConfig({ open: true });

  // Filters
  // https://www.11ty.io/docs/filters/
  // -----

  // {{ "myContent" | sampleFilter }}
  // config.addFilter("sampleFilter", function(value) {
  //   return 'ddd' + value;
  // });

  // Add any utiliuty filters
  config.addFilter("dateDisplay", (dateObj, format = "d LLL y") => {
    return DateTime.fromJSDate(dateObj, {
      zone: "utc"
    }).toFormat(format);
  });

  // config.addFilter("makeLowercase", function(value) {
  //   value = value || '';
  //   return value.toLowerCase();
  // });

  // config.addFilter("spaceToDashes", function(value) {
  //   value = value || '';
  //   return value.replace(/\s+/g, '-').toLowerCase();
  // });

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

  // If you want to minify html output
  // config.addTransform("htmlmin", require("./node_modules/\@visual-framework/vf-eleventy--extensions/utils/minify-html.js"));

  // Add any custom tags

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

  // copy js files
  // this is neccesary now that 11ty tries to compile JS files as templates
  // @todo: backport to vf-eleventy
  config.addPassthroughCopy("./src/site/**/*.js");

  // pass some assets right through
  config.addPassthroughCopy("./src/site/images");

  // use the .yml file associated with the .njk if available
  config.addDataExtension("yml", contents => yaml.safeLoad(contents));

  return {
    dir: {
      input: "src/site",
      output: "build",
      data: "_data"
    },
    templateFormats : [
      "njk", "md", // note that .md files will also be parsed with njk processor
      "css" // passthrough file copying for static assets
    ],
    htmlTemplateEngine : ["njk", "md"],
    markdownTemplateEngine : "njk",
    passthroughFileCopy: true,
    pathPrefix: "/vf-eleventy/" // if your site is deployed to a sub-url, otherwise comment out
  };

};
