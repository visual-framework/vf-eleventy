/**
 * Precompiled Nunjucks template: vf-summary--profile.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["vf-summary--profile"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<article class=\"vf-summary vf-summary--profile\">\n  <img class=\"vf-summary__image vf-summary__image--avatar\" src=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "image"), env.opts.autoescape);
output += "\" alt=\"\">\n  <h3 class=\"vf-summary__title\">\n    <a href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "summary__href"), env.opts.autoescape);
output += "\" class=\"vf-summary__link\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "name"), env.opts.autoescape);
output += "</a>\n  </h3>\n  <p class=\"vf-summary__text\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "text"), env.opts.autoescape);
output += "</p>\n  <p class=\"vf-summary__email\">\n    <a href=\"mailto:contact@persons.com\" class=\"vf-summary__link vf-summary__link--secondary\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "email"), env.opts.autoescape);
output += "</a>\n  </p>\n  <p class=\"vf-summary__phone\">\n    <a href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "summary__href"), env.opts.autoescape);
output += "\" class=\"vf-summary__link vf-summary__link--secondary\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "phone"), env.opts.autoescape);
output += "</a>\n  </p>\n  <p class=\"vf-summary__phone vf-vf-summary__phone--mobile\">\n    <a href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "summary__href"), env.opts.autoescape);
output += "\" class=\"vf-summary__link vf-summary__link--secondary\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "mobile"), env.opts.autoescape);
output += "</a>\n  </p>\n";
if(runtime.contextOrFrameLookup(context, frame, "uuid")) {
output += "  <p class=\"vf-summary__uuid\">\n    <span>ORCID:</span>\n    <a class=\"vf-summary__link--secondary\" href=\"https://europepmc.org/authors/";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "uuid"), env.opts.autoescape);
output += "\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "uuid"), env.opts.autoescape);
output += "</a>\n  </p>\n";
;
}
output += "</article>\n";
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
