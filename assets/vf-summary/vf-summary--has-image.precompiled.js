/**
 * Precompiled Nunjucks template: vf-summary--has-image.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["vf-summary--has-image"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<article class=\"vf-summary vf-summary--has-image\">\n  <a href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "summary__href"), env.opts.autoescape);
output += "\" class=\"vf-summary__link\">\n    <img class=\"vf-summary__image vf-summary__image--thumbnail\" src=\"https://www.ebi.ac.uk/biosamples/images/logo_biosamples.png\" alt=\"BioSamples\">\n  </a>\n  <h3 class=\"vf-summary__title\">\n    <a href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "summary__href"), env.opts.autoescape);
output += "\" class=\"vf-summary__link\">\n      BioSamples\n    </a>\n  </h3>\n  <p class=\"vf-summary__text\">\n    A database describing biological samples and providing links to associated experimental data.\n  </p>\n</article>\n\n<article class=\"vf-summary vf-summary--has-image\">\n  <!-- for cases when there is no image -->\n  <h3 class=\"vf-summary__title\">\n    <a href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "summary__href"), env.opts.autoescape);
output += "\" class=\"vf-summary__link\">\n      Imageless sample\n    </a>\n  </h3>\n  <p class=\"vf-summary__text\">\n    Not all lists with images have an image for every item.\n  </p>\n</article>\n";
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
