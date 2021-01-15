/**
 * Precompiled Nunjucks template: vf-form__textarea.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["vf-form__textarea"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<div class=\"vf-form__item vf-stack\">\n  <label class=\"vf-form__label\" for=\"vf-form__textarea\">Write Some More details</label>\n  <textarea class=\"vf-form__textarea\" id=\"vf-form__textarea\" name=\"vf-form__textarea\" rows=\"5\"></textarea>\n</div>\n";
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
