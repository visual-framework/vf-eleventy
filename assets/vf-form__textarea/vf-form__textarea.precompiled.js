/**
 * Precompiled Nunjucks template: vf-form__textarea.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["vf-form__textarea"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
if(runtime.contextOrFrameLookup(context, frame, "context")) {
var t_1;
t_1 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"text_label");
frame.set("text_label", t_1, true);
if(frame.topLevel) {
context.setVariable("text_label", t_1);
}
if(frame.topLevel) {
context.addExport("text_label", t_1);
}
var t_2;
t_2 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"text_value");
frame.set("text_value", t_2, true);
if(frame.topLevel) {
context.setVariable("text_value", t_2);
}
if(frame.topLevel) {
context.addExport("text_value", t_2);
}
var t_3;
t_3 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"text_name");
frame.set("text_name", t_3, true);
if(frame.topLevel) {
context.setVariable("text_name", t_3);
}
if(frame.topLevel) {
context.addExport("text_name", t_3);
}
output += "\n";
var t_4;
t_4 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"disabled");
frame.set("disabled", t_4, true);
if(frame.topLevel) {
context.setVariable("disabled", t_4);
}
if(frame.topLevel) {
context.addExport("disabled", t_4);
}
var t_5;
t_5 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"invalid");
frame.set("invalid", t_5, true);
if(frame.topLevel) {
context.setVariable("invalid", t_5);
}
if(frame.topLevel) {
context.addExport("invalid", t_5);
}
;
}
output += "\n<div class=\"vf-form__item\">";
env.getExtension("render")["run"](context,"@vf-form__label",{"context": runtime.contextOrFrameLookup(context, frame, "text_label")}, function(t_7,t_6) {
if(t_7) { cb(t_7); return; }
output += runtime.suppressValue(t_6, true && env.opts.autoescape);
output += "<textarea class=\"vf-form__textarea\" id=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "text_label")),"form__label_for"), env.opts.autoescape);
output += "\" name=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "text_area_name"), env.opts.autoescape);
output += "\"";
if(runtime.contextOrFrameLookup(context, frame, "text_area_rows")) {
output += " rows=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "text_area_rows"), env.opts.autoescape);
output += "\"";
;
}
if(runtime.contextOrFrameLookup(context, frame, "text_area_cols")) {
output += " cols=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "text_area_cols"), env.opts.autoescape);
output += "\"";
;
}
output += "></textarea>\n</div>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
