/**
 * Precompiled Nunjucks template: vf-design-tokens--breakpoints.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["vf-design-tokens--breakpoints"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<main class=\"vf-grid vf-grid__col-3\">\n";
frame = frame.push();
var t_3 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "breakpoints")),"properties");
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
output += "\n\n<article class=\"vf-card\">\n  <div style=\"display: flex; justify-content: center; align-items: center;\">\n    <p class=\"\">";
output += runtime.suppressValue(runtime.memberLookup((t_4),"value"), env.opts.autoescape);
output += "</p>\n  </div>\n\n\n  <section class=\"vf-stack | vf-card__content\" style=\"--vf-stack-margin: .5rem;\">\n    <h3 class=\"vf-card__title\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"meta")),"friendlyName"), env.opts.autoescape);
output += "</h3>\n    <hr class=\"vf-divider\">\n    <p class=\"vf-card__text\">Sass:</p>\n      <p class=\"vf-card__text\"><code>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"meta")),"sassVariable"), env.opts.autoescape);
output += "</code></p>\n";
if(runtime.memberLookup((runtime.memberLookup((t_4),"meta")),"comment")) {
output += "    <hr class=\"vf-divider\">\n      <h4>notes:</h4>\n      <p class=\"vf-card__text\">\n        ";
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
