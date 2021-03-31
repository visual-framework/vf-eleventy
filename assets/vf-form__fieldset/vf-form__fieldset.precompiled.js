/**
 * Precompiled Nunjucks template: vf-form__fieldset.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["vf-form__fieldset"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
if(runtime.contextOrFrameLookup(context, frame, "context")) {
var t_1;
t_1 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"fieldset_legend");
frame.set("fieldset_legend", t_1, true);
if(frame.topLevel) {
context.setVariable("fieldset_legend", t_1);
}
if(frame.topLevel) {
context.addExport("fieldset_legend", t_1);
}
var t_2;
t_2 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"fieldset__error");
frame.set("fieldset__error", t_2, true);
if(frame.topLevel) {
context.setVariable("fieldset__error", t_2);
}
if(frame.topLevel) {
context.addExport("fieldset__error", t_2);
}
;
}
output += "\n<fieldset class=\"vf-form__fieldset";
if(runtime.contextOrFrameLookup(context, frame, "inline")) {
output += " | vf-cluster vf-cluster--400";
;
}
else {
output += " | vf-stack vf-stack--400";
;
}
output += "\">";
(function(cb) {if(runtime.contextOrFrameLookup(context, frame, "fieldset_legend")) {
env.getExtension("render")["run"](context,"@vf-form__legend",{"context": runtime.contextOrFrameLookup(context, frame, "fieldset_legend")}, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
output += runtime.suppressValue(t_3, true && env.opts.autoescape);
cb()});
}
else {
cb()}
})(function(t_5) {
if(t_5) { cb(t_5); return; }(function(cb) {if(runtime.contextOrFrameLookup(context, frame, "fieldset__error")) {
env.getExtension("render")["run"](context,"@vf-form__helper",{"context": runtime.contextOrFrameLookup(context, frame, "fieldset__error")}, function(t_7,t_6) {
if(t_7) { cb(t_7); return; }
output += runtime.suppressValue(t_6, true && env.opts.autoescape);
cb()});
}
else {
cb()}
})(function(t_8) {
if(t_8) { cb(t_8); return; }if(runtime.contextOrFrameLookup(context, frame, "inline")) {
output += "<div class=\"vf-cluster__inner\">";
;
}
if(runtime.contextOrFrameLookup(context, frame, "inline")) {
output += "</div>";
;
}
output += "</fieldset>\n";
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
