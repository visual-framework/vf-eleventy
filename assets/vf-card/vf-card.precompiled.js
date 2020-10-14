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
t_1 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"card_href");
frame.set("card_href", t_1, true);
if(frame.topLevel) {
context.setVariable("card_href", t_1);
}
if(frame.topLevel) {
context.addExport("card_href", t_1);
}
output += "\n";
var t_2;
t_2 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"card_title");
frame.set("card_title", t_2, true);
if(frame.topLevel) {
context.setVariable("card_title", t_2);
}
if(frame.topLevel) {
context.addExport("card_title", t_2);
}
var t_3;
t_3 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"card_subtitle");
frame.set("card_subtitle", t_3, true);
if(frame.topLevel) {
context.setVariable("card_subtitle", t_3);
}
if(frame.topLevel) {
context.addExport("card_subtitle", t_3);
}
var t_4;
t_4 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"card_text");
frame.set("card_text", t_4, true);
if(frame.topLevel) {
context.setVariable("card_text", t_4);
}
if(frame.topLevel) {
context.addExport("card_text", t_4);
}
var t_5;
t_5 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"card_image");
frame.set("card_image", t_5, true);
if(frame.topLevel) {
context.setVariable("card_image", t_5);
}
if(frame.topLevel) {
context.addExport("card_image", t_5);
}
var t_6;
t_6 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"card_image__alt");
frame.set("card_image__alt", t_6, true);
if(frame.topLevel) {
context.setVariable("card_image__alt", t_6);
}
if(frame.topLevel) {
context.addExport("card_image__alt", t_6);
}
output += "\n";
var t_7;
t_7 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"theme");
frame.set("theme", t_7, true);
if(frame.topLevel) {
context.setVariable("theme", t_7);
}
if(frame.topLevel) {
context.addExport("theme", t_7);
}
var t_8;
t_8 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"variant");
frame.set("variant", t_8, true);
if(frame.topLevel) {
context.setVariable("variant", t_8);
}
if(frame.topLevel) {
context.addExport("variant", t_8);
}
output += "\n";
var t_9;
t_9 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"id");
frame.set("id", t_9, true);
if(frame.topLevel) {
context.setVariable("id", t_9);
}
if(frame.topLevel) {
context.addExport("id", t_9);
}
var t_10;
t_10 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"modifiers");
frame.set("modifiers", t_10, true);
if(frame.topLevel) {
context.setVariable("modifiers", t_10);
}
if(frame.topLevel) {
context.addExport("modifiers", t_10);
}
var t_11;
t_11 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"override_class");
frame.set("override_class", t_11, true);
if(frame.topLevel) {
context.setVariable("override_class", t_11);
}
if(frame.topLevel) {
context.addExport("override_class", t_11);
}
;
}
output += "<article\n";
if(runtime.contextOrFrameLookup(context, frame, "tags") == "a") {
output += "href=\"";
output += runtime.suppressValue((runtime.contextOrFrameLookup(context, frame, "card_href")?runtime.contextOrFrameLookup(context, frame, "card_href"):"#"), env.opts.autoescape);
output += "\"";
;
}
if(runtime.contextOrFrameLookup(context, frame, "id")) {
output += " id=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id"), env.opts.autoescape);
output += "\"";
;
}
output += "\n  class=\"vf-card";
if(runtime.contextOrFrameLookup(context, frame, "theme")) {
output += " vf-card-theme--";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "theme"), env.opts.autoescape);
;
}
if(runtime.contextOrFrameLookup(context, frame, "variant")) {
output += " vf-card--";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "variant"), env.opts.autoescape);
;
}
if(runtime.contextOrFrameLookup(context, frame, "modifier")) {
output += " | ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "modifier"), env.opts.autoescape);
;
}
if(runtime.contextOrFrameLookup(context, frame, "override_class")) {
output += " | ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "override_class"), env.opts.autoescape);
;
}
output += "\">\n\n";
if(runtime.contextOrFrameLookup(context, frame, "card_image")) {
output += "<img src=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "card_image"), env.opts.autoescape);
output += "\" alt=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "card_image__alt"), env.opts.autoescape);
output += "\" class=\"vf-card__image\" loading=\"lazy\">";
;
}
output += "\n  <div class=\"vf-card__content\">\n\n    <";
if(runtime.contextOrFrameLookup(context, frame, "card_title")) {
output += "h3";
;
}
else {
output += "span";
;
}
output += " class=\"vf-card__title\">";
if(runtime.contextOrFrameLookup(context, frame, "card_href")) {
output += "<a class=\"vf-card__link\" href=\"";
output += runtime.suppressValue((runtime.contextOrFrameLookup(context, frame, "card_href")?runtime.contextOrFrameLookup(context, frame, "card_href"):"#"), env.opts.autoescape);
output += "\">";
;
}
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "card_title"), env.opts.autoescape);
if(runtime.contextOrFrameLookup(context, frame, "card_href")) {
output += "</a>";
;
}
if(runtime.contextOrFrameLookup(context, frame, "card_title")) {
output += "</h3>";
;
}
else {
output += "</span>";
;
}
output += "\n";
if(runtime.contextOrFrameLookup(context, frame, "card_subtitle")) {
output += "<p class=\"vf-card__subtitle\" role=\"doc-subtitle\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "card_subtitle"), env.opts.autoescape);
output += "</p>";
;
}
output += "\n";
if(runtime.contextOrFrameLookup(context, frame, "card_text")) {
output += "<p class=\"vf-card__text\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "card_text"), env.opts.autoescape);
output += "</p>";
;
}
output += "  </div>\n\n</article>\n";
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
