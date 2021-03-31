/**
 * Precompiled Nunjucks template: vf-form__input--password.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["vf-form__input--password"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<div class=\"vf-form__item\">\n  <label class=\"vf-form__label\" for=\"password\">Password</label>\n  <input type=\"password\" id=\"password\" class=\"vf-form__input\"";
if(runtime.contextOrFrameLookup(context, frame, "password_min")) {
output += " minlength=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "password_min"), env.opts.autoescape);
output += "\"";
;
}
if(runtime.contextOrFrameLookup(context, frame, "password_max")) {
output += " maxlength=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "password_max"), env.opts.autoescape);
output += "\"";
;
}
if(runtime.contextOrFrameLookup(context, frame, "password_pattern")) {
output += " pattern=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "password_pattern"), env.opts.autoescape);
output += "\"";
;
}
output += ">\n</div>\n";
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
