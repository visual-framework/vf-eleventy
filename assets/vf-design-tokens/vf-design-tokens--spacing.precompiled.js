/**
 * Precompiled Nunjucks template: vf-design-tokens--spacing.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["vf-design-tokens--spacing"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "\n<style>\n.swatches {\n    grid-row-gap: 32px;\n}\n.swatch {\n  border: 2px solid #333;\n}\n.swatch__details {\n  padding: 16px;\n}\n.spacing__example {\n  border-bottom: 2px solid #333;\n  background-color: #f3f3f3;\n  display: flex;\n  width: 100%;\n  height: 200px;\n  justify-content: center;\n  align-items: center;\n}\n</style>\n<main class=\"swatches | vf-grid vf-grid__col-4\">\n";
frame = frame.push();
var t_3 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "spacing")),"properties");
if(t_3) {t_3 = runtime.fromIterator(t_3);
var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("item", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\n<article class=\"swatch\">\n  <div class=\"spacing__example\">\n    <item class=\"spacing\" style=\"height: ";
output += runtime.suppressValue(runtime.memberLookup((t_4),"value"), env.opts.autoescape);
output += "; width: ";
output += runtime.suppressValue(runtime.memberLookup((t_4),"value"), env.opts.autoescape);
output += "; background: #009f4d;\"></item>\n  </div>\n  <section class=\"swatch__details\">\n  <h3 class=\"swatch__colour-name\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"meta")),"friendlyName"), env.opts.autoescape);
output += "</h3>\n  <p class=\"swatch__colour-hex\"><span class=\"swatch__meta\">Value: </span>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"value"), env.opts.autoescape);
output += "</p>\n";
if(runtime.memberLookup((runtime.memberLookup((t_4),"meta")),"sassVariable")) {
output += "  <p class=\"swatch__sass-variable\"><span class=\"swatch__meta\">Sass Variable: </span>`";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"meta")),"sassVariable"), env.opts.autoescape);
output += "`</p>\n";
;
}
if(runtime.memberLookup((runtime.memberLookup((t_4),"meta")),"CSSCustomProperty")) {
output += "  <p class=\"swatch__css-property\"><span class=\"swatch__meta\">CSS: </span>`";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"meta")),"CSSCustomProperty"), env.opts.autoescape);
output += "`</p>\n";
;
}
if(runtime.memberLookup((runtime.memberLookup((t_4),"meta")),"comment")) {
output += "  <h4 class=\"swatch__notes\">notes:</h4>\n  <p class=\"swatch__comment\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"meta")),"comment"), env.opts.autoescape);
output += "</p>\n";
;
}
output += "  </section>\n</article>\n\n";
;
}
}
if (!t_2) {
output += "\n<p>Something went wrong.</p>\n\n";
}
frame = frame.pop();
output += "</main>\n";
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
