/**
 * Precompiled Nunjucks template: vf-design-tokens--typography.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["vf-design-tokens--typography"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<main class=\"vf-swatches | vf-grid vf-grid__col-2\">\n\n";
frame = frame.push();
var t_3 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "typography")),"properties");
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
output += "\n<article class=\"vf-swatch\">\n  <div class=\"vf-swatch__colour\">\n    <h3 class=\"vf-swatch__colour-name\">\n      ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"meta")),"friendlyName"), env.opts.autoescape);
output += "\n    </h3>\n  </div>\n\n  <section class=\"vf-swatch__details\">\n    <p style=\"font-size: ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"value")),"fontSize"), env.opts.autoescape);
output += "; font-weight: ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"value")),"fontWeight"), env.opts.autoescape);
output += "; line-height: ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"value")),"lineHeight"), env.opts.autoescape);
output += "\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"meta")),"pangram"), env.opts.autoescape);
output += "</p>\n  </section>\n  <ul class=\"\">\n    <li><span>Font Size: </span>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"value")),"fontSize"), env.opts.autoescape);
output += "</li>\n    <li><span>Font Weight: </span>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"value")),"fontWeight"), env.opts.autoescape);
output += "</li>\n    <li><span>Ling Height: </span>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"value")),"lineHeight"), env.opts.autoescape);
output += "</li>\n  </ul>\n";
output += runtime.suppressValue(env.getExtension("markdown")["run"](context,function(cb) {
if(!cb) { cb = function(err) { if(err) { throw err; }}}
var t_5 = "";cb(null, t_5);
;
return t_5;
}
,function(cb) {
if(!cb) { cb = function(err) { if(err) { throw err; }}}
var t_6 = "";t_6 += 4;
cb(null, t_6);
;
return t_6;
}
), true && env.opts.autoescape);
output += "  <ul>\n    <li><span>Sass: </span><code>@mixin set-type(`";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"meta")),"sassMap"), env.opts.autoescape);
output += "`)</code></li>\n  </ul>\n</article>\n";
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
