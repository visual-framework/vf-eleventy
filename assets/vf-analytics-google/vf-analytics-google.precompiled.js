/**
 * Precompiled Nunjucks template: vf-analytics-google.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["vf-analytics-google"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<div class=\"vf-analytics-google\">\n  /* vf-analytics-google template file */\n\n  <h3>Example of form tracking attributes</h3>\n  <input type=\"radio\" name=\"radio-button-group\" id=\"radio-2\" class=\"vf-form__radio\">\n  <label for=\"radio-2\" class=\"vf-form__label\" data-vf-analytics-label=\"A special form option\">Form Label</label>\n\n  <input type=\"radio\" name=\"radio-button-group\" id=\"radio-3\" class=\"vf-form__radio\">\n  <label for=\"radio-3\" class=\"vf-form__label\" data-vf-analytics-label=\"I am also a special label\">Form Label</label>\n\n</div>\n";
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
