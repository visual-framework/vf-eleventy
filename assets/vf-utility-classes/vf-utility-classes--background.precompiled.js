/**
 * Precompiled Nunjucks template: vf-utility-classes--background.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["vf-utility-classes--background"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<style>\n  .vf-utility__examples {\n    display: grid;\n    grid-template-columns: max-content 1fr;\n    grid-column-gap: 1em;\n  }\n  .vf-utility--example {\n    display: grid;\n    grid-template-columns: max-content 1fr;\n    grid-column: 1 / -1;\n    grid-column-gap: 1em;\n    grid-template-columns: subgrid;\n  }\n  .vf-utility--example p {\n    grid-column: 1 / span 1;\n  }\n  .vf-utility--example span {\n    grid-column: 2 / span 1;\n    height: 1em;\n    width: 100%;\n  }\n\n</style>\n<div class=\"vf-content\">\n\n";
output += runtime.suppressValue(env.getExtension("markdown")["run"](context,function(cb) {
if(!cb) { cb = function(err) { if(err) { throw err; }}}
var t_1 = "";t_1 += "\n### Background Colours\n";
cb(null, t_1);
;
return t_1;
}
,function(cb) {
if(!cb) { cb = function(err) { if(err) { throw err; }}}
var t_2 = "";t_2 += 2;
cb(null, t_2);
;
return t_2;
}
), true && env.opts.autoescape);
output += "<section class=\"vf-utility__examples\">\n<article class=\"vf-utility--example\">\n  <p><code>.vf-u-background-color--green</code></p>\n  <span class=\"vf-u-background-color--green\"></span>\n</article>\n<article class=\"vf-utility--example\">\n  <p><code>.vf-u-background-color--green--darkest</code></p>\n  <span class=\"vf-u-background-color--green--darkest\"></span>\n</article>\n<article class=\"vf-utility--example\">\n  <p><code>.vf-u-background-color--green--dark</code></p>\n  <span class=\"vf-u-background-color--green--dark\"></span>\n</article>\n<article class=\"vf-utility--example\">\n  <p><code>.vf-u-background-color--green--light</code></p>\n  <span class=\"vf-u-background-color--green--light\"></span>\n</article>\n<article class=\"vf-utility--example\">\n  <p><code>.vf-u-background-color--green--lightest</code></p>\n  <span class=\"vf-u-background-color--green--lightest\"></span>\n</article>\n<article class=\"vf-utility--example\">\n  <p><code>.vf-u-background-color--grey</code></p>\n  <span class=\"vf-u-background-color--grey\"></span>\n</article>\n<article class=\"vf-utility--example\">\n  <p><code>.vf-u-background-color--grey--darkest</code></p>\n  <span class=\"vf-u-background-color--grey--darkest\"></span>\n</article>\n<article class=\"vf-utility--example\">\n  <p><code>.vf-u-background-color--grey--dark</code></p>\n  <span class=\"vf-u-background-color--grey--dark\"></span>\n</article>\n<article class=\"vf-utility--example\">\n  <p><code>.vf-u-background-color--grey--light</code></p>\n  <span class=\"vf-u-background-color--grey--light\"></span>\n</article>\n<article class=\"vf-utility--example\">\n  <p><code>.vf-u-background-color--grey--lightest</code></p>\n  <span class=\"vf-u-background-color--grey--lightest\"></span>\n</article>\n<article class=\"vf-utility--example\">\n  <p><code>.vf-u-background-color--red</code></p>\n  <span class=\"vf-u-background-color--red\"></span>\n</article>\n<article class=\"vf-utility--example\">\n  <p><code>.vf-u-background-color--red--dark</code></p>\n  <span class=\"vf-u-background-color--red--dark\"></span>\n</article>\n<article class=\"vf-utility--example\">\n  <p><code>.vf-u-background-color--red--light</code></p>\n  <span class=\"vf-u-background-color--red--light\"></span>\n</article>\n<article class=\"vf-utility--example\">\n  <p><code>.vf-u-background-color--blue</code></p>\n  <span class=\"vf-u-background-color--blue\"></span>\n</article>\n<article class=\"vf-utility--example\">\n  <p><code>.vf-u-background-color--blue--dark</code></p>\n  <span class=\"vf-u-background-color--blue--dark\"></span>\n</article>\n<article class=\"vf-utility--example\">\n  <p><code>.vf-u-background-color--blue--light</code></p>\n  <span class=\"vf-u-background-color--blue--light\"></span>\n</article>\n<article class=\"vf-utility--example\">\n  <p><code>.vf-u-background-color--purple</code></p>\n  <span class=\"vf-u-background-color--purple\"></span>\n</article>\n<article class=\"vf-utility--example\">\n  <p><code>.vf-u-background-color--purple--dark</code></p>\n  <span class=\"vf-u-background-color--purple--dark\"></span>\n</article>\n<article class=\"vf-utility--example\">\n  <p><code>.vf-u-background-color--purple--light</code></p>\n  <span class=\"vf-u-background-color--purple--light\"></span>\n</article>\n<article class=\"vf-utility--example\">\n  <p><code>.vf-u-background-color--orange</code></p>\n  <span class=\"vf-u-background-color--orange\"></span>\n</article>\n<article class=\"vf-utility--example\">\n  <p><code>.vf-u-background-color--orange--dark</code></p>\n  <span class=\"vf-u-background-color--orange--dark\"></span>\n</article>\n<article class=\"vf-utility--example\">\n  <p><code>.vf-u-background-color--orange--light</code></p>\n  <span class=\"vf-u-background-color--orange--light\"></span>\n</article>\n<article class=\"vf-utility--example\">\n  <p><code>.vf-u-background-color--yellow</code></p>\n  <span class=\"vf-u-background-color--yellow\"></span>\n</article>\n<article class=\"vf-utility--example\">\n  <p><code>.vf-u-background-color--yellow--dark</code></p>\n  <span class=\"vf-u-background-color--yellow--dark\"></span>\n</article>\n<article class=\"vf-utility--example\">\n  <p><code>.vf-u-background-color--yellow--light</code></p>\n  <span class=\"vf-u-background-color--yellow--light\"></span>\n</article>\n<article class=\"vf-utility--example\">\n  <p><code>.vf-u-background-color--bright-green</code></p>\n  <span class=\"vf-u-background-color--bright-green\"></span>\n</article>\n<article class=\"vf-utility--example\">\n  <p><code>.vf-u-background-color--bright-green--dark</code></p>\n  <span class=\"vf-u-background-color--bright-green--dark\"></span>\n</article>\n<article class=\"vf-utility--example\">\n  <p><code>.vf-u-background-color--bright-green--light</code></p>\n  <span class=\"vf-u-background-color--bright-green--light\"></span>\n</article>\n<article class=\"vf-utility--example\">\n  <p><code>.vf-u-background-color-ui--black</code></p>\n  <span class=\"vf-u-background-color-ui--black\"></span>\n</article>\n<article class=\"vf-utility--example\">\n  <p><code>.vf-u-background-color-ui--grey</code></p>\n  <span class=\"vf-u-background-color-ui--grey\"></span>\n</article>\n<article class=\"vf-utility--example\">\n  <p><code>.vf-u-background-color-ui--grey--light</code></p>\n  <span class=\"vf-u-background-color-ui--grey--light\"></span>\n</article>\n<article class=\"vf-utility--example\">\n  <p><code>.vf-u-background-color-ui--yellow</code></p>\n  <span class=\"vf-u-background-color-ui--yellow\"></span>\n</article>\n<article class=\"vf-utility--example\">\n  <p><code>.vf-u-background-color-ui--red</code></p>\n  <span class=\"vf-u-background-color-ui--red\"></span>\n</article>\n<article class=\"vf-utility--example\">\n  <p><code>.vf-u-background-color-ui--white</code></p>\n  <span class=\"vf-u-background-color-ui--white\"></span>\n</article>\n<article class=\"vf-utility--example\">\n  <p><code>.vf-u-background-color-ui--off-white</code></p>\n  <span class=\"vf-u-background-color-ui--off-white\"></span>\n</article>\n</section>\n</div>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
