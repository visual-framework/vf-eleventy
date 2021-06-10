/**
 * Precompiled Nunjucks template: vf-summary--has-decorative-image.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["vf-summary--has-decorative-image"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
if(runtime.contextOrFrameLookup(context, frame, "context")) {
var t_1;
t_1 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"summary__href");
frame.set("summary__href", t_1, true);
if(frame.topLevel) {
context.setVariable("summary__href", t_1);
}
if(frame.topLevel) {
context.addExport("summary__href", t_1);
}
var t_2;
t_2 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"summary__title");
frame.set("summary__title", t_2, true);
if(frame.topLevel) {
context.setVariable("summary__title", t_2);
}
if(frame.topLevel) {
context.addExport("summary__title", t_2);
}
var t_3;
t_3 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"summary__text");
frame.set("summary__text", t_3, true);
if(frame.topLevel) {
context.setVariable("summary__text", t_3);
}
if(frame.topLevel) {
context.addExport("summary__text", t_3);
}
var t_4;
t_4 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"summary__image");
frame.set("summary__image", t_4, true);
if(frame.topLevel) {
context.setVariable("summary__image", t_4);
}
if(frame.topLevel) {
context.addExport("summary__image", t_4);
}
var t_5;
t_5 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"summary__image_alt");
frame.set("summary__image_alt", t_5, true);
if(frame.topLevel) {
context.setVariable("summary__image_alt", t_5);
}
if(frame.topLevel) {
context.addExport("summary__image_alt", t_5);
}
var t_6;
t_6 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"summary__date");
frame.set("summary__date", t_6, true);
if(frame.topLevel) {
context.setVariable("summary__date", t_6);
}
if(frame.topLevel) {
context.addExport("summary__date", t_6);
}
var t_7;
t_7 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"summary__category");
frame.set("summary__category", t_7, true);
if(frame.topLevel) {
context.setVariable("summary__category", t_7);
}
if(frame.topLevel) {
context.addExport("summary__category", t_7);
}
;
}
output += "\n<article class=\"vf-summary vf-summary--news\">\n  <span class=\"vf-summary__date\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "summary__date"), env.opts.autoescape);
output += "</span>\n  <img class=\"vf-summary__image\" src=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "summary__image"), env.opts.autoescape);
output += "\" alt=\"";
if(runtime.contextOrFrameLookup(context, frame, "summary__image_alt") == "decorative") {
;
}
else {
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "summary__image_alt"), env.opts.autoescape);
;
}
output += "\"\n";
if(runtime.contextOrFrameLookup(context, frame, "summary__image_alt") == "decorative") {
output += "role=\"presentation\"";
;
}
output += "  loading=\"lazy\">\n  <h3 class=\"vf-summary__title\">\n    <a href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "summary__href"), env.opts.autoescape);
output += "\" class=\"vf-summary__link\">\n      ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "summary__title"), env.opts.autoescape);
output += "\n    </a>\n  </h3>\n  <p class=\"vf-summary__text\">\n";
if(runtime.contextOrFrameLookup(context, frame, "summary__category")) {
output += "    <span class=\"vf-summary__category\">\n      ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "summary__category"), env.opts.autoescape);
output += "\n    </span>\n";
;
}
output += "    ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "summary__text"), env.opts.autoescape);
output += "\n  </p>\n</article>\n";
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
