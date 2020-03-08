/**
 * Precompiled Nunjucks template: vf-box.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["vf-box"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "box")),"deprecated_text")) {
output += "<!-- ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "box")),"deprecated_text"), env.opts.autoescape);
output += " -->";
;
}
if(runtime.contextOrFrameLookup(context, frame, "context")) {
var t_1;
t_1 = runtime.contextOrFrameLookup(context, frame, "context");
frame.set("box", t_1, true);
if(frame.topLevel) {
context.setVariable("box", t_1);
}
if(frame.topLevel) {
context.addExport("box", t_1);
}
;
}
output += "\n";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "box")),"box_href")) {
var t_2;
t_2 = "a";
frame.set("tags", t_2, true);
if(frame.topLevel) {
context.setVariable("tags", t_2);
}
if(frame.topLevel) {
context.addExport("tags", t_2);
}
;
}
else {
var t_3;
t_3 = "div";
frame.set("tags", t_3, true);
if(frame.topLevel) {
context.setVariable("tags", t_3);
}
if(frame.topLevel) {
context.addExport("tags", t_3);
}
;
}
output += "<";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "tags"), env.opts.autoescape);
output += "\n";
if(runtime.contextOrFrameLookup(context, frame, "tags") == "a") {
output += " href=\"";
output += runtime.suppressValue((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "box")),"box_href")?runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "box")),"box_href"):"#"), env.opts.autoescape);
output += "\"";
;
}
output += "\n  ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "box")),"id")) {
output += " id=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "box")),"id"), env.opts.autoescape);
output += "\"";
;
}
output += "\n  ";
output += "\n  class=\"vf-box";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "box")),"box_href")) {
output += " vf-box--is-link";
;
}
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "box")),"box_modifier")) {
output += " ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "box")),"box_modifier"), env.opts.autoescape);
;
}
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "box")),"override_class")) {
output += " | ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "box")),"override_class"), env.opts.autoescape);
;
}
output += "\">\n  <h3 class=\"vf-box__heading\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "box")),"box_heading"), env.opts.autoescape);
output += "</h3>\n  <p class=\"vf-box__text\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "box")),"box_text"), env.opts.autoescape);
output += "</p>\n</";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "tags"), env.opts.autoescape);
output += ">\n";
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
