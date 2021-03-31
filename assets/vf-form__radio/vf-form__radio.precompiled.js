/**
 * Precompiled Nunjucks template: vf-form__radio.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["vf-form__radio"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
if(runtime.contextOrFrameLookup(context, frame, "context")) {
var t_1;
t_1 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"radio_label");
frame.set("radio_label", t_1, true);
if(frame.topLevel) {
context.setVariable("radio_label", t_1);
}
if(frame.topLevel) {
context.addExport("radio_label", t_1);
}
var t_2;
t_2 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"radio_helper");
frame.set("radio_helper", t_2, true);
if(frame.topLevel) {
context.setVariable("radio_helper", t_2);
}
if(frame.topLevel) {
context.addExport("radio_helper", t_2);
}
var t_3;
t_3 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"radio_value");
frame.set("radio_value", t_3, true);
if(frame.topLevel) {
context.setVariable("radio_value", t_3);
}
if(frame.topLevel) {
context.addExport("radio_value", t_3);
}
var t_4;
t_4 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"radio_name");
frame.set("radio_name", t_4, true);
if(frame.topLevel) {
context.setVariable("radio_name", t_4);
}
if(frame.topLevel) {
context.addExport("radio_name", t_4);
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
output += "\n<div class=\"vf-form__item vf-form__item--radio\">\n  <input type=\"radio\" name=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "radio_name"), env.opts.autoescape);
output += "\" value=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "radio_value"), env.opts.autoescape);
output += "\" id=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "radio_label")),"form__label_for"), env.opts.autoescape);
output += "\" class=\"vf-form__radio";
if(runtime.contextOrFrameLookup(context, frame, "invalid")) {
output += " vf-form__radio--invalid";
;
}
output += "\" ";
if(runtime.contextOrFrameLookup(context, frame, "disabled")) {
output += "disabled";
;
}
output += ">";
env.getExtension("render")["run"](context,"@vf-form__label",{"context": runtime.contextOrFrameLookup(context, frame, "radio_label")}, function(t_8,t_7) {
if(t_8) { cb(t_8); return; }
output += runtime.suppressValue(t_7, true && env.opts.autoescape);
(function(cb) {if(runtime.contextOrFrameLookup(context, frame, "radio_helper")) {
(function(cb) {if(runtime.contextOrFrameLookup(context, frame, "inline")) {
cb();
}
else {
env.getExtension("render")["run"](context,"@vf-form__helper",{"context": runtime.contextOrFrameLookup(context, frame, "radio_helper")}, function(t_10,t_9) {
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
