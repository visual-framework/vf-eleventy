/**
 * Precompiled Nunjucks template: vf-grid.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["vf-grid"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
if(runtime.contextOrFrameLookup(context, frame, "context")) {
var t_1;
t_1 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"vf_grid__columns");
frame.set("vf_grid__columns", t_1, true);
if(frame.topLevel) {
context.setVariable("vf_grid__columns", t_1);
}
if(frame.topLevel) {
context.addExport("vf_grid__columns", t_1);
}
var t_2;
t_2 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"modifier");
frame.set("modifier", t_2, true);
if(frame.topLevel) {
context.setVariable("modifier", t_2);
}
if(frame.topLevel) {
context.addExport("modifier", t_2);
}
;
}
output += "\n<div class=\"vf-grid";
if(runtime.contextOrFrameLookup(context, frame, "vf_grid__columns")) {
output += " vf-grid__col-";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "vf_grid__columns"), env.opts.autoescape);
;
}
if(runtime.contextOrFrameLookup(context, frame, "modifier")) {
output += " vf-grid__col-";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "modifier"), env.opts.autoescape);
;
}
output += "\">\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("vf_grid__content"))(env, context, frame, runtime, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
output += t_3;
output += "  \n</div>\n";
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
function b_vf_grid__content(env, context, frame, runtime, cb) {
var lineno = 10;
var colno = 5;
var output = "";
try {
var frame = frame.push(true);
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_vf_grid__content: b_vf_grid__content,
root: root
};

})();
})();
