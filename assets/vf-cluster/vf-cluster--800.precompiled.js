/**
 * Precompiled Nunjucks template: vf-cluster--800.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["vf-cluster--800"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<div class=\"vf-cluster";
if(runtime.contextOrFrameLookup(context, frame, "cluster__spacing")) {
output += " vf-cluster--";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "cluster__spacing"), env.opts.autoescape);
;
}
output += "\"";
if(runtime.contextOrFrameLookup(context, frame, "cluster_custom_alignment") || runtime.contextOrFrameLookup(context, frame, "cluster_custom_spacing") || runtime.contextOrFrameLookup(context, frame, "cluster_child_flex")) {
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
if(runtime.contextOrFrameLookup(context, frame, "cluster_child_flex")) {
output += " --vf-cluster__item--flex: ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "cluster_child_flex"), env.opts.autoescape);
output += ";";
;
}
;
}
output += "\">\n\n  <div class=\"vf-cluster__inner\">\n\n";
env.getExtension("render")["run"](context,"@vf-box--normal-primary", function(t_2,t_1) {
if(t_2) { cb(t_2); return; }
output += runtime.suppressValue(t_1, true && env.opts.autoescape);
env.getExtension("render")["run"](context,"@vf-box--normal-primary", function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
output += runtime.suppressValue(t_3, true && env.opts.autoescape);
env.getExtension("render")["run"](context,"@vf-box--normal-primary", function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
output += runtime.suppressValue(t_5, true && env.opts.autoescape);
env.getExtension("render")["run"](context,"@vf-box--normal-secondary", function(t_8,t_7) {
if(t_8) { cb(t_8); return; }
output += runtime.suppressValue(t_7, true && env.opts.autoescape);
env.getExtension("render")["run"](context,"@vf-box--normal-secondary", function(t_10,t_9) {
if(t_10) { cb(t_10); return; }
output += runtime.suppressValue(t_9, true && env.opts.autoescape);
env.getExtension("render")["run"](context,"@vf-box--normal-secondary", function(t_12,t_11) {
if(t_12) { cb(t_12); return; }
output += runtime.suppressValue(t_11, true && env.opts.autoescape);
output += "\n  </div>\n</div>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
