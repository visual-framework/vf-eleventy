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
if(runtime.contextOrFrameLookup(context, frame, "context")) {
var t_1;
t_1 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"logo_href");
frame.set("logo_href", t_1, true);
if(frame.topLevel) {
context.setVariable("logo_href", t_1);
}
if(frame.topLevel) {
context.addExport("logo_href", t_1);
}
var t_2;
t_2 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"image");
frame.set("image", t_2, true);
if(frame.topLevel) {
context.setVariable("image", t_2);
}
if(frame.topLevel) {
context.addExport("image", t_2);
}
var t_3;
t_3 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"logo_text");
frame.set("logo_text", t_3, true);
if(frame.topLevel) {
context.setVariable("logo_text", t_3);
}
if(frame.topLevel) {
context.addExport("logo_text", t_3);
}
var t_4;
t_4 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"hidden_text");
frame.set("hidden_text", t_4, true);
if(frame.topLevel) {
context.setVariable("hidden_text", t_4);
}
if(frame.topLevel) {
context.addExport("hidden_text", t_4);
}
;
}
output += "\n<a href=\"";
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
output += "\" loading=\"eager\">\n";
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
