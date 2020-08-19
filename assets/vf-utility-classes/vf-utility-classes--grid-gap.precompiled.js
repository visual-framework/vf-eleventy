/**
 * Precompiled Nunjucks template: vf-utility-classes--grid-gap.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["vf-utility-classes--grid-gap"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<style>\n  .vf-utility--example div {\n    background: green;\n    height: 40px;\n  }\n  .vf-utility--example p {\n    grid-column: 1 / -1;\n    margin-bottom: 0 !important;\n  }\n  .vf-utility__examples h4 {\n  }\n</style>\n<div class=\"vf-content\">\n\n";
output += runtime.suppressValue(env.getExtension("markdown")["run"](context,function(cb) {
if(!cb) { cb = function(err) { if(err) { throw err; }}}
var t_1 = "";t_1 += "\n### Grid Gap\n";
cb(null, t_1);
;
return t_1;
}
,function(cb) {
if(!cb) { cb = function(err) { if(err) { throw err; }}}
var t_2 = "";t_2 += 2;
cb(null, t_2);
;
return t_2;
}
), true && env.opts.autoescape);
output += "  <section class=\"vf-utility__examples | vf-content\">\n    <h4>vf-u-grid-gap</h4>\n\n    <article class=\"vf-utility--example vf-grid vf-grid__col-3 vf-u-grid-gap--xs\">\n      <p><code>.vf-u-grid-gap--xs</code></p>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n    </article>\n    <br>\n    <article class=\"vf-utility--example vf-grid vf-grid__col-3 vf-u-grid-gap--sm\">\n      <p><code>.vf-u-grid-gap--sm</code></p>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n    </article>\n    <br>\n    <article class=\"vf-utility--example vf-grid vf-grid__col-3 vf-u-grid-gap--md\">\n      <p><code>.vf-u-grid-gap--md</code></p>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n    </article>\n    <br>\n    <article class=\"vf-utility--example vf-grid vf-grid__col-3 vf-u-grid-gap--lg\">\n      <p><code>.vf-u-grid-gap--lg</code></p>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n    </article>\n    <br>\n    <article class=\"vf-utility--example vf-grid vf-grid__col-3 vf-u-grid-gap--xl\">\n      <p><code>.vf-u-grid-gap--xl</code></p>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n    </article>\n    <br>\n    <article class=\"vf-utility--example vf-grid vf-grid__col-3 vf-u-grid-gap--xxl\">\n      <p><code>.vf-u-grid-gap--xxl</code></p>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n    </article>\n    <br>\n    <br>\n    <hr class=\"vf-divider\">\n    <h4>vf-u-grid-column-gap</h4>\n    <article class=\"vf-utility--example vf-grid vf-grid__col-3 vf-u-grid-column-gap--xs\">\n      <p><code>.vf-u-grid-gap--xs</code></p>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n    </article>\n    <br>\n    <article class=\"vf-utility--example vf-grid vf-grid__col-3 vf-u-grid-column-gap--sm\">\n      <p><code>.vf-u-grid-gap--sm</code></p>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n    </article>\n    <br>\n    <article class=\"vf-utility--example vf-grid vf-grid__col-3 vf-u-grid-column-gap--md\">\n      <p><code>.vf-u-grid-gap--md</code></p>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n    </article>\n    <br>\n    <article class=\"vf-utility--example vf-grid vf-grid__col-3 vf-u-grid-column-gap--lg\">\n      <p><code>.vf-u-grid-gap--lg</code></p>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n    </article>\n    <br>\n    <article class=\"vf-utility--example vf-grid vf-grid__col-3 vf-u-grid-column-gap--xl\">\n      <p><code>.vf-u-grid-gap--xl</code></p>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n    </article>\n    <br>\n    <article class=\"vf-utility--example vf-grid vf-grid__col-3 vf-u-grid-column-gap--xxl\">\n      <p><code>.vf-u-grid-gap--xxl</code></p>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n    </article>\n    <br>\n    <br>\n    <hr class=\"vf-divider\">\n    <h4>vf-u-grid-row-gap</h4>\n    <article class=\"vf-utility--example vf-grid vf-grid__col-3 vf-u-grid-row-gap--xs\">\n      <p><code>.vf-u-grid-gap--xs</code></p>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n    </article>\n    <br>\n    <article class=\"vf-utility--example vf-grid vf-grid__col-3 vf-u-grid-row-gap--sm\">\n      <p><code>.vf-u-grid-gap--sm</code></p>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n    </article>\n    <br>\n    <article class=\"vf-utility--example vf-grid vf-grid__col-3 vf-u-grid-row-gap--md\">\n      <p><code>.vf-u-grid-gap--md</code></p>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n    </article>\n    <br>\n    <article class=\"vf-utility--example vf-grid vf-grid__col-3 vf-u-grid-row-gap--lg\">\n      <p><code>.vf-u-grid-gap--lg</code></p>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n    </article>\n    <br>\n    <article class=\"vf-utility--example vf-grid vf-grid__col-3 vf-u-grid-row-gap--xl\">\n      <p><code>.vf-u-grid-gap--xl</code></p>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n    </article>\n    <br>\n    <article class=\"vf-utility--example vf-grid vf-grid__col-3 vf-u-grid-row-gap--xxl\">\n      <p><code>.vf-u-grid-gap--xxl</code></p>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n    </article>\n\n  </section>\n</div>\n";
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
