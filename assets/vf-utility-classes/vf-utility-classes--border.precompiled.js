/**
 * Precompiled Nunjucks template: vf-utility-classes--border.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["vf-utility-classes--border"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<style>\n  .vf-utility__examples {\n    display: grid;\n    grid-template-columns: max-content 1fr;\n    grid-column-gap: 1em;\n  }\n  .vf-utility--example {\n    display: grid;\n    grid-template-columns: max-content 1fr;\n    grid-column: 1 / -1;\n    grid-column-gap: 1em;\n    grid-template-columns: subgrid;\n  }\n  .vf-utility--example p {\n    grid-column: 1 / span 1;\n  }\n  .vf-utility--example span {\n    border-style: solid;\n    border-width: 1px;\n    grid-column: 2 / span 1;\n    height: 1em;\n    width: 100%;\n  }\n\n</style>\n<div class=\"vf-content\">\n\n";
output += runtime.suppressValue(env.getExtension("markdown")["run"](context,function(cb) {
if(!cb) { cb = function(err) { if(err) { throw err; }}}
var t_1 = "";t_1 += "\n### Border colours\n";
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
output += "<section class=\"vf-utility__examples\">\n<article class=\"vf-utility--example\">\n  <p><code>.vf-u-border-color--green</code></p>\n  <span class=\"vf-u-border-color--green\"></span>\n</article>\n<article class=\"vf-utility--example\">\n  <p><code>.vf-u-border-color--green--darkest</code></p>\n  <span class=\"vf-u-border-color--green--darkest\"></span>\n</article>\n<article class=\"vf-utility--example\">\n  <p><code>.vf-u-border-color--green--dark</code></p>\n  <span class=\"vf-u-border-color--green--dark\"></span>\n</article>\n<article class=\"vf-utility--example\">\n  <p><code>.vf-u-border-color--green--light</code></p>\n  <span class=\"vf-u-border-color--green--light\"></span>\n</article>\n<article class=\"vf-utility--example\">\n  <p><code>.vf-u-border-color--green--lightest</code></p>\n  <span class=\"vf-u-border-color--green--lightest\"></span>\n</article>\n<article class=\"vf-utility--example\">\n  <p><code>.vf-u-border-color--grey</code></p>\n  <span class=\"vf-u-border-color--grey\"></span>\n</article>\n<article class=\"vf-utility--example\">\n  <p><code>.vf-u-border-color--grey--darkest</code></p>\n  <span class=\"vf-u-border-color--grey--darkest\"></span>\n</article>\n<article class=\"vf-utility--example\">\n  <p><code>.vf-u-border-color--grey--dark</code></p>\n  <span class=\"vf-u-border-color--grey--dark\"></span>\n</article>\n<article class=\"vf-utility--example\">\n  <p><code>.vf-u-border-color--grey--light</code></p>\n  <span class=\"vf-u-border-color--grey--light\"></span>\n</article>\n<article class=\"vf-utility--example\">\n  <p><code>.vf-u-border-color--grey--lightest</code></p>\n  <span class=\"vf-u-border-color--grey--lightest\"></span>\n</article>\n<article class=\"vf-utility--example\">\n  <p><code>.vf-u-border-color--red</code></p>\n  <span class=\"vf-u-border-color--red\"></span>\n</article>\n<article class=\"vf-utility--example\">\n  <p><code>.vf-u-border-color--red--dark</code></p>\n  <span class=\"vf-u-border-color--red--dark\"></span>\n</article>\n<article class=\"vf-utility--example\">\n  <p><code>.vf-u-border-color--red--light</code></p>\n  <span class=\"vf-u-border-color--red--light\"></span>\n</article>\n<article class=\"vf-utility--example\">\n  <p><code>.vf-u-border-color--blue</code></p>\n  <span class=\"vf-u-border-color--blue\"></span>\n</article>\n<article class=\"vf-utility--example\">\n  <p><code>.vf-u-border-color--blue--dark</code></p>\n  <span class=\"vf-u-border-color--blue--dark\"></span>\n</article>\n<article class=\"vf-utility--example\">\n  <p><code>.vf-u-border-color--blue--light</code></p>\n  <span class=\"vf-u-border-color--blue--light\"></span>\n</article>\n<article class=\"vf-utility--example\">\n  <p><code>.vf-u-border-color--purple</code></p>\n  <span class=\"vf-u-border-color--purple\"></span>\n</article>\n<article class=\"vf-utility--example\">\n  <p><code>.vf-u-border-color--purple--dark</code></p>\n  <span class=\"vf-u-border-color--purple--dark\"></span>\n</article>\n<article class=\"vf-utility--example\">\n  <p><code>.vf-u-border-color--purple--light</code></p>\n  <span class=\"vf-u-border-color--purple--light\"></span>\n</article>\n<article class=\"vf-utility--example\">\n  <p><code>.vf-u-border-color--orange</code></p>\n  <span class=\"vf-u-border-color--orange\"></span>\n</article>\n<article class=\"vf-utility--example\">\n  <p><code>.vf-u-border-color--orange--dark</code></p>\n  <span class=\"vf-u-border-color--orange--dark\"></span>\n</article>\n<article class=\"vf-utility--example\">\n  <p><code>.vf-u-border-color--orange--light</code></p>\n  <span class=\"vf-u-border-color--orange--light\"></span>\n</article>\n<article class=\"vf-utility--example\">\n  <p><code>.vf-u-border-color--yellow</code></p>\n  <span class=\"vf-u-border-color--yellow\"></span>\n</article>\n<article class=\"vf-utility--example\">\n  <p><code>.vf-u-border-color--yellow--dark</code></p>\n  <span class=\"vf-u-border-color--yellow--dark\"></span>\n</article>\n<article class=\"vf-utility--example\">\n  <p><code>.vf-u-border-color--yellow--light</code></p>\n  <span class=\"vf-u-border-color--yellow--light\"></span>\n</article>\n<article class=\"vf-utility--example\">\n  <p><code>.vf-u-border-color--bright-green</code></p>\n  <span class=\"vf-u-border-color--bright-green\"></span>\n</article>\n<article class=\"vf-utility--example\">\n  <p><code>.vf-u-border-color--bright-green--dark</code></p>\n  <span class=\"vf-u-border-color--bright-green--dark\"></span>\n</article>\n<article class=\"vf-utility--example\">\n  <p><code>.vf-u-border-color--bright-green--light</code></p>\n  <span class=\"vf-u-border-color--bright-green--light\"></span>\n</article>\n<article class=\"vf-utility--example\">\n  <p><code>.vf-u-border-color-ui--black</code></p>\n  <span class=\"vf-u-border-color-ui--black\"></span>\n</article>\n<article class=\"vf-utility--example\">\n  <p><code>.vf-u-border-color-ui--grey</code></p>\n  <span class=\"vf-u-border-color-ui--grey\"></span>\n</article>\n<article class=\"vf-utility--example\">\n  <p><code>.vf-u-border-color-ui--grey--light</code></p>\n  <span class=\"vf-u-border-color-ui--grey--light\"></span>\n</article>\n<article class=\"vf-utility--example\">\n  <p><code>.vf-u-border-color-ui--yellow</code></p>\n  <span class=\"vf-u-border-color-ui--yellow\"></span>\n</article>\n<article class=\"vf-utility--example\">\n  <p><code>.vf-u-border-color-ui--red</code></p>\n  <span class=\"vf-u-border-color-ui--red\"></span>\n</article>\n<article class=\"vf-utility--example\">\n  <p><code>.vf-u-border-color-ui--white</code></p>\n  <span class=\"vf-u-border-color-ui--white\"></span>\n</article>\n<article class=\"vf-utility--example\">\n  <p><code>.vf-u-border-color-ui--off-white</code></p>\n  <span class=\"vf-u-border-color-ui--off-white\"></span>\n</article>\n</section>\n</div>\n";
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
