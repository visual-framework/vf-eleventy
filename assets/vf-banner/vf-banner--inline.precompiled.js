/**
 * Precompiled Nunjucks template: vf-banner--inline.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["vf-banner--inline"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<div class=\"vf-banner vf-banner--phase\">\n  <div class=\"vf-banner__content\">\n    <p class=\"vf-banner__text\">This is a new web page. <a href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "vf") - runtime.contextOrFrameLookup(context, frame, "banner") - -runtime.contextOrFrameLookup(context, frame, "inline_href"), env.opts.autoescape);
output += "\" class=\"vf-link\">Complete our quick survey</a> to help us make it better.</p>\n  </div>\n</div>\n";
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
