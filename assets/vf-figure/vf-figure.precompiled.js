/**
 * Precompiled Nunjucks template: vf-figure.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["vf-figure"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<figure";
if(runtime.contextOrFrameLookup(context, frame, "id")) {
output += "id=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id"), env.opts.autoescape);
output += "\"";
;
}
output += "\n  class=\"vf-figure";
if(runtime.contextOrFrameLookup(context, frame, "vf_figure__align_inline_start")) {
output += " vf-figure--align vf-figure--align-inline-start";
;
}
if(runtime.contextOrFrameLookup(context, frame, "vf_figure__align_inline_end")) {
output += " vf-figure--align vf-figure--align-inline-end";
;
}
if(runtime.contextOrFrameLookup(context, frame, "vf_figure__align_centered")) {
output += " vf-figure--align vf-figure--align-centered";
;
}
if(runtime.contextOrFrameLookup(context, frame, "override_class")) {
output += " | ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "override_class"), env.opts.autoescape);
;
}
output += "\"\n>\n\n  <img class=\"vf-figure__image\" src=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "imageUrl"), env.opts.autoescape);
output += "\" alt=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "alttext"), env.opts.autoescape);
output += "\" loading=\"lazy\">\n\n  <figcaption class=\"vf-figure__caption\">";
output += runtime.suppressValue((runtime.contextOrFrameLookup(context, frame, "html")?env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "html")):runtime.contextOrFrameLookup(context, frame, "text")), env.opts.autoescape);
output += "</figcaption>\n\n</figure>\n";
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
