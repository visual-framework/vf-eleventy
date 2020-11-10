/**
 * Precompiled Nunjucks template: vf-box.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["vf-box"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
if(runtime.contextOrFrameLookup(context, frame, "context")) {
var t_1;
t_1 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"deprecated_text");
frame.set("deprecated_text", t_1, true);
if(frame.topLevel) {
context.setVariable("deprecated_text", t_1);
}
if(frame.topLevel) {
context.addExport("deprecated_text", t_1);
}
var t_2;
t_2 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"box_href");
frame.set("box_href", t_2, true);
if(frame.topLevel) {
context.setVariable("box_href", t_2);
}
if(frame.topLevel) {
context.addExport("box_href", t_2);
}
var t_3;
t_3 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"id");
frame.set("id", t_3, true);
if(frame.topLevel) {
context.setVariable("id", t_3);
}
if(frame.topLevel) {
context.addExport("id", t_3);
}
var t_4;
t_4 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"variant");
frame.set("variant", t_4, true);
if(frame.topLevel) {
context.setVariable("variant", t_4);
}
if(frame.topLevel) {
context.addExport("variant", t_4);
}
var t_5;
t_5 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"theme");
frame.set("theme", t_5, true);
if(frame.topLevel) {
context.setVariable("theme", t_5);
}
if(frame.topLevel) {
context.addExport("theme", t_5);
}
var t_6;
t_6 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"box_modifier");
frame.set("box_modifier", t_6, true);
if(frame.topLevel) {
context.setVariable("box_modifier", t_6);
}
if(frame.topLevel) {
context.addExport("box_modifier", t_6);
}
var t_7;
t_7 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"box_spacing");
frame.set("box_spacing", t_7, true);
if(frame.topLevel) {
context.setVariable("box_spacing", t_7);
}
if(frame.topLevel) {
context.addExport("box_spacing", t_7);
}
var t_8;
t_8 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"override_class");
frame.set("override_class", t_8, true);
if(frame.topLevel) {
context.setVariable("override_class", t_8);
}
if(frame.topLevel) {
context.addExport("override_class", t_8);
}
var t_9;
t_9 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"box_heading");
frame.set("box_heading", t_9, true);
if(frame.topLevel) {
context.setVariable("box_heading", t_9);
}
if(frame.topLevel) {
context.addExport("box_heading", t_9);
}
var t_10;
t_10 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"box_text");
frame.set("box_text", t_10, true);
if(frame.topLevel) {
context.setVariable("box_text", t_10);
}
if(frame.topLevel) {
context.addExport("box_text", t_10);
}
;
}
output += "\n<div";
if(runtime.contextOrFrameLookup(context, frame, "id")) {
output += " id=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id"), env.opts.autoescape);
output += "\"";
;
}
output += "\n  class=\"vf-box";
if(runtime.contextOrFrameLookup(context, frame, "box_href")) {
output += " vf-box--is-link";
;
}
if(runtime.contextOrFrameLookup(context, frame, "box_spacing")) {
output += " vf-box--";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "box_spacing"), env.opts.autoescape);
;
}
if(runtime.contextOrFrameLookup(context, frame, "theme")) {
output += " vf-box-theme--";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "theme"), env.opts.autoescape);
;
}
if(runtime.contextOrFrameLookup(context, frame, "variant")) {
output += " vf-box--";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "variant"), env.opts.autoescape);
;
}
if(runtime.contextOrFrameLookup(context, frame, "box_modifier")) {
output += " ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "box_modifier"), env.opts.autoescape);
;
}
if(runtime.contextOrFrameLookup(context, frame, "override_class")) {
output += " | ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "override_class"), env.opts.autoescape);
;
}
output += "\">\n\n  <h3 class=\"vf-box__heading\">";
if(runtime.contextOrFrameLookup(context, frame, "box_href")) {
output += "<a class=\"vf-box__link\" href=\"";
output += runtime.suppressValue((runtime.contextOrFrameLookup(context, frame, "box_href")?runtime.contextOrFrameLookup(context, frame, "box_href"):"#"), env.opts.autoescape);
output += "\">";
;
}
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "box_heading"), env.opts.autoescape);
if(runtime.contextOrFrameLookup(context, frame, "box_href")) {
output += "</a>";
;
}
output += "</h3>\n  <p class=\"vf-box__text\">";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "box_text")), env.opts.autoescape);
output += "</p>\n</div>\n";
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
