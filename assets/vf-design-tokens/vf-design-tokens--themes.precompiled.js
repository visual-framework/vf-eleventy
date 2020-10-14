/**
 * Precompiled Nunjucks template: vf-design-tokens--themes.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["vf-design-tokens--themes"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<style>\n/* vf-swatches might one day be a component, but for now it's CSS we'll just use for the design token demonstration */\n.vf-swatches {\n  grid-row-gap: 32px;\n  margin: 48px 0;\n}\n.vf-swatch {\n  border: 1px solid #d0d0ce;\n  display: grid;\n  grid-template-rows: 160px 1fr;\n}\n\n.vf-swatch__details {\n  padding: 16px;\n  border-top: 1px solid #d0d0ce;\n}\n.vf-swatch:nth-of-type(3),\n.vf-swatch:nth-of-type(5) {\n  grid-column-start: 1;\n}\n.vf-swatch__colour {\n  /* margin: 16px;\n  height: calc(100% - 32px);\n  width: calc(100% - 32px); */\n  height: 100%;\n  width: 100%;\n}\n.vf-swatch__colour-name {\n  margin: 0 0 12px 0;\n}\n\n.vf-swatch__colour-hex,\n.vf-swatch__sass-variable,\n.vf-swatch__comment,\n.vf-swatch__css-property {\n  margin: 0 0 12px 0;\n}\n.vf-swatch__colour-hex {\n  text-transform: uppercase;\n}\n.vf-swatch__colour-hex,\n.vf-swatch__sass-variable,\n.vf-swatch__css-property {\n  font-family: monospace;\n  font-size: 1em;\n  align-items: start;\n}\n\n.vf-swatch__colour-hex,\n.vf-swatch__sass-variable,\n.vf-swatch__css-property {\n  font-family: 'IBM Plex Mono', Monaco, Consolas, 'Lucida Console', monospace;\n  font-size: 14px;\n}\n\n.vf-swatch__notes {\n  margin: 12px 0 0px 0;\n}\n\n.vf-swatch__notes,\n.vf-swatch__colour-name,\n.vf-swatch__meta {\n  font-family: 'IBM Plex Sans', Helvetica, Arial, sans-serif;\n}\n.vf-swatch__colour-name {\n  padding: 16px;\n}\n\n.vf-swatch__meta {\n  font-size: 16px;\n}\n\n.vf-swatch__details p {\n  margin-bottom: 16px;\n}\n.vf-swatch__details p:last-of-type {\n  margin-bottom: 0;\n}\n</style>\n\n\n<main class=\"vf-swatches | vf-grid vf-grid__col-3\">\n";
frame = frame.push();
var t_3 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "themes")),"properties");
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
output += "\n\n<article class=\"vf-swatch\">\n  <div class=\"vf-swatch__colour\" style=\"background-color: ";
output += runtime.suppressValue(runtime.memberLookup((t_4),"value"), env.opts.autoescape);
output += ";\">\n  </div>\n\n  <section class=\"vf-swatch__details\">\n    <h3 class=\"vf-swatch__colour-name\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"meta")),"friendlyName"), env.opts.autoescape);
output += "</h3>\n    <hr class=\"vf-divider\">\n    <p>Colour code:</p>\n    <p class=\"vf-swatch__colour-hex\">";
output += runtime.suppressValue(runtime.memberLookup((t_4),"value"), env.opts.autoescape);
output += "</p>\n    <p class=\"vf-swatch__colour-hex\">";
output += runtime.suppressValue(env.getFilter("hextorgb").call(context, runtime.memberLookup((t_4),"value")), env.opts.autoescape);
output += "</p>\n";
if(runtime.memberLookup((runtime.memberLookup((t_4),"meta")),"sassVariable")) {
output += "    <hr class=\"vf-divider\">\n    <p>Sass:</p>\n      <p class=\"vf-swatch__sass-variable\">$";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"meta")),"sassVariable"), env.opts.autoescape);
output += "</p>\n      <p class=\"vf-swatch__sass-variable\">map-get($vf-themes-map, ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"meta")),"sassVariable"), env.opts.autoescape);
output += ")</p>\n";
;
}
if(runtime.memberLookup((runtime.memberLookup((t_4),"meta")),"CSSCustomProperty")) {
output += "    <hr class=\"vf-divider\">\n    <p>CSS custom property:</p>\n      <p class=\"vf-swatch__css-property\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"meta")),"CSSCustomProperty"), env.opts.autoescape);
output += "</p>\n";
;
}
if(runtime.memberLookup((runtime.memberLookup((t_4),"meta")),"comment")) {
output += "      <h4 class=\"vf-swatch__notes\">notes:</h4>\n      <p class=\"vf-swatch__comment\">\n        ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"meta")),"comment"), env.opts.autoescape);
output += "\n      </p>\n";
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
