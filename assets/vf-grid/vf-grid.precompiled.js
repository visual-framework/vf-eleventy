/**
 * Precompiled Nunjucks template: vf-grid.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["vf-grid"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<div class=\"vf-body\">\n  <div class=\"vf-grid\">\n    <div></div>\n  </div>\n\n  <div class=\"vf-grid\">\n    <div>auto layout</div>\n    <div>auto layout</div>\n    <div>auto layout</div>\n    <div>auto layout</div>\n    <div>auto layout</div>\n  </div>\n\n  <div class=\"vf-grid | vf-grid__col-2\">\n    <div>vf-grid__col-2</div>\n    <div></div>\n  </div>\n\n  <div class=\"vf-grid | vf-grid__col-3\">\n    <div>vf-grid__col-3</div>\n    <div></div>\n    <div></div>\n  </div>\n\n  <div class=\"vf-grid | vf-grid__col-4\">\n    <div>vf-grid__col-4</div>\n    <div></div>\n    <div></div>\n    <div></div>\n  </div>\n\n  <div class=\"vf-grid | vf-grid__col-5\">\n    <div>vf-grid__col-5</div>\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n  </div>\n\n  <div class=\"vf-grid | vf-grid__col-6\">\n    <div>vf-grid__col-6</div>\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n  </div>\n</div>\n\n<style>\n.vf-grid > div {\n  /* For illustrative use on component demo page */\n  background-color: rgb(41, 141, 211);\n  min-height: 5em;\n  margin-bottom: 1em;\n}\n</style>\n";
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
