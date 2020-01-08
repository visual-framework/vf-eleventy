/**
 * Precompiled Nunjucks template: vf-no-js.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["vf-no-js"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<script>\n// Detect if JS is on and swap vf-no-js for vf-js on the html element\n(function(H){H.className=H.className.replace(/\\bvf-no-js\\b/,'vf-js')})(document.documentElement);\n</script>\n";
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
