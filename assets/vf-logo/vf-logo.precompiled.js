/**
 * Precompiled Nunjucks template: vf-logo.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["vf-logo"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<a href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "logo_href"), env.opts.autoescape);
output += "\"\n";
if(runtime.contextOrFrameLookup(context, frame, "id")) {
output += " id=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id"), env.opts.autoescape);
output += "\"";
;
}
output += "class=\"vf-logo";
if(runtime.contextOrFrameLookup(context, frame, "logo_text")) {
output += " | vf-logo--has-text";
;
}
if(runtime.contextOrFrameLookup(context, frame, "override_class")) {
output += " | ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "override_class"), env.opts.autoescape);
;
}
output += "\">\n  <img class=\"vf-logo__image\" src=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "image"), env.opts.autoescape);
output += "\" alt=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "logo_text"), env.opts.autoescape);
output += "\">\n";
if(runtime.contextOrFrameLookup(context, frame, "logo_text")) {
output += "  <span class=\"vf-logo__text";
if(runtime.contextOrFrameLookup(context, frame, "hidden_text")) {
output += " vf-u-sr-only";
;
}
output += "\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "logo_text"), env.opts.autoescape);
output += "</span>\n";
;
}
output += "</a>\n";
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
