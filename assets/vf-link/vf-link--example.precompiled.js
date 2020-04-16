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
output += "\n<div class=\"vf-grid vf-u-padding--lg\">\n  <!-- Primary -->\n  <a href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "link_href"), env.opts.autoescape);
output += "\" class=\"vf-link vf-link--primary \">A primary link</a>\n  <!-- Primary Hover -->\n  <a href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "link_href"), env.opts.autoescape);
output += "\" class=\"vf-link vf-link--primary vf-link--hover\">A primary:hover link</a>\n  <!-- Primary Visited -->\n  <a href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "link_href"), env.opts.autoescape);
output += "\" class=\"vf-link vf-link--primary vf-link--visited\">A primary:visited link</a>\n  <!-- Primary Disabled -->\n  <a href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "link_href"), env.opts.autoescape);
output += "\" class=\"vf-link vf-link--primary vf-link--disabled\" disabled>A disabled primary link</a>\n</div>\n<div class=\"vf-grid vf-u-background-color--grey--dark vf-u-padding--lg\">\n  <!-- Primary -->\n  <a href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "link_href"), env.opts.autoescape);
output += "\" class=\"vf-link vf-link--primary \">A primary link</a>\n  <!-- Primary Hover -->\n  <a href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "link_href"), env.opts.autoescape);
output += "\" class=\"vf-link vf-link--primary vf-link--hover\">A primary:hover link</a>\n  <!-- Primary Visited -->\n  <a href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "link_href"), env.opts.autoescape);
output += "\" class=\"vf-link vf-link--primary vf-link--visited\">A primary:visited link</a>\n  <!-- Primary Disabled -->\n  <a href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "link_href"), env.opts.autoescape);
output += "\" class=\"vf-link vf-link--primary vf-link--disabled\" disabled>A disabled primary link</a>\n</div>\n<div class=\"vf-grid vf-u-padding--lg\">\n  <!-- Secondary -->\n  <a href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "link_href"), env.opts.autoescape);
output += "\" class=\"vf-link vf-link--secondary \">A secondary link</a>\n  <!-- Secondary Hover -->\n  <a href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "link_href"), env.opts.autoescape);
output += "\" class=\"vf-link vf-link--secondary vf-link--secondary--hover\">A secondary:hover link</a>\n  <!-- Secondary Visited -->\n  <a href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "link_href"), env.opts.autoescape);
output += "\" class=\"vf-link vf-link--secondary vf-link--secondary--visited\">A secondary:visited link</a>\n  <!-- Secondary Disabled -->\n  <a href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "link_href"), env.opts.autoescape);
output += "\" class=\"vf-link vf-link--secondary vf-link--disabled\" disabled>A disabled secondary link</a>\n</div>\n<div class=\"vf-grid vf-u-background-color--grey--dark vf-u-padding--lg\">\n  <!-- Secondary -->\n  <a href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "link_href"), env.opts.autoescape);
output += "\" class=\"vf-link vf-link--secondary \">A secondary link</a>\n  <!-- Secondary Hover -->\n  <a href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "link_href"), env.opts.autoescape);
output += "\" class=\"vf-link vf-link--secondary vf-link--secondary--hover\">A secondary:hover link</a>\n  <!-- Secondary Visited -->\n  <a href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "link_href"), env.opts.autoescape);
output += "\" class=\"vf-link vf-link--secondary vf-link--secondary--visited\">A secondary:visited link</a>\n  <!-- Secondary Disabled -->\n  <a href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "link_href"), env.opts.autoescape);
output += "\" class=\"vf-link vf-link--secondary vf-link--disabled\" disabled>A disabled secondary link</a>\n</div>\n\n\n<div class=\"vf-grid vf-u-padding--lg vf-content\">\n  <p class=\"vf-u-margin__bottom--0 vf-text-body vf-text-body--2\">This is an example of using <a href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "link_href"), env.opts.autoescape);
output += "\">inline links</a> when you are using the <code>.vf-content</code> container.</p>\n</div>\n\n\n<div class=\"vf-grid | vf-u-padding--lg vf-u-background-color--grey--dark | vf-content\">\n  <p class=\"vf-u-margin__bottom--0 vf-u-text-color--ui--white vf-text-body vf-text-body--2\">This is an example of using <a href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "link_href"), env.opts.autoescape);
output += "\">inline links</a> when you are using the <code class=\"vf-u-text-color--ui--black\">.vf-content</code> container and the parent of the text also has a class for dark backgrounds.</p>\n</div>\n";
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
