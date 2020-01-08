/**
 * Precompiled Nunjucks template: vf-form__radio.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["vf-form__radio"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<div class=\"vf-form__item vf-form__item--radio\">\n\n  <input type=\"radio\" name=\"radio-button-group\" id=\"radio-1\" class=\"vf-form__radio\">\n  <label for=\"radio-1\" class=\"vf-form__label\">Form Label</label>\n  <input type=\"radio\" name=\"radio-button-group\" id=\"radio-2\" class=\"vf-form__radio\">\n  <label for=\"radio-2\" class=\"vf-form__label\">Form Label</label>\n  <input type=\"radio\" name=\"radio-button-group\" id=\"radio-3\" class=\"vf-form__radio\">\n  <label for=\"radio-3\" class=\"vf-form__label\">Form Label</label>\n</div>\n\n\n<div class=\"vf-form__item vf-form__item--inline vf-form__item--radio\">\n\n  <input type=\"radio\" name=\"radio-button-group--inline\" id=\"radio-inline-1\" class=\"vf-form__radio\">\n  <label for=\"radio-inline-1\" class=\"vf-form__label\">Form Label</label>\n\n  <input type=\"radio\" name=\"radio-button-group--inline\" id=\"radio-inline-2\" class=\"vf-form__radio\">\n  <label for=\"radio-inline-2\" class=\"vf-form__label\">Form Label</label>\n\n  <input type=\"radio\" name=\"radio-button-group--inline\" id=\"radio-inline-3\" class=\"vf-form__radio\">\n  <label for=\"radio-inline-3\" class=\"vf-form__label\">Form Label</label>\n</div>\n";
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
