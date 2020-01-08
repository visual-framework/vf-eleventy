/**
 * Precompiled Nunjucks template: vf-form__label.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["vf-form__label"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<div class=\"vf-form__item\" data-vf-js-form-floatlabel>\n  <label for=\"text\" class=\"vf-form__label | vf-u-sr-only\">Form Label</label>\n  <input type=\"text\" id=\"text\" class=\"vf-form__input\" placeholder=\"form label example\">\n</div>\n";
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
