/**
 * Precompiled Nunjucks template: vf-form__checkbox--inline.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["vf-form__checkbox--inline"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<div class=\"vf-form__item vf-form__item--checkbox vf-form__item--checkbox--inline\">\n  <input type=\"checkbox\" id=\"checkbox-inline-01\" class=\"vf-form__checkbox\">\n  <label for=\"checkbox-inline-01\" class=\"vf-form__label\">Form Label</label>\n</div>\n";
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
