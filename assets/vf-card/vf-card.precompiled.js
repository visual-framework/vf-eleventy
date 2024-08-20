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
t_3 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"card_heading");
frame.set("card_heading", t_3, true);
if(frame.topLevel) {
context.setVariable("card_heading", t_3);
}
if(frame.topLevel) {
context.addExport("card_heading", t_3);
}
var t_4;
t_4 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"card_subtitle");
frame.set("card_subtitle", t_4, true);
if(frame.topLevel) {
context.setVariable("card_subtitle", t_4);
}
if(frame.topLevel) {
context.addExport("card_subtitle", t_4);
}
var t_5;
t_5 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"card_subheading");
frame.set("card_subheading", t_5, true);
if(frame.topLevel) {
context.setVariable("card_subheading", t_5);
}
if(frame.topLevel) {
context.addExport("card_subheading", t_5);
}
var t_6;
t_6 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"card_text");
frame.set("card_text", t_6, true);
if(frame.topLevel) {
context.setVariable("card_text", t_6);
}
if(frame.topLevel) {
context.addExport("card_text", t_6);
}
var t_7;
t_7 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"card_image");
frame.set("card_image", t_7, true);
if(frame.topLevel) {
context.setVariable("card_image", t_7);
}
if(frame.topLevel) {
context.addExport("card_image", t_7);
}
var t_8;
t_8 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"card_image__alt");
frame.set("card_image__alt", t_8, true);
if(frame.topLevel) {
context.setVariable("card_image__alt", t_8);
}
if(frame.topLevel) {
context.addExport("card_image__alt", t_8);
}
var t_9;
t_9 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"card_custom_aspect_ratio");
frame.set("card_custom_aspect_ratio", t_9, true);
if(frame.topLevel) {
context.setVariable("card_custom_aspect_ratio", t_9);
}
if(frame.topLevel) {
context.addExport("card_custom_aspect_ratio", t_9);
}
output += "\n";
var t_10;
t_10 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"theme");
frame.set("theme", t_10, true);
if(frame.topLevel) {
context.setVariable("theme", t_10);
}
if(frame.topLevel) {
context.addExport("theme", t_10);
}
var t_11;
t_11 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"newTheme");
frame.set("newTheme", t_11, true);
if(frame.topLevel) {
context.setVariable("newTheme", t_11);
}
if(frame.topLevel) {
context.addExport("newTheme", t_11);
}
var t_12;
t_12 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"variant");
frame.set("variant", t_12, true);
if(frame.topLevel) {
context.setVariable("variant", t_12);
}
if(frame.topLevel) {
context.addExport("variant", t_12);
}
output += "\n";
var t_13;
t_13 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"id");
frame.set("id", t_13, true);
if(frame.topLevel) {
context.setVariable("id", t_13);
}
if(frame.topLevel) {
context.addExport("id", t_13);
}
var t_14;
t_14 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"modifiers");
frame.set("modifiers", t_14, true);
if(frame.topLevel) {
context.setVariable("modifiers", t_14);
}
if(frame.topLevel) {
context.addExport("modifiers", t_14);
}
var t_15;
t_15 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"override_class");
frame.set("override_class", t_15, true);
if(frame.topLevel) {
context.setVariable("override_class", t_15);
}
if(frame.topLevel) {
context.addExport("override_class", t_15);
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
if(runtime.contextOrFrameLookup(context, frame, "newTheme")) {
if(runtime.contextOrFrameLookup(context, frame, "newTheme") == "primary") {
output += " vf-card--brand";
;
}
else {
output += " vf-card--";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "newTheme"), env.opts.autoescape);
;
}
;
}
if(runtime.contextOrFrameLookup(context, frame, "variant")) {
output += " vf-card--";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "variant"), env.opts.autoescape);
;
}
if(runtime.contextOrFrameLookup(context, frame, "modifiers")) {
output += " | ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "modifiers"), env.opts.autoescape);
;
}
if(runtime.contextOrFrameLookup(context, frame, "override_class")) {
output += " | ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "override_class"), env.opts.autoescape);
;
}
output += "\"\n";
if(runtime.contextOrFrameLookup(context, frame, "card_custom_aspect_ratio")) {
output += "  style=\"--vf-card__image--aspect-ratio: ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "card_custom_aspect_ratio"), env.opts.autoescape);
output += ";\"\n";
;
}
output += "  >\n\n";
if(runtime.contextOrFrameLookup(context, frame, "card_image")) {
output += "<img src=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "card_image"), env.opts.autoescape);
output += "\" alt=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "card_image__alt"), env.opts.autoescape);
output += "\" class=\"vf-card__image\" loading=\"lazy\">";
;
}
output += "\n  <div class=\"vf-card__content | vf-stack vf-stack--400\">";
if((runtime.contextOrFrameLookup(context, frame, "card_title")) || (runtime.contextOrFrameLookup(context, frame, "card_heading"))) {
output += "<h3 class=\"vf-card__heading\">";
if(runtime.contextOrFrameLookup(context, frame, "card_href")) {
output += "<a class=\"vf-card__link\" href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "card_href"), env.opts.autoescape);
output += "\">";
;
}
output += runtime.suppressValue((runtime.contextOrFrameLookup(context, frame, "card_title")) || (runtime.contextOrFrameLookup(context, frame, "card_heading")), env.opts.autoescape);
if(runtime.contextOrFrameLookup(context, frame, "card_href")) {
output += "        <svg aria-hidden=\"true\" class=\"vf-card__heading__icon | vf-icon vf-icon-arrow--inline-end\" width=\"1em\" height=\"1em\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12S18.627 0 12 0C5.376.008.008 5.376 0 12zm13.707-5.209l4.5 4.5a1 1 0 010 1.414l-4.5 4.5a1 1 0 01-1.414-1.414l2.366-2.367a.25.25 0 00-.177-.424H6a1 1 0 010-2h8.482a.25.25 0 00.177-.427l-2.366-2.368a1 1 0 011.414-1.414z\" fill=\"currentColor\" fill-rule=\"nonzero\"></path></svg>\n";
;
}
if(runtime.contextOrFrameLookup(context, frame, "card_href")) {
output += "</a>";
;
}
output += "</h3>";
;
}
if(runtime.contextOrFrameLookup(context, frame, "card_subheading")) {
output += "<p class=\"vf-card__subheading\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "card_subheading"), env.opts.autoescape);
output += "</p>";
;
}
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
output += "\n  </div>\n</article>\n";
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
