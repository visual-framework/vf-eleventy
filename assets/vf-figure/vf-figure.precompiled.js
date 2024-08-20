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
if(runtime.contextOrFrameLookup(context, frame, "context")) {
var t_1;
t_1 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"id");
frame.set("id", t_1, true);
if(frame.topLevel) {
context.setVariable("id", t_1);
}
if(frame.topLevel) {
context.addExport("id", t_1);
}
var t_2;
t_2 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"vf_figure__align_inline_start");
frame.set("vf_figure__align_inline_start", t_2, true);
if(frame.topLevel) {
context.setVariable("vf_figure__align_inline_start", t_2);
}
if(frame.topLevel) {
context.addExport("vf_figure__align_inline_start", t_2);
}
var t_3;
t_3 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"vf_figure__align_inline_end");
frame.set("vf_figure__align_inline_end", t_3, true);
if(frame.topLevel) {
context.setVariable("vf_figure__align_inline_end", t_3);
}
if(frame.topLevel) {
context.addExport("vf_figure__align_inline_end", t_3);
}
var t_4;
t_4 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"vf_figure__align_centered");
frame.set("vf_figure__align_centered", t_4, true);
if(frame.topLevel) {
context.setVariable("vf_figure__align_centered", t_4);
}
if(frame.topLevel) {
context.addExport("vf_figure__align_centered", t_4);
}
var t_5;
t_5 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"override_class");
frame.set("override_class", t_5, true);
if(frame.topLevel) {
context.setVariable("override_class", t_5);
}
if(frame.topLevel) {
context.addExport("override_class", t_5);
}
var t_6;
t_6 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"imageUrl");
frame.set("imageUrl", t_6, true);
if(frame.topLevel) {
context.setVariable("imageUrl", t_6);
}
if(frame.topLevel) {
context.addExport("imageUrl", t_6);
}
var t_7;
t_7 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"ovealttextrride_class");
frame.set("alttext", t_7, true);
if(frame.topLevel) {
context.setVariable("alttext", t_7);
}
if(frame.topLevel) {
context.addExport("alttext", t_7);
}
var t_8;
t_8 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"html");
frame.set("html", t_8, true);
if(frame.topLevel) {
context.setVariable("html", t_8);
}
if(frame.topLevel) {
context.addExport("html", t_8);
}
var t_9;
t_9 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"text");
frame.set("text", t_9, true);
if(frame.topLevel) {
context.setVariable("text", t_9);
}
if(frame.topLevel) {
context.addExport("text", t_9);
}
;
}
output += "<figure";
if(runtime.contextOrFrameLookup(context, frame, "id")) {
output += "id=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id"), env.opts.autoescape);
output += "\"";
;
}
output += "  class=\"vf-figure";
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
output += "\"\n>\n  <img class=\"vf-figure__image\" src=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "imageUrl"), env.opts.autoescape);
output += "\" alt=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "alttext"), env.opts.autoescape);
output += "\" loading=\"lazy\">\n  <figcaption class=\"vf-figure__caption\">";
output += runtime.suppressValue((runtime.contextOrFrameLookup(context, frame, "html")?env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "html")):runtime.contextOrFrameLookup(context, frame, "text")), env.opts.autoescape);
output += "</figcaption>\n</figure>\n";
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
