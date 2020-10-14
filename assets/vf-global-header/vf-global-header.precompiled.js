/**
 * Precompiled Nunjucks template: vf-global-header.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["vf-global-header"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
if(runtime.contextOrFrameLookup(context, frame, "context")) {
var t_1;
t_1 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"global_logo");
frame.set("global_logo", t_1, true);
if(frame.topLevel) {
context.setVariable("global_logo", t_1);
}
if(frame.topLevel) {
context.addExport("global_logo", t_1);
}
;
}
output += "\n\n<header class=\"vf-global-header\">\n\n";
env.getExtension("render")["run"](context,"@vf-logo",{"context": runtime.contextOrFrameLookup(context, frame, "global_logo")}, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
output += runtime.suppressValue(t_2, true && env.opts.autoescape);
output += "\n";
env.getExtension("render")["run"](context,"@vf-navigation--global", function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
output += runtime.suppressValue(t_4, true && env.opts.autoescape);
output += "\n</header>\n";
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
