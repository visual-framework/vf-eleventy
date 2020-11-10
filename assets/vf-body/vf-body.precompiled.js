/**
 * Precompiled Nunjucks template: vf-body.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["vf-body"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<div class=\"vf-body\">\n  <div class=\"vf-box vf-box--normal vf-box-theme--primary\">\n    <p class=\"vf-ui-color--white vf-u-margin--0 vf-u-type__text-body--2\">This is for example purposes only. Please use the <code>vf-body</code> class on the <code>body</code> element only.</p>\n  </div>\n</div>\n";
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
