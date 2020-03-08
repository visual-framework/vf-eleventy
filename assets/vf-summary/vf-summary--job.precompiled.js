/**
 * Precompiled Nunjucks template: vf-summary--job.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["vf-summary--job"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<article class=\"vf-summary vf-summary--job\">\n  <p class=\"vf-summary__meta\">\n    <a href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "summary__href"), env.opts.autoescape);
output += "\" class=\"vf-summary__link\">Science Faculty</a>\n     in\n    <a href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "summary__href"), env.opts.autoescape);
output += "\" class=\"vf-summary__link\">Heidelberg</a>\n  </p>\n\n  <h3 class=\"vf-summary__title\">\n\n    <a href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "summary__href"), env.opts.autoescape);
output += "\" class=\"vf-summary__link\">\n      Group Leader - Cell and Biophysics\n    </a>\n\n  </h3>\n\n  <p class=\"vf-summary__text\">\n    We are seeking to recruit outstanding group leaders who wish to carry out cutting-edge molecular cell biology research and/or technology development.\n  </p>\n\n  <a href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "summary__href"), env.opts.autoescape);
output += "\" class=\"vf-summary__button | vf-button vf-button--primary vf-button--outline\">Apply Now</a>\n\n  <p class=\"vf-summary__date\"><span>Closes in 8 days.</span> Posted 11th August 2018</p>\n\n</article>\n";
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
