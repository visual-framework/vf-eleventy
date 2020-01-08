/**
 * Precompiled Nunjucks template: embl-grid.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["embl-grid"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<div class=\"vf-body\">\n  <div class=\"embl-grid\">\n    <div></div>\n    <div></div>\n  </div>\n  <div class=\"embl-grid\">\n    <div></div>\n    <div></div>\n    <div></div>\n  </div>\n  <div class=\"embl-grid\">\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n  </div>\n  <div class=\"embl-grid embl-grid--has-sidebar\">\n    <div></div>\n    <div></div>\n    <div></div>\n  </div>\n  <div class=\"embl-grid embl-grid--has-centered-content\">\n    <div></div>\n    <div></div>\n    <div></div>\n  </div>\n</div>\n\n<style>\n.embl-grid > div {\n  /* For illustrative use on component demo page */\n  background-color: rgb(41, 141, 211);\n  min-height: 5em;\n  margin-bottom: 1em;\n}\n</style>\n";
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
