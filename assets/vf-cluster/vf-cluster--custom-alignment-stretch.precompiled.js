/**
 * Precompiled Nunjucks template: vf-cluster--custom-alignment-stretch.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["vf-cluster--custom-alignment-stretch"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<div class=\"vf-cluster";
if(runtime.contextOrFrameLookup(context, frame, "cluster__spacing")) {
output += " vf-cluster--";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "cluster__spacing"), env.opts.autoescape);
;
}
output += "\"";
if(runtime.contextOrFrameLookup(context, frame, "cluster_custom_alignment") || runtime.contextOrFrameLookup(context, frame, "cluster_custom_spacing") || runtime.contextOrFrameLookup(context, frame, "cluster_child_flex")) {
output += " style=\"";
if(runtime.contextOrFrameLookup(context, frame, "cluster_custom_alignment")) {
output += "--vf-cluster-alignment: ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "cluster_custom_alignment"), env.opts.autoescape);
output += ";";
;
}
if(runtime.contextOrFrameLookup(context, frame, "cluster_custom_spacing")) {
output += " --vf-cluster-margin: ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "cluster_custom_spacing"), env.opts.autoescape);
output += ";";
;
}
if(runtime.contextOrFrameLookup(context, frame, "cluster_child_flex")) {
output += " --vf-cluster__item--flex: ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "cluster_child_flex"), env.opts.autoescape);
output += ";";
;
}
;
}
output += "\">\n\n  <div class=\"vf-cluster__inner\">\n\n    <div class=\"vf-box vf-box-theme--primary vf-box--normal\">\n      <h3 class=\"vf-box__heading\">Did you know?</h3>\n      <p class=\"vf-box__text\">This is some more content that would be in the box. These examples also have make use of the <code>--vf-cluster__item--width</code> to minimise the width so you can see the differences in alignment.</p>\n    </div>\n    <div class=\"vf-box vf-box-theme--primary vf-box--normal\">\n      <h3 class=\"vf-box__heading\">Did you know?</h3>\n      <p class=\"vf-box__text\">This is even more content that would be in the box. So much information it spans multiple lines.</p>\n    </div>\n    <div class=\"vf-box vf-box-theme--primary vf-box--normal\">\n      <h3 class=\"vf-box__heading\">Did you know?</h3>\n      <p class=\"vf-box__text\">This is some more content that would be in the box.</p>\n    </div>\n    <div class=\"vf-box vf-box-theme--primary vf-box--normal\">\n      <h3 class=\"vf-box__heading\">Did you know?</h3>\n      <p class=\"vf-box__text\">This is even more content that would be in the box. So much information it spans multiple lines.</p>\n    </div>\n  </div>\n</div>\n";
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
