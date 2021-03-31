/**
 * Precompiled Nunjucks template: vf-form__checkbox.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["vf-form__checkbox"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
if(runtime.contextOrFrameLookup(context, frame, "context")) {
var t_1;
t_1 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"checkbox_label");
frame.set("checkbox_label", t_1, true);
if(frame.topLevel) {
context.setVariable("checkbox_label", t_1);
}
if(frame.topLevel) {
context.addExport("checkbox_label", t_1);
}
var t_2;
t_2 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"checkbox_helper");
frame.set("checkbox_helper", t_2, true);
if(frame.topLevel) {
context.setVariable("checkbox_helper", t_2);
}
if(frame.topLevel) {
context.addExport("checkbox_helper", t_2);
}
var t_3;
t_3 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"checkbox_group");
frame.set("checkbox_group", t_3, true);
if(frame.topLevel) {
context.setVariable("checkbox_group", t_3);
}
if(frame.topLevel) {
context.addExport("checkbox_group", t_3);
}
var t_4;
t_4 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"checkbox_value");
frame.set("checkbox_value", t_4, true);
if(frame.topLevel) {
context.setVariable("checkbox_value", t_4);
}
if(frame.topLevel) {
context.addExport("checkbox_value", t_4);
}
output += "\n";
var t_5;
t_5 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"disabled");
frame.set("disabled", t_5, true);
if(frame.topLevel) {
context.setVariable("disabled", t_5);
}
if(frame.topLevel) {
context.addExport("disabled", t_5);
}
var t_6;
t_6 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"invalid");
frame.set("invalid", t_6, true);
if(frame.topLevel) {
context.setVariable("invalid", t_6);
}
if(frame.topLevel) {
context.addExport("invalid", t_6);
}
;
}
output += "\n<div class=\"vf-form__item vf-form__item--checkbox\">\n  <input type=\"checkbox\" name=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "checkbox_group"), env.opts.autoescape);
output += "\" value=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "checkbox_value"), env.opts.autoescape);
output += "\" id=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "checkbox_label")),"form__label_for"), env.opts.autoescape);
output += "\" class=\"vf-form__checkbox";
if(runtime.contextOrFrameLookup(context, frame, "invalid")) {
output += " vf-form__checkbox--invalid";
;
}
output += "\" ";
if(runtime.contextOrFrameLookup(context, frame, "disabled")) {
output += "disabled";
;
}
output += ">";
env.getExtension("render")["run"](context,"@vf-form__label",{"context": runtime.contextOrFrameLookup(context, frame, "checkbox_label")}, function(t_8,t_7) {
if(t_8) { cb(t_8); return; }
output += runtime.suppressValue(t_7, true && env.opts.autoescape);
(function(cb) {if(runtime.contextOrFrameLookup(context, frame, "checkbox_helper")) {
(function(cb) {if(runtime.contextOrFrameLookup(context, frame, "inline")) {
cb();
}
else {
env.getExtension("render")["run"](context,"@vf-form__helper",{"context": runtime.contextOrFrameLookup(context, frame, "checkbox_helper")}, function(t_10,t_9) {
if(t_10) { cb(t_10); return; }
output += runtime.suppressValue(t_9, true && env.opts.autoescape);
cb()});
}
})(function(t_11) {
if(t_11) { cb(t_11); return; }cb()});
}
else {
cb()}
})(function(t_12) {
if(t_12) { cb(t_12); return; }output += "</div>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
