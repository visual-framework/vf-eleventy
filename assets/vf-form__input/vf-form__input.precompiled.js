/**
 * Precompiled Nunjucks template: vf-form__input.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["vf-form__input"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<form action=\"\" class=\"vf-form\">\n  <div class=\"vf-form__item\" data-vf-js-form-floatlabel>\n    <label class=\"vf-form__label | vf-u-sr-only\" for=\"text\">Text</label>\n    <input type=\"text\" id=\"text\" class=\"vf-form__input\" placeholder=\"Text\">\n  </div>\n\n  <div class=\"vf-form__item\" data-vf-js-form-floatlabel>\n    <label class=\"vf-form__label | vf-u-sr-only\" for=\"password\">Password</label>\n    <input type=\"password\" id=\"password\" class=\"vf-form__input\" placeholder=\"Password\">\n  </div>\n\n  <div class=\"vf-form__item\">\n    <label class=\"vf-form__label | vf-u-sr-only\" for=\"email\">Disabled email</label>\n    <input type=\"email\" id=\"email\" class=\"vf-form__input\" disabled placeholder=\"disabled\">\n  </div>\n</form>\n";
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
