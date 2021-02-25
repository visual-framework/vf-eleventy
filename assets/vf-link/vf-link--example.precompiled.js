/**
 * Precompiled Nunjucks template: vf-link--example.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["vf-link--example"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<div class=\"vf-stack vf-stack--400\">\n  <!-- Primary -->\n  <a href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "link_href"), env.opts.autoescape);
output += "\" class=\"vf-link\">A text link</a>\n  <!-- Primary Hover -->\n  <a href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "link_href"), env.opts.autoescape);
output += "\" class=\"vf-link vf-link--hover\">A text link with :hover</a>\n  <!-- Primary Visited -->\n  <a href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "link_href"), env.opts.autoescape);
output += "\" class=\"vf-link vf-link--visited\">A text link with :visited</a>\n  <!-- Primary Disabled -->\n  <a href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "link_href"), env.opts.autoescape);
output += "\" class=\"vf-link\" disabled>A text link that is disabled</a>\n\n  <p class=\"vf-u-margin__bottom--0 vf-text-body vf-text-body--2\">This is an example of using <a href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "link_href"), env.opts.autoescape);
output += "\">inline links</a> when you are using the <code>.vf-content</code> container.</p>\n</div>\n";
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
