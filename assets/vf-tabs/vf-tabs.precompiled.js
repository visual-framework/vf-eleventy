/**
 * Precompiled Nunjucks template: vf-tabs.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["vf-tabs"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<div class=\"vf-tabs\">\n  <ul class=\"vf-tabs__list\" data-vf-js-tabs>";
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "tabs");
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
output += "<li class=\"vf-tabs__item\">\n      <a class=\"vf-tabs__link\" href=\"#vf-tabs__section--";
output += runtime.suppressValue(runtime.memberLookup((t_4),"tab_number"), env.opts.autoescape);
output += "\">";
output += runtime.suppressValue(runtime.memberLookup((t_4),"tab_title"), env.opts.autoescape);
output += "</a>\n    </li>";
;
}
}
frame = frame.pop();
output += "</ul>\n</div>\n\n<div class=\"vf-tabs-content\" data-vf-js-tabs-content>\n";
frame = frame.push();
var t_7 = runtime.contextOrFrameLookup(context, frame, "tabs");
if(t_7) {t_7 = runtime.fromIterator(t_7);
var t_6 = t_7.length;
for(var t_5=0; t_5 < t_7.length; t_5++) {
var t_8 = t_7[t_5];
frame.set("item", t_8);
frame.set("loop.index", t_5 + 1);
frame.set("loop.index0", t_5);
frame.set("loop.revindex", t_6 - t_5);
frame.set("loop.revindex0", t_6 - t_5 - 1);
frame.set("loop.first", t_5 === 0);
frame.set("loop.last", t_5 === t_6 - 1);
frame.set("loop.length", t_6);
output += "  <section class=\"vf-tabs__section\" id=\"vf-tabs__section--";
output += runtime.suppressValue(runtime.memberLookup((t_8),"tab_number"), env.opts.autoescape);
output += "\">\n    <h2>";
output += runtime.suppressValue(runtime.memberLookup((t_8),"tab_heading"), env.opts.autoescape);
output += "</h2>\n    <p>";
output += runtime.suppressValue(runtime.memberLookup((t_8),"tab_content"), env.opts.autoescape);
output += "</p>\n  </section>\n";
;
}
}
frame = frame.pop();
output += "</div>\n";
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
