/**
 * Precompiled Nunjucks template: vf-grid--auto.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["vf-grid--auto"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<div class=\"vf-grid";
if(runtime.contextOrFrameLookup(context, frame, "vf_grid__columns")) {
output += " vf-grid__col-";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "vf_grid__columns"), env.opts.autoescape);
;
}
output += "\">\n";
env.getExtension("render")["run"](context,"@vf-box--normal-primary", function(t_2,t_1) {
if(t_2) { cb(t_2); return; }
output += runtime.suppressValue(t_1, true && env.opts.autoescape);
env.getExtension("render")["run"](context,"@vf-box--normal-primary", function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
output += runtime.suppressValue(t_3, true && env.opts.autoescape);
env.getExtension("render")["run"](context,"@vf-box--normal-primary", function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
output += runtime.suppressValue(t_5, true && env.opts.autoescape);
env.getExtension("render")["run"](context,"@vf-box--normal-primary", function(t_8,t_7) {
if(t_8) { cb(t_8); return; }
output += runtime.suppressValue(t_7, true && env.opts.autoescape);
output += "</div>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
