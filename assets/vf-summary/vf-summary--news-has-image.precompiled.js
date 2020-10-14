/**
 * Precompiled Nunjucks template: vf-summary--news-has-image.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["vf-summary--news-has-image"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<article class=\"vf-summary vf-summary--news\">\n  <span class=\"vf-summary__date\">22 June 2018</span>\n  <img class=\"vf-summary__image\" src=\"";
output += runtime.suppressValue(env.getFilter("path").call(context, "../../assets/vf-summary/assets/vf-summary--news-has-image.jpg"), env.opts.autoescape);
output += "\" alt=\"\" loading=\"lazy\">\n  <h3 class=\"vf-summary__title\">\n    <a href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "summary__href"), env.opts.autoescape);
output += "\" class=\"vf-summary__link\">\n      ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "summary__title"), env.opts.autoescape);
output += "\n    </a>\n  </h3>\n  <p class=\"vf-summary__text\">\n    Combinations of cancer drugs can be quickly and cheaply tested using a novel microfluidic device.\n  </p>\n</article>\n";
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
