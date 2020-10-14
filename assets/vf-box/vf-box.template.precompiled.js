/**
 * Precompiled Nunjucks template: vf-box.template.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["vf-box.template"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "\n\n";
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
t_4 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"box_modifier");
frame.set("box_modifier", t_4, true);
if(frame.topLevel) {
context.setVariable("box_modifier", t_4);
}
if(frame.topLevel) {
context.addExport("box_modifier", t_4);
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
t_6 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"box_heading");
frame.set("box_heading", t_6, true);
if(frame.topLevel) {
context.setVariable("box_heading", t_6);
}
if(frame.topLevel) {
context.addExport("box_heading", t_6);
}
var t_7;
t_7 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"box_text");
frame.set("box_text", t_7, true);
if(frame.topLevel) {
context.setVariable("box_text", t_7);
}
if(frame.topLevel) {
context.addExport("box_text", t_7);
}
if(runtime.contextOrFrameLookup(context, frame, "box")) {
var t_8;
t_8 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "box")),"deprecated_text");
frame.set("deprecated_text", t_8, true);
if(frame.topLevel) {
context.setVariable("deprecated_text", t_8);
}
if(frame.topLevel) {
context.addExport("deprecated_text", t_8);
}
var t_9;
t_9 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "box")),"box_href");
frame.set("box_href", t_9, true);
if(frame.topLevel) {
context.setVariable("box_href", t_9);
}
if(frame.topLevel) {
context.addExport("box_href", t_9);
}
var t_10;
t_10 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "box")),"id");
frame.set("id", t_10, true);
if(frame.topLevel) {
context.setVariable("id", t_10);
}
if(frame.topLevel) {
context.addExport("id", t_10);
}
var t_11;
t_11 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "box")),"box_modifier");
frame.set("box_modifier", t_11, true);
if(frame.topLevel) {
context.setVariable("box_modifier", t_11);
}
if(frame.topLevel) {
context.addExport("box_modifier", t_11);
}
var t_12;
t_12 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "box")),"override_class");
frame.set("override_class", t_12, true);
if(frame.topLevel) {
context.setVariable("override_class", t_12);
}
if(frame.topLevel) {
context.addExport("override_class", t_12);
}
var t_13;
t_13 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "box")),"box_heading");
frame.set("box_heading", t_13, true);
if(frame.topLevel) {
context.setVariable("box_heading", t_13);
}
if(frame.topLevel) {
context.addExport("box_heading", t_13);
}
var t_14;
t_14 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "box")),"box_text");
frame.set("box_text", t_14, true);
if(frame.topLevel) {
context.setVariable("box_text", t_14);
}
if(frame.topLevel) {
context.addExport("box_text", t_14);
}
;
}
output += "\n";
if(runtime.contextOrFrameLookup(context, frame, "deprecated_text")) {
output += "<!-- ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "deprecated_text"), env.opts.autoescape);
output += " -->";
;
}
if(runtime.contextOrFrameLookup(context, frame, "box_href")) {
var t_15;
t_15 = "a";
frame.set("tags", t_15, true);
if(frame.topLevel) {
context.setVariable("tags", t_15);
}
if(frame.topLevel) {
context.addExport("tags", t_15);
}
;
}
else {
var t_16;
t_16 = "div";
frame.set("tags", t_16, true);
if(frame.topLevel) {
context.setVariable("tags", t_16);
}
if(frame.topLevel) {
context.addExport("tags", t_16);
}
;
}
output += "<";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "tags"), env.opts.autoescape);
output += "\n";
if(runtime.contextOrFrameLookup(context, frame, "tags") == "a") {
output += " href=\"";
output += runtime.suppressValue((runtime.contextOrFrameLookup(context, frame, "box_href")?runtime.contextOrFrameLookup(context, frame, "box_href"):"#"), env.opts.autoescape);
output += "\"";
;
}
output += "\n  ";
if(runtime.contextOrFrameLookup(context, frame, "id")) {
output += " id=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id"), env.opts.autoescape);
output += "\"";
;
}
output += "\n  ";
output += "\n  class=\"vf-box";
if(runtime.contextOrFrameLookup(context, frame, "box_href")) {
output += " vf-box--is-link";
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
output += "\">\n  <h3 class=\"vf-box__heading\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "box_heading"), env.opts.autoescape);
output += "</h3>\n  <p class=\"vf-box__text\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "box_text"), env.opts.autoescape);
output += "</p>\n</";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "tags"), env.opts.autoescape);
output += ">\n";
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
