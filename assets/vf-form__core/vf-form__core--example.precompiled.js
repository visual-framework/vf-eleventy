/**
 * Precompiled Nunjucks template: vf-form__core--example.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["vf-form__core--example"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<div class=\"vf-u-margin__bottom--xxl\">\n  <p class=\"vf-text | vf-u-margin__bottom--l\"><code class=\"vf-code-example\">vf-form__item</code></p>\n";
env.getExtension("render")["run"](context,"@vf-form__item", function(t_2,t_1) {
if(t_2) { cb(t_2); return; }
output += runtime.suppressValue(t_1, true && env.opts.autoescape);
output += "</div>\n<div class=\"vf-u-margin__bottom--xxl\">\n  <p class=\"vf-text | vf-u-margin__bottom--l\"><code class=\"vf-code-example\">vf-form__label</code></p>\n";
env.getExtension("render")["run"](context,"@vf-form__label", function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
output += runtime.suppressValue(t_3, true && env.opts.autoescape);
output += "</div>\n<div class=\"vf-u-margin__bottom--xxl\">\n  <p class=\"vf-text | vf-u-margin__bottom--l\"><code class=\"vf-code-example\">vf-form__label--required</code></p>\n";
env.getExtension("render")["run"](context,"@vf-form__label--required", function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
output += runtime.suppressValue(t_5, true && env.opts.autoescape);
output += "</div>\n<div class=\"vf-u-margin__bottom--xxl\">\n  <p class=\"vf-text | vf-u-margin__bottom--l\"><code class=\"vf-code-example\">vf-form__input</code></p>\n";
env.getExtension("render")["run"](context,"@vf-form__input", function(t_8,t_7) {
if(t_8) { cb(t_8); return; }
output += runtime.suppressValue(t_7, true && env.opts.autoescape);
output += "</div>\n<div class=\"vf-u-margin__bottom--xxl\">\n  <p class=\"vf-text | vf-u-margin__bottom--l\"><code class=\"vf-code-example\">vf-form__helper</code></p>\n";
env.getExtension("render")["run"](context,"@vf-form__helper", function(t_10,t_9) {
if(t_10) { cb(t_10); return; }
output += runtime.suppressValue(t_9, true && env.opts.autoescape);
output += "</div>\n<div class=\"vf-u-margin__bottom--xxl\">\n  <p class=\"vf-text | vf-u-margin__bottom--l\"><code class=\"vf-code-example\">vf-form__helper--error</code></p>\n";
env.getExtension("render")["run"](context,"@vf-form__helper--error", function(t_12,t_11) {
if(t_12) { cb(t_12); return; }
output += runtime.suppressValue(t_11, true && env.opts.autoescape);
output += "</div>\n<div class=\"vf-u-margin__bottom--xxl\">\n  <p class=\"vf-text | vf-u-margin__bottom--l\"><code class=\"vf-code-example\">vf-form__legend</code></p>\n";
env.getExtension("render")["run"](context,"@vf-form__legend", function(t_14,t_13) {
if(t_14) { cb(t_14); return; }
output += runtime.suppressValue(t_13, true && env.opts.autoescape);
output += "</div>\n<div class=\"vf-u-margin__bottom--xxl\">\n  <p class=\"vf-text | vf-u-margin__bottom--l\"><code class=\"vf-code-example\">vf-form__fieldset</code> <em>(with no content)</em></p>\n";
env.getExtension("render")["run"](context,"@vf-form__fieldset", function(t_16,t_15) {
if(t_16) { cb(t_16); return; }
output += runtime.suppressValue(t_15, true && env.opts.autoescape);
output += "</div>\n<div class=\"vf-u-margin__bottom--xxl\">\n  <p class=\"vf-text | vf-u-margin__bottom--l\"><code class=\"vf-code-example\">vf-form__checkbox</code></p>\n";
env.getExtension("render")["run"](context,"@vf-form__checkbox", function(t_18,t_17) {
if(t_18) { cb(t_18); return; }
output += runtime.suppressValue(t_17, true && env.opts.autoescape);
output += "</div>\n<div class=\"vf-u-margin__bottom--xxl\">\n  <p class=\"vf-text | vf-u-margin__bottom--l\"><code class=\"vf-code-example\">vf-form__checkbox--inline</code></p>\n";
env.getExtension("render")["run"](context,"@vf-form__checkbox--inline", function(t_20,t_19) {
if(t_20) { cb(t_20); return; }
output += runtime.suppressValue(t_19, true && env.opts.autoescape);
output += "</div>\n<div class=\"vf-u-margin__bottom--xxl\">\n  <p class=\"vf-text | vf-u-margin__bottom--l\"><code class=\"vf-code-example\">vf-form__radio</code></p>\n";
env.getExtension("render")["run"](context,"@vf-form__radio", function(t_22,t_21) {
if(t_22) { cb(t_22); return; }
output += runtime.suppressValue(t_21, true && env.opts.autoescape);
output += "</div>\n<div class=\"vf-u-margin__bottom--xxl\">\n  <p class=\"vf-text | vf-u-margin__bottom--l\"><code class=\"vf-code-example\">vf-form__select</code></p>\n";
env.getExtension("render")["run"](context,"@vf-form__select", function(t_24,t_23) {
if(t_24) { cb(t_24); return; }
output += runtime.suppressValue(t_23, true && env.opts.autoescape);
output += "</div>\n<div class=\"vf-u-margin__bottom--xxl\">\n  <p class=\"vf-text | vf-u-margin__bottom--l\"><code class=\"vf-code-example\">vf-form__textarea</code></p>\n";
env.getExtension("render")["run"](context,"@vf-form__textarea", function(t_26,t_25) {
if(t_26) { cb(t_26); return; }
output += runtime.suppressValue(t_25, true && env.opts.autoescape);
output += "</div>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})})})})})})})})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
