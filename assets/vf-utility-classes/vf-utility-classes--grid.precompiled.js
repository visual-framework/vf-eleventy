/**
 * Precompiled Nunjucks template: vf-utility-classes--grid.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["vf-utility-classes--grid"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<style>\n.vf-u-grid-example {\n  grid-row-gap: 16px;\n  margin-bottom: 32px;\n}\n.vf-u-grid-example > div {\n  background-color: var(--vf-color--green);\n  padding: 16px;\n}\n</style>\n\n<div class=\"vf-u-grid-example | vf-grid vf-grid__col-6\">\n  <div class=\"vf-u-grid__col--span-1--xs\">.vf-u-grid__col--span-1--xs</div>\n  <div class=\"vf-u-grid__col--span-2--xs\">.vf-u-grid__col--span-2--xs</div>\n  <div class=\"vf-u-grid__col--span-3--xs\">.vf-u-grid__col--span-3--xs</div>\n</div>\n\n\n<div class=\"vf-content | vf-u-grid-example | vf-grid vf-grid__col-6\">\n  <div class=\"\n    vf-u-grid__col--span-1--sm\n    vf-u-grid__col--span-2--lg\n    vf-u-grid__col--span-3--xl\n  \">\n    <p>.vf-u-grid__col--span-1--sm</p>\n    <p>.vf-u-grid__col--span-2--lg</p>\n    <p>.vf-u-grid__col--span-3--xl</p>\n  </div>\n  <div class=\"\n    vf-u-grid__col--span-1--sm\n    vf-u-grid__col--span-2--lg\n    vf-u-grid__col--span-3--xl\n  \">\n    <p>.vf-u-grid__col--span-1--sm</p>\n    <p>.vf-u-grid__col--span-2--lg</p>\n    <p>.vf-u-grid__col--span-3--xl</p>\n  </div>\n  <div class=\"\n    vf-u-grid__col--span-1--sm\n    vf-u-grid__col--span-2--lg\n    vf-u-grid__col--span-3--xl\n  \">\n    <p>.vf-u-grid__col--span-1--sm</p>\n    <p>.vf-u-grid__col--span-2--lg</p>\n    <p>.vf-u-grid__col--span-3--xl</p>\n  </div>\n</div>\n";
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
