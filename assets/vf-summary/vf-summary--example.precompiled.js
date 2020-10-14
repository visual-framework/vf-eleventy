/**
 * Precompiled Nunjucks template: vf-summary--example.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["vf-summary--example"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<div class=\"vf-stack vf-stack--lg\">\n";
env.getExtension("render")["run"](context,"@vf-summary--default", function(t_2,t_1) {
if(t_2) { cb(t_2); return; }
output += runtime.suppressValue(t_1, true && env.opts.autoescape);
env.getExtension("render")["run"](context,"@vf-summary--article", function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
output += runtime.suppressValue(t_3, true && env.opts.autoescape);
env.getExtension("render")["run"](context,"@vf-summary--event", function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
output += runtime.suppressValue(t_5, true && env.opts.autoescape);
output += "  <div style=\"max-width: 400px\">\n";
env.getExtension("render")["run"](context,"@vf-summary--event-easy", function(t_8,t_7) {
if(t_8) { cb(t_8); return; }
output += runtime.suppressValue(t_7, true && env.opts.autoescape);
output += "  </div>\n";
env.getExtension("render")["run"](context,"@vf-summary--has-image", function(t_10,t_9) {
if(t_10) { cb(t_10); return; }
output += runtime.suppressValue(t_9, true && env.opts.autoescape);
env.getExtension("render")["run"](context,"@vf-summary--job", function(t_12,t_11) {
if(t_12) { cb(t_12); return; }
output += runtime.suppressValue(t_11, true && env.opts.autoescape);
env.getExtension("render")["run"](context,"@vf-summary--news", function(t_14,t_13) {
if(t_14) { cb(t_14); return; }
output += runtime.suppressValue(t_13, true && env.opts.autoescape);
env.getExtension("render")["run"](context,"@vf-summary--news-has-image", function(t_16,t_15) {
if(t_16) { cb(t_16); return; }
output += runtime.suppressValue(t_15, true && env.opts.autoescape);
env.getExtension("render")["run"](context,"@vf-summary--publication", function(t_18,t_17) {
if(t_18) { cb(t_18); return; }
output += runtime.suppressValue(t_17, true && env.opts.autoescape);
output += "</div>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})})})})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
