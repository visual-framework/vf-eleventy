/**
 * Precompiled Nunjucks template: vf-summary--publication.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["vf-summary--publication"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "\n\n<article class=\"vf-summary vf-summary--publication\">\n  <h3 class=\"vf-summary__title\">\n    <a href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "summary__href"), env.opts.autoescape);
output += "\" class=\"vf-summary__link\">\n      ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "summary__title"), env.opts.autoescape);
output += "\n    </a>\n  </h3>\n  <p class=\"vf-summary__author\">";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "summary__author")), env.opts.autoescape);
output += "</p>\n  <p class=\"vf-summary__source\">\n    ";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "summary__source")), env.opts.autoescape);
output += "\n    <span class=\"vf-summary__date\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "summary__date"), env.opts.autoescape);
output += "</span>\n  </p>\n\n  <p class=\"vf-summary__text\">\n    ";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "summary__text")), env.opts.autoescape);
output += "\n  </p>\n</article>\n";
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
