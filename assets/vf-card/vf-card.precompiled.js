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
output += "\n";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "card")),"card_href")) {
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
output += "\n\n";
output += "\n<";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "tags"), env.opts.autoescape);
output += "\n";
if(runtime.contextOrFrameLookup(context, frame, "tags") == "a") {
output += " href=\"";
output += runtime.suppressValue((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "card")),"card_href")?runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "card")),"card_href"):"#"), env.opts.autoescape);
output += "\"";
;
}
output += "\n  ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "card")),"id")) {
output += " id=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "card")),"id"), env.opts.autoescape);
output += "\"";
;
}
output += "\n  ";
output += "\n  class=\"vf-card";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "card")),"card_href")) {
output += " vf-card--is-link";
;
}
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "card")),"modifier")) {
output += " ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "card")),"modifier"), env.opts.autoescape);
;
}
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "card")),"override_class")) {
output += " | ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "card")),"override_class"), env.opts.autoescape);
;
}
output += "\">\n  <img src=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "card")),"card_image"), env.opts.autoescape);
output += "\" alt=\"\" class=\"vf-card__image\">\n  <div class=\"vf-card__content\">\n    <h3 class=\"vf-card__title\">\n      ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "card")),"card_title"), env.opts.autoescape);
output += "\n    </h3>\n    <p class=\"vf-card__text\">\n      ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "card")),"card_text"), env.opts.autoescape);
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
