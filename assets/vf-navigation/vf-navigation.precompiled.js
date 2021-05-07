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
if(runtime.contextOrFrameLookup(context, frame, "context")) {
var t_1;
t_1 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"classModifier");
frame.set("classModifier", t_1, true);
if(frame.topLevel) {
context.setVariable("classModifier", t_1);
}
if(frame.topLevel) {
context.addExport("classModifier", t_1);
}
var t_2;
t_2 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"heading");
frame.set("heading", t_2, true);
if(frame.topLevel) {
context.setVariable("heading", t_2);
}
if(frame.topLevel) {
context.addExport("heading", t_2);
}
var t_3;
t_3 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"navigation");
frame.set("navigation", t_3, true);
if(frame.topLevel) {
context.setVariable("navigation", t_3);
}
if(frame.topLevel) {
context.addExport("navigation", t_3);
}
;
}
output += "<nav class=\"vf-navigation";
if(runtime.contextOrFrameLookup(context, frame, "classModifier")) {
output += " vf-navigation--";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "classModifier"), env.opts.autoescape);
;
}
if(runtime.contextOrFrameLookup(context, frame, "classModifier") == "additional") {
output += " | vf-u-fullbleed";
;
}
else {
output += " | vf-cluster";
;
}
output += "\">\n";
if(runtime.contextOrFrameLookup(context, frame, "heading")) {
output += "  <h3 class=\"vf-navigation__heading\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "heading"), env.opts.autoescape);
output += "</h3>\n";
;
}
output += "  <ul class=\"vf-navigation__list | vf-list | vf-cluster__inner\">\n";
frame = frame.push();
var t_6 = runtime.contextOrFrameLookup(context, frame, "navigation");
if(t_6) {t_6 = runtime.fromIterator(t_6);
var t_5 = t_6.length;
for(var t_4=0; t_4 < t_6.length; t_4++) {
var t_7 = t_6[t_4];
frame.set("item", t_7);
frame.set("loop.index", t_4 + 1);
frame.set("loop.index0", t_4);
frame.set("loop.revindex", t_5 - t_4);
frame.set("loop.revindex0", t_5 - t_4 - 1);
frame.set("loop.first", t_4 === 0);
frame.set("loop.last", t_4 === t_5 - 1);
frame.set("loop.length", t_5);
output += "    <li class=\"vf-navigation__item\">\n      <a\n      href=\"";
output += runtime.suppressValue(runtime.memberLookup((t_7),"navigation_href"), env.opts.autoescape);
output += "\"\n      class=\"vf-navigation__link\"\n";
if(runtime.memberLookup((t_7),"currentPage")) {
output += " aria-current=\"page\"";
;
}
output += ">";
output += runtime.suppressValue(runtime.memberLookup((t_7),"text"), env.opts.autoescape);
output += "</a>\n    </li>\n";
;
}
}
frame = frame.pop();
output += "  </ul>\n</nav>\n";
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
