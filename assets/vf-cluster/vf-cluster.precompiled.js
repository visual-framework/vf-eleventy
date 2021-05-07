/**
 * Precompiled Nunjucks template: vf-cluster.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["vf-cluster"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
if(runtime.contextOrFrameLookup(context, frame, "context")) {
var t_1;
t_1 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"cluster_custom_spacing");
frame.set("cluster_custom_spacing", t_1, true);
if(frame.topLevel) {
context.setVariable("cluster_custom_spacing", t_1);
}
if(frame.topLevel) {
context.addExport("cluster_custom_spacing", t_1);
}
var t_2;
t_2 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"cluster_child_width");
frame.set("cluster_child_width", t_2, true);
if(frame.topLevel) {
context.setVariable("cluster_child_width", t_2);
}
if(frame.topLevel) {
context.addExport("cluster_child_width", t_2);
}
var t_3;
t_3 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"cluster_custom_alignment");
frame.set("cluster_custom_alignment", t_3, true);
if(frame.topLevel) {
context.setVariable("cluster_custom_alignment", t_3);
}
if(frame.topLevel) {
context.addExport("cluster_custom_alignment", t_3);
}
;
}
output += "\n<div class=\"vf-cluster";
if(runtime.contextOrFrameLookup(context, frame, "cluster__spacing")) {
output += " vf-cluster--";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "cluster__spacing"), env.opts.autoescape);
;
}
output += "\"";
if(runtime.contextOrFrameLookup(context, frame, "cluster_custom_alignment") || runtime.contextOrFrameLookup(context, frame, "cluster_custom_spacing") || runtime.contextOrFrameLookup(context, frame, "cluster_child_width")) {
output += " style=\"";
if(runtime.contextOrFrameLookup(context, frame, "cluster_custom_alignment")) {
output += "--vf-cluster-alignment: ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "cluster_custom_alignment"), env.opts.autoescape);
output += ";";
;
}
if(runtime.contextOrFrameLookup(context, frame, "cluster_custom_spacing")) {
output += " --vf-cluster-margin: ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "cluster_custom_spacing"), env.opts.autoescape);
output += ";";
;
}
if(runtime.contextOrFrameLookup(context, frame, "cluster_child_width")) {
output += " --vf-cluster__item--width: ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "cluster_child_width"), env.opts.autoescape);
output += ";";
;
}
;
}
output += "\">\n\n  <div class=\"vf-cluster__inner\">\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("cluster_content"))(env, context, frame, runtime, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
output += t_4;
output += "  </div>\n</div>\n";
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
function b_cluster_content(env, context, frame, runtime, cb) {
var lineno = 17;
var colno = 7;
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
b_cluster_content: b_cluster_content,
root: root
};

})();
})();
