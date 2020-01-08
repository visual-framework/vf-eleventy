/**
 * Precompiled Nunjucks template: vf-form__select.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["vf-form__select"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<div class=\"vf-form__item\">\n\n  <label class=\"vf-form__label\" for=\"vf-form__select\">Choose a pet:</label>\n\n  <select class=\"vf-form__select\" id=\"vf-form__select\">\n    <option value=\"cat\">Cat</option>\n    <option value=\"hamster\">Hamster</option>\n    <option value=\"parrot\">Parrot</option>\n    <option value=\"dog\" selected>Dog</option>\n    <option value=\"spider\">Spider</option>\n    <option value=\"goldfish\">Goldfish</option>\n  </select>\n\n</div>\n";
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
