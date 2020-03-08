/**
 * Precompiled Nunjucks template: vf-utility-classes--width.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["vf-utility-classes--width"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<style>  \n  .vf-utility--example div[class^='vf-u-width'] {\n    background: green;\n    height: 40px;\n  }\n</style>\n<div class=\"vf-content\">\n\n";
output += runtime.suppressValue(env.getExtension("markdown")["run"](context,function(cb) {
if(!cb) { cb = function(err) { if(err) { throw err; }}}
var t_1 = "";t_1 += "\n### Width\n";
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
output += "  <section class=\"vf-utility__examples | vf-content\">\n    <h4></h4>\n    <p>Use the utility clasees <code>.vf-u-width__20</code> to set responive width in 5 percentage increments.</p>\n   \n    <article class=\"vf-utility--example vf-u-clearfix\">\n      <p><code>.vf-u-width__5</code></p>\n        <div class=\"vf-u-width__5\"></div>\n    </article>\n\n    <article class=\"vf-utility--example vf-u-clearfix\">\n      <p><code>.vf-u-width__10</code></p>\n        <div class=\"vf-u-width__10\"></div>\n    </article>\n\n    <article class=\"vf-utility--example vf-u-clearfix\">\n      <p><code>.vf-u-width__15</code></p>\n        <div class=\"vf-u-width__15\"></div>\n    </article>\n\n    <article class=\"vf-utility--example vf-u-clearfix\">\n      <p><code>.vf-u-width__20</code></p>\n        <div class=\"vf-u-width__20\"></div>\n    </article>\n\n    <article class=\"vf-utility--example vf-u-clearfix\">\n      <p><code>.vf-u-width__30</code></p>\n        <div class=\"vf-u-width__30\"></div>\n    </article>\n\n    <article class=\"vf-utility--example vf-u-clearfix\">\n      <p><code>.vf-u-width__40</code></p>\n        <div class=\"vf-u-width__40\"></div>\n    </article>\n\n    And so on up to 100.\n  </section>\n\n  <section class=\"vf-utility__examples | vf-content\">\n    <h4>Responsive</h4>\n\n";
output += runtime.suppressValue(env.getExtension("markdown")["run"](context,function(cb) {
if(!cb) { cb = function(err) { if(err) { throw err; }}}
var t_3 = "";t_3 += "\n    You can also make these conditional on screen size with `--xs`, `--sm`, `--md`, `--lg` or `--xl`.\n\n";
cb(null, t_3);
;
return t_3;
}
,function(cb) {
if(!cb) { cb = function(err) { if(err) { throw err; }}}
var t_4 = "";t_4 += 6;
cb(null, t_4);
;
return t_4;
}
), true && env.opts.autoescape);
output += "\n   \n    <article class=\"vf-utility--example vf-u-clearfix\">\n      <p><code>.vf-u-width__20--sm</code></p>\n        <div class=\"vf-u-width__20--sm\"></div>\n    </article>\n\n   \n    <article class=\"vf-utility--example vf-u-clearfix\">\n      <p><code>.vf-u-width__20--xl</code></p>\n        <div class=\"vf-u-width__20--xl\"></div>\n    </article>\n\n\n\n\n  </section>\n\n</div>\n";
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
