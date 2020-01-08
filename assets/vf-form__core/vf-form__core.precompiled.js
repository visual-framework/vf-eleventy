/**
 * Precompiled Nunjucks template: vf-form__core.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["vf-form__core"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getExtension("render")["run"](context,"@vf-form__checkbox", function(t_2,t_1) {
if(t_2) { cb(t_2); return; }
output += runtime.suppressValue(t_1, true && env.opts.autoescape);
output += "\n";
env.getExtension("render")["run"](context,"@vf-form__helper", function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
output += runtime.suppressValue(t_3, true && env.opts.autoescape);
output += "\n";
env.getExtension("render")["run"](context,"@vf-form__input", function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
output += runtime.suppressValue(t_5, true && env.opts.autoescape);
output += "\n";
env.getExtension("render")["run"](context,"@vf-form__item", function(t_8,t_7) {
if(t_8) { cb(t_8); return; }
output += runtime.suppressValue(t_7, true && env.opts.autoescape);
output += "\n";
env.getExtension("render")["run"](context,"@vf-form__label", function(t_10,t_9) {
if(t_10) { cb(t_10); return; }
output += runtime.suppressValue(t_9, true && env.opts.autoescape);
output += "\n";
env.getExtension("render")["run"](context,"@vf-form__radio", function(t_12,t_11) {
if(t_12) { cb(t_12); return; }
output += runtime.suppressValue(t_11, true && env.opts.autoescape);
output += "\n";
env.getExtension("render")["run"](context,"@vf-form__select", function(t_14,t_13) {
if(t_14) { cb(t_14); return; }
output += runtime.suppressValue(t_13, true && env.opts.autoescape);
output += "\n";
env.getExtension("render")["run"](context,"@vf-form__textarea", function(t_16,t_15) {
if(t_16) { cb(t_16); return; }
output += runtime.suppressValue(t_15, true && env.opts.autoescape);
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})})})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
