/**
 * Precompiled Nunjucks template: vf-favicon.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["vf-favicon"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<link rel=\"shortcut icon\" href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "icon_favicon"), env.opts.autoescape);
output += "\">\n<link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "apple_touch_icon"), env.opts.autoescape);
output += "\">\n<link rel=\"icon\" type=\"image/png\" sizes=\"32x32\" href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "icon_32"), env.opts.autoescape);
output += "\">\n<link rel=\"icon\" type=\"image/png\" sizes=\"16x16\" href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "icon_16"), env.opts.autoescape);
output += "\">\n<link rel=\"manifest\" href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "manifest"), env.opts.autoescape);
output += "\">\n<link rel=\"mask-icon\" href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "icon_mask"), env.opts.autoescape);
output += "\" color=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "color_mask"), env.opts.autoescape);
output += "\">\n<meta name=\"msapplication-TileColor\" content=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "color_msapplication"), env.opts.autoescape);
output += "\">\n<meta name=\"theme-color\" content=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "color_theme"), env.opts.autoescape);
output += "\">\n";
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
