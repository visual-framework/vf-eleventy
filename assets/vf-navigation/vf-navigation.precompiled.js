/**
 * Precompiled Nunjucks template: vf-navigation.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["vf-navigation"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
if(runtime.contextOrFrameLookup(context, frame, "global_layout")) {
output += " <div class=\"vf-global-layout--";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "global_layout"), env.opts.autoescape);
if(runtime.contextOrFrameLookup(context, frame, "global_theme")) {
output += " vf-global-theme--";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "global_theme"), env.opts.autoescape);
;
}
output += "\">";
;
}
output += "<nav class=\"vf-navigation";
if(runtime.contextOrFrameLookup(context, frame, "classModifier")) {
output += " vf-navigation--";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "classModifier"), env.opts.autoescape);
;
}
output += "\">\n";
if(runtime.contextOrFrameLookup(context, frame, "heading")) {
output += "  <h3 class=\"vf-navigation__heading\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "heading"), env.opts.autoescape);
output += "</h3>\n";
;
}
output += "  <ul class=\"vf-navigation__list | vf-list--inline\">\n";
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "navigation");
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
output += "    <li class=\"vf-navigation__item\">\n      <a href=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"navigation_href"), env.opts.autoescape);
output += "\" class=\"vf-navigation__link\">";
output += runtime.suppressValue(runtime.memberLookup((t_4),"text"), env.opts.autoescape);
output += "</a>\n    </li>\n";
;
}
}
frame = frame.pop();
output += "  </ul>\n</nav>\n";
if(runtime.contextOrFrameLookup(context, frame, "global_layout")) {
output += "</div>";
;
}
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
