/**
 * Precompiled Nunjucks template: vf-cluster--custom-child-flex.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["vf-cluster--custom-child-flex"] = (function() {
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
output += "\">\n\n  <div class=\"vf-cluster__inner\">\n\n    <figure class=\"vf-figure\">\n      <img class=\"vf-figure__image\" src=\"../../assets/vf-figure/assets/figure-example.png\" alt=\"hello alt text\" loading=\"lazy\">\n      <figcaption class=\"vf-figure__caption\">Version, 1982, Adenovirus with 217 dots</figcaption>\n    </figure>\n    <figure class=\"vf-figure\">\n      <img class=\"vf-figure__image\" src=\"../../assets/vf-figure/assets/figure-example.png\" alt=\"hello alt text\" loading=\"lazy\">\n      <figcaption class=\"vf-figure__caption\">Version, 1982, Adenovirus with 217 dots</figcaption>\n    </figure>\n    <figure class=\"vf-figure\">\n      <img class=\"vf-figure__image\" src=\"../../assets/vf-figure/assets/figure-example.png\" alt=\"hello alt text\" loading=\"lazy\">\n      <figcaption class=\"vf-figure__caption\">Version, 1982, Adenovirus with 217 dots</figcaption>\n    </figure>\n    <figure class=\"vf-figure\">\n      <img class=\"vf-figure__image\" src=\"../../assets/vf-figure/assets/figure-example.png\" alt=\"hello alt text\" loading=\"lazy\">\n      <figcaption class=\"vf-figure__caption\">Version, 1982, Adenovirus with 217 dots</figcaption>\n    </figure>\n    <figure class=\"vf-figure\">\n      <img class=\"vf-figure__image\" src=\"../../assets/vf-figure/assets/figure-example.png\" alt=\"hello alt text\" loading=\"lazy\">\n      <figcaption class=\"vf-figure__caption\">Version, 1982, Adenovirus with 217 dots</figcaption>\n    </figure>\n\n  </div>\n</div>\n";
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
