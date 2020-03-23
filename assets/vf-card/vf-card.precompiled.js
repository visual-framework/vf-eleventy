/**
 * Precompiled Nunjucks template: vf-card.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["vf-card"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
if(runtime.contextOrFrameLookup(context, frame, "context")) {
var t_1;
t_1 = runtime.contextOrFrameLookup(context, frame, "context");
frame.set("card", t_1, true);
if(frame.topLevel) {
context.setVariable("card", t_1);
}
if(frame.topLevel) {
context.addExport("card", t_1);
}
;
}
if(runtime.contextOrFrameLookup(context, frame, "card")) {
var t_2;
t_2 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "card")),"card_href");
frame.set("card_href", t_2, true);
if(frame.topLevel) {
context.setVariable("card_href", t_2);
}
if(frame.topLevel) {
context.addExport("card_href", t_2);
}
var t_3;
t_3 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "card")),"id");
frame.set("id", t_3, true);
if(frame.topLevel) {
context.setVariable("id", t_3);
}
if(frame.topLevel) {
context.addExport("id", t_3);
}
var t_4;
t_4 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "card")),"modifier");
frame.set("modifier", t_4, true);
if(frame.topLevel) {
context.setVariable("modifier", t_4);
}
if(frame.topLevel) {
context.addExport("modifier", t_4);
}
var t_5;
t_5 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "card")),"override_class");
frame.set("override_class", t_5, true);
if(frame.topLevel) {
context.setVariable("override_class", t_5);
}
if(frame.topLevel) {
context.addExport("override_class", t_5);
}
var t_6;
t_6 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "card")),"card_image");
frame.set("card_image", t_6, true);
if(frame.topLevel) {
context.setVariable("card_image", t_6);
}
if(frame.topLevel) {
context.addExport("card_image", t_6);
}
var t_7;
t_7 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "card")),"card_title");
frame.set("card_title", t_7, true);
if(frame.topLevel) {
context.setVariable("card_title", t_7);
}
if(frame.topLevel) {
context.addExport("card_title", t_7);
}
var t_8;
t_8 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "card")),"card_text");
frame.set("card_text", t_8, true);
if(frame.topLevel) {
context.setVariable("card_text", t_8);
}
if(frame.topLevel) {
context.addExport("card_text", t_8);
}
;
}
output += "\n";
if(runtime.contextOrFrameLookup(context, frame, "card_href")) {
var t_9;
t_9 = "a";
frame.set("tags", t_9, true);
if(frame.topLevel) {
context.setVariable("tags", t_9);
}
if(frame.topLevel) {
context.addExport("tags", t_9);
}
;
}
else {
var t_10;
t_10 = "div";
frame.set("tags", t_10, true);
if(frame.topLevel) {
context.setVariable("tags", t_10);
}
if(frame.topLevel) {
context.addExport("tags", t_10);
}
;
}
output += "\n\n";
output += "\n<";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "tags"), env.opts.autoescape);
output += "\n";
if(runtime.contextOrFrameLookup(context, frame, "tags") == "a") {
output += " href=\"";
output += runtime.suppressValue((runtime.contextOrFrameLookup(context, frame, "card_href")?runtime.contextOrFrameLookup(context, frame, "card_href"):"#"), env.opts.autoescape);
output += "\"";
;
}
output += "\n  ";
if(runtime.contextOrFrameLookup(context, frame, "id")) {
output += " id=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id"), env.opts.autoescape);
output += "\"";
;
}
output += "\n  ";
output += "\n  class=\"vf-card";
if(runtime.contextOrFrameLookup(context, frame, "card_href")) {
output += " vf-card--is-link";
;
}
if(runtime.contextOrFrameLookup(context, frame, "modifier")) {
output += " ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "modifier"), env.opts.autoescape);
;
}
if(runtime.contextOrFrameLookup(context, frame, "override_class")) {
output += " | ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "override_class"), env.opts.autoescape);
;
}
output += "\">\n  <img src=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "card_image"), env.opts.autoescape);
output += "\" alt=\"\" class=\"vf-card__image\">\n  <div class=\"vf-card__content\">\n    <h3 class=\"vf-card__title\">\n      ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "card_title"), env.opts.autoescape);
output += "\n    </h3>\n    <p class=\"vf-card__text\">\n      ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "card_text"), env.opts.autoescape);
output += "\n    </p>\n  </div>\n</";
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
