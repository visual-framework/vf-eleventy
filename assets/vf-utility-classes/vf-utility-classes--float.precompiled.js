/**
 * Precompiled Nunjucks template: vf-utility-classes--float.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["vf-utility-classes--float"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<style>\n  .vf-utility__examples {\n    /* display: grid; */\n    /* grid-template-columns: max-content 1fr; */\n    /* grid-column-gap: 1em; */\n  }\n  .vf-utility--example {\n    display: grid;\n    grid-template-columns: max-content 1fr;\n    grid-column: 1 / -1;\n    grid-column-gap: 1em;\n    margin-bottom: 1em;\n    /* grid-template-columns: subgrid; */\n  }\n  .vf-utility--example p {\n    grid-column: 1 / span 1;\n    margin-bottom: 0 !important;\n  }\n  .vf-utility--example div {\n    align-self: center;\n    grid-column: 2 / span 1;\n    height: 1em;\n  }\n\n</style>\n<div class=\"vf-content\">\n\n";
output += runtime.suppressValue(env.getExtension("markdown")["run"](context,function(cb) {
if(!cb) { cb = function(err) { if(err) { throw err; }}}
var t_1 = "";t_1 += "\n### Layout\n";
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
output += "  <section class=\"vf-utility__examples | vf-content\">\n    <h4>Floats</h4>\n    <p>Use the utility clasees <code>.vf-u-float__left</code> and <code>.vf-u-float__right</code> to set elements to float. Use <code>.vf-u-clearfix</code> to clear elements if needed on the parent element.</p>\n    <article class=\"vf-utility--example\">\n      <p><code>.vf-u-float__left</code></p>\n      <div class=\"vf-u-clearfix\">\n        <span class=\"vf-u-float__left\">Lorem ipsum dolor sit</span>\n      </div>\n    </article>\n    <article class=\"vf-utility--example\">\n      <p><code>.vf-u-float__right</code></p>\n      <div class=\"vf-u-clearfix\">\n        <span class=\"vf-u-float__right\">Lorem ipsum dolor sit</span>\n      </div>\n    </article>\n    <article class=\"vf-utility--example\">\n      <p><code>.vf-u-float__none</code></p>\n      <div class=\"vf-u-clearfix\">\n        <span class=\"vf-u-float__none\">Lorem ipsum dolor sit</span>\n      </div>\n    </article>\n    <h4>Responsive Floats</h4>\n    <p>At 360px</p>\n    <article class=\"vf-utility--example\">\n      <p><code>.vf-u-float__left--xs</code></p>\n      <div class=\"vf-u-clearfix\">\n        <span class=\"vf-u-float__left--xs\">Lorem ipsum dolor sit</span>\n      </div>\n    </article>\n    <article class=\"vf-utility--example\">\n      <p><code>.vf-u-float__right--xs</code></p>\n      <div class=\"vf-u-clearfix\">\n        <span class=\"vf-u-float__right--xs\">Lorem ipsum dolor sit</span>\n      </div>\n    </article>\n    <article class=\"vf-utility--example\">\n      <p><code>.vf-u-float__none--xs</code></p>\n      <div class=\"vf-u-clearfix\">\n        <span class=\"vf-u-float__none--xs\">Lorem ipsum dolor sit</span>\n      </div>\n    </article>\n    <p>At 699px</p>\n    <article class=\"vf-utility--example\">\n      <p><code>.vf-u-float__left--sm</code></p>\n      <div class=\"vf-u-clearfix\">\n        <span class=\"vf-u-float__left--sm\">Lorem ipsum dolor sit</span>\n      </div>\n    </article>\n    <article class=\"vf-utility--example\">\n      <p><code>.vf-u-float__right--sm</code></p>\n      <div class=\"vf-u-clearfix\">\n        <span class=\"vf-u-float__right--sm\">Lorem ipsum dolor sit</span>\n      </div>\n    </article>\n    <article class=\"vf-utility--example\">\n      <p><code>.vf-u-float__none--sm</code></p>\n      <div class=\"vf-u-clearfix\">\n        <span class=\"vf-u-float__none--sm\">Lorem ipsum dolor sit</span>\n      </div>\n    </article>\n    <p>At 800px</p>\n    <article class=\"vf-utility--example\">\n      <p><code>.vf-u-float__left--md</code></p>\n      <div class=\"vf-u-clearfix\">\n        <span class=\"vf-u-float__left--md\">Lorem ipsum dolor sit</span>\n      </div>\n    </article>\n    <article class=\"vf-utility--example\">\n      <p><code>.vf-u-float__right--md</code></p>\n      <div class=\"vf-u-clearfix\">\n        <span class=\"vf-u-float__right--md\">Lorem ipsum dolor sit</span>\n      </div>\n    </article>\n    <article class=\"vf-utility--example\">\n      <p><code>.vf-u-float__none--md</code></p>\n      <div class=\"vf-u-clearfix\">\n        <span class=\"vf-u-float__none--md\">Lorem ipsum dolor sit</span>\n      </div>\n    </article>\n    <p>At 1024px</p>\n    <article class=\"vf-utility--example\">\n      <p><code>.vf-u-float__left--lg</code></p>\n      <div class=\"vf-u-clearfix\">\n        <span class=\"vf-u-float__left--lg\">Lorem ipsum dolor sit</span>\n      </div>\n    </article>\n    <article class=\"vf-utility--example\">\n      <p><code>.vf-u-float__right--lg</code></p>\n      <div class=\"vf-u-clearfix\">\n        <span class=\"vf-u-float__right--lg\">Lorem ipsum dolor sit</span>\n      </div>\n    </article>\n    <article class=\"vf-utility--example\">\n      <p><code>.vf-u-float__none--lg</code></p>\n      <div class=\"vf-u-clearfix\">\n        <span class=\"vf-u-float__none--lg\">Lorem ipsum dolor sit</span>\n      </div>\n    </article>\n    <p>At 1200px</p>\n    <article class=\"vf-utility--example\">\n      <p><code>.vf-u-float__left--xl</code></p>\n      <div class=\"vf-u-clearfix\">\n        <span class=\"vf-u-float__left--xl\">Lorem ipsum dolor sit</span>\n      </div>\n    </article>\n    <article class=\"vf-utility--example\">\n      <p><code>.vf-u-float__right--xl</code></p>\n      <div class=\"vf-u-clearfix\">\n        <span class=\"vf-u-float__right--xl\">Lorem ipsum dolor sit</span>\n      </div>\n    </article>\n    <article class=\"vf-utility--example\">\n      <p><code>.vf-u-float__none--xl</code></p>\n      <div class=\"vf-u-clearfix\">\n        <span class=\"vf-u-float__none--xl\">Lorem ipsum dolor sit</span>\n      </div>\n    </article>\n\n  </section>\n\n</div>\n";
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
