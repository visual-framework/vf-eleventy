/**
 * Precompiled Nunjucks template: vf-summary--event.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["vf-summary--event"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<article class=\"vf-summary vf-summary--event\">\n  <p class=\"vf-summary__date\">04 September</p>\n  <h3 class=\"vf-summary__title\">\n    <a href=\"###\" class=\"vf-summary__link\">Executive Masters in Management of Research Infrastructures</a>\n  </h3>\n  <p class=\"vf-summary__text\">This Masters development programme is aimed at current Research Infrastructures managers and leaders who wish to develop the competencies required to meet the needs of Research Infrastructures in the planning, construction and operation phases.</p>\n  <p class=\"vf-summary__text\">EMBO Workshop</p>\n  <p class=\"vf-summary__location\">Heidelberg</p>\n\n</article>\n";
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
