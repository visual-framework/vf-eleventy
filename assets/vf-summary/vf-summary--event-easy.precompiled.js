/**
 * Precompiled Nunjucks template: vf-summary--event-easy.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["vf-summary--event-easy"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<a href=\"JavaScript:Void(0);\" class=\"vf-summary vf-summary--event | vf-summary--is-link vf-summary--easy vf-summary-theme--primary\">\n  <p class=\"vf-summary__date\">04 September</p>\n  <h3 class=\"vf-summary__title\">EMBL Course: Data Visualisation for Biology: A Practical Workshop on Design, Techniques and Tools</h3>\n  <p class=\"vf-summary__text\">EMBO Workshop</p>\n  <p class=\"vf-summary__location\">Heidelberg</p>\n\n  <svg class=\"vf-summary__icon | vf-icon vf-icon-arrow--right\" width=\"24\" height=\"24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M23.6 11.289l-9.793-9.7a2.607 2.607 0 00-3.679.075 2.638 2.638 0 00-.068 3.689l3.871 3.714a.25.25 0 01-.173.43H2.135A2.28 2.28 0 00.1 12c0 .815.448 2.51 2 2.51h11.679a.25.25 0 01.177.427l-3.731 3.733a2.66 2.66 0 003.758 3.754l9.625-9.72a1 1 0 00-.008-1.415z\" fill=\"\" fill-rule=\"nonzero\"/></svg>\n</a>\n";
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
