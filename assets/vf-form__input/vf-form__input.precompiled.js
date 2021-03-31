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
output += "<div class=\"vf-form__item\">\n  <label class=\"vf-form__label\" for=\"text\">Text</label>\n  <input type=\"text\" id=\"text\" class=\"vf-form__input";
if(runtime.contextOrFrameLookup(context, frame, "invalid")) {
output += " vf-form__input--invalid";
;
}
output += "\">\n</div>\n";
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
