/**
 * Precompiled Nunjucks template: vf-banner--top.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["vf-banner--top"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<div class=\"vf-banner vf-banner--fixed vf-banner--top vf-banner--phase\"\ndata-vf-js-banner\ndata-vf-js-banner-state=\"dismissible\"\ndata-vf-js-banner-button-text=\"Close notice\">\n  <div class=\"vf-banner__content\" data-vf-js-banner-text>\n    <span class=\"vf-badge vf-badge--primary\">BETA</span>\n    <p class=\"vf-banner__text\">This is the new EMBL.org <a href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "vf") - runtime.contextOrFrameLookup(context, frame, "banner") - -runtime.contextOrFrameLookup(context, frame, "inline__url"), env.opts.autoescape);
output += "\" class=\"vf-banner__link\">Complete our quick survey</a> to help us make it better.</p>\n  </div>\n</div>\n";
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
