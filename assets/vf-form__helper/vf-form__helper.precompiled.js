/**
 * Precompiled Nunjucks template: vf-form__helper.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["vf-form__helper"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
if(runtime.contextOrFrameLookup(context, frame, "context")) {
var t_1;
t_1 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"helper_text");
frame.set("helper_text", t_1, true);
if(frame.topLevel) {
context.setVariable("helper_text", t_1);
}
if(frame.topLevel) {
context.addExport("helper_text", t_1);
}
var t_2;
t_2 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"error");
frame.set("error", t_2, true);
if(frame.topLevel) {
context.setVariable("error", t_2);
}
if(frame.topLevel) {
context.addExport("error", t_2);
}
;
}
output += "\n<p class=\"vf-form__helper";
if(runtime.contextOrFrameLookup(context, frame, "error") == true) {
output += " vf-form__helper--error";
;
}
output += "\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "helper_text"), env.opts.autoescape);
output += "</p>\n";
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
