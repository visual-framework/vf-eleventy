/**
 * Process a string as markdown
 *
 * @param {String} text
 * @example {{ "[Some markdown as a link](#) | markdown" }}
 */

const md = require('markdown-it')();

module.exports = function(text) {
  return md.render(text);
};
