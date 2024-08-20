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
var t_4;
t_4 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"activateJavascript");
frame.set("activateJavascript", t_4, true);
if(frame.topLevel) {
context.setVariable("activateJavascript", t_4);
}
if(frame.topLevel) {
context.addExport("activateJavascript", t_4);
}
;
}
output += "<nav class=\"vf-navigation";
if(runtime.contextOrFrameLookup(context, frame, "classModifier")) {
output += " vf-navigation--";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "classModifier"), env.opts.autoescape);
;
}
if(runtime.contextOrFrameLookup(context, frame, "classModifier") == "on-this-page") {
output += " | vf-u-fullbleed";
;
}
output += " | vf-cluster\">\n  <ul class=\"vf-navigation__list | vf-list | vf-cluster__inner\"";
if(runtime.contextOrFrameLookup(context, frame, "classModifier") == "on-this-page" && runtime.contextOrFrameLookup(context, frame, "activateJavascript") == true) {
output += " data-vf-js-navigation-on-this-page-container=\"true\"";
;
}
if(runtime.contextOrFrameLookup(context, frame, "classModifier") == "on-this-page" && runtime.contextOrFrameLookup(context, frame, "activateJavascript") == false) {
output += " data-vf-js-navigation-on-this-page-container=\"false\"";
;
}
output += ">\n";
if(runtime.contextOrFrameLookup(context, frame, "heading")) {
output += "<li class=\"vf-navigation__item\">\n      ";
output += "\n      ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "heading"), env.opts.autoescape);
output += "\n    </li>";
;
}
frame = frame.push();
var t_7 = runtime.contextOrFrameLookup(context, frame, "navigation");
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
output += "    <li class=\"vf-navigation__item\">\n      <a\n      href=\"";
output += runtime.suppressValue(runtime.memberLookup((t_8),"navigation_href"), env.opts.autoescape);
output += "\"\n      class=\"vf-navigation__link\"";
if(runtime.memberLookup((t_8),"currentPage")) {
output += " aria-current=\"page\"";
;
}
if(runtime.memberLookup((t_8),"currentSection")) {
output += " aria-selected=\"true\"";
;
}
output += ">";
output += runtime.suppressValue(runtime.memberLookup((t_8),"text"), env.opts.autoescape);
output += "</a>\n    </li>";
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
