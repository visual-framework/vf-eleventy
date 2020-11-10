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
var t_1 = "";t_1 += "\n### Grid Gap\n\nThe `gap` or gutter between grid items makes use of the `spacing` design tokens which use an incremental scale to determine the size computed in the browser in `rem`s.\nThis is where a value of `100` is equal to `.25rem`.\n\n| value | size (in `rem`) |\n|-----------|-----------------|\n| 100 | .25rem |\n| 200 | .5rem |\n| 400 | 1rem |\n| 500 | 1.25rem |\n| 600 | 1.5rem |\n| 800 | 2rem |\n| 1200 | 3rem |\n<br>\n";
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
output += "\n  <section class=\"vf-utility__examples | vf-content\">\n    <h4>vf-u-grid-gap</h4>\n\n    <article class=\"vf-utility--example vf-grid vf-grid__col-3 vf-u-grid-gap--100\">\n      <p><code>.vf-u-grid-gap--100</code></p>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n    </article>\n    <br>\n    <article class=\"vf-utility--example vf-grid vf-grid__col-3 vf-u-grid-gap--200\">\n      <p><code>.vf-u-grid-gap--200</code></p>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n    </article>\n    <br>\n    <article class=\"vf-utility--example vf-grid vf-grid__col-3 vf-u-grid-gap--400\">\n      <p><code>.vf-u-grid-gap--400</code></p>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n    </article>\n    <br>\n    <article class=\"vf-utility--example vf-grid vf-grid__col-3 vf-u-grid-gap--500\">\n      <p><code>.vf-u-grid-gap--500</code></p>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n    </article>\n    <br>\n    <article class=\"vf-utility--example vf-grid vf-grid__col-3 vf-u-grid-gap--600\">\n      <p><code>.vf-u-grid-gap--600</code></p>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n    </article>\n    <br>\n    <article class=\"vf-utility--example vf-grid vf-grid__col-3 vf-u-grid-gap--800\">\n      <p><code>.vf-u-grid-gap--800</code></p>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n    </article>\n    <br>\n    <br>\n    <hr class=\"vf-divider\">\n    <h4>vf-u-grid-column-gap</h4>\n    <article class=\"vf-utility--example vf-grid vf-grid__col-3 vf-u-grid-column-gap--100\">\n      <p><code>.vf-u-grid-gap--100</code></p>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n    </article>\n    <br>\n    <article class=\"vf-utility--example vf-grid vf-grid__col-3 vf-u-grid-column-gap--200\">\n      <p><code>.vf-u-grid-gap--200</code></p>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n    </article>\n    <br>\n    <article class=\"vf-utility--example vf-grid vf-grid__col-3 vf-u-grid-column-gap--400\">\n      <p><code>.vf-u-grid-gap--400</code></p>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n    </article>\n    <br>\n    <article class=\"vf-utility--example vf-grid vf-grid__col-3 vf-u-grid-column-gap--500\">\n      <p><code>.vf-u-grid-gap--500</code></p>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n    </article>\n    <br>\n    <article class=\"vf-utility--example vf-grid vf-grid__col-3 vf-u-grid-column-gap--600\">\n      <p><code>.vf-u-grid-gap--600</code></p>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n    </article>\n    <br>\n    <article class=\"vf-utility--example vf-grid vf-grid__col-3 vf-u-grid-column-gap--800\">\n      <p><code>.vf-u-grid-gap--800</code></p>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n    </article>\n    <br>\n    <br>\n    <hr class=\"vf-divider\">\n    <h4>vf-u-grid-row-gap</h4>\n    <article class=\"vf-utility--example vf-grid vf-grid__col-3 vf-u-grid-row-gap--100\">\n      <p><code>.vf-u-grid-gap--100</code></p>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n    </article>\n    <br>\n    <article class=\"vf-utility--example vf-grid vf-grid__col-3 vf-u-grid-row-gap--200\">\n      <p><code>.vf-u-grid-gap--200</code></p>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n    </article>\n    <br>\n    <article class=\"vf-utility--example vf-grid vf-grid__col-3 vf-u-grid-row-gap--400\">\n      <p><code>.vf-u-grid-gap--400</code></p>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n    </article>\n    <br>\n    <article class=\"vf-utility--example vf-grid vf-grid__col-3 vf-u-grid-row-gap--500\">\n      <p><code>.vf-u-grid-gap--500</code></p>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n    </article>\n    <br>\n    <article class=\"vf-utility--example vf-grid vf-grid__col-3 vf-u-grid-row-gap--600\">\n      <p><code>.vf-u-grid-gap--600</code></p>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n    </article>\n    <br>\n    <article class=\"vf-utility--example vf-grid vf-grid__col-3 vf-u-grid-row-gap--800\">\n      <p><code>.vf-u-grid-gap--800</code></p>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n    </article>\n\n  </section>\n</div>\n";
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
