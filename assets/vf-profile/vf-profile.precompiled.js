/**
 * Precompiled Nunjucks template: vf-profile.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["vf-profile"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
if(runtime.contextOrFrameLookup(context, frame, "context")) {
output += "\n";
var t_1;
t_1 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"id");
frame.set("id", t_1, true);
if(frame.topLevel) {
context.setVariable("id", t_1);
}
if(frame.topLevel) {
context.addExport("id", t_1);
}
var t_2;
t_2 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"modifiers");
frame.set("modifiers", t_2, true);
if(frame.topLevel) {
context.setVariable("modifiers", t_2);
}
if(frame.topLevel) {
context.addExport("modifiers", t_2);
}
var t_3;
t_3 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"override_class");
frame.set("override_class", t_3, true);
if(frame.topLevel) {
context.setVariable("override_class", t_3);
}
if(frame.topLevel) {
context.addExport("override_class", t_3);
}
output += "\n";
var t_4;
t_4 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"theme");
frame.set("theme", t_4, true);
if(frame.topLevel) {
context.setVariable("theme", t_4);
}
if(frame.topLevel) {
context.addExport("theme", t_4);
}
var t_5;
t_5 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"variant");
frame.set("variant", t_5, true);
if(frame.topLevel) {
context.setVariable("variant", t_5);
}
if(frame.topLevel) {
context.addExport("variant", t_5);
}
output += "\n";
var t_6;
t_6 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"profile__size");
frame.set("profile__size", t_6, true);
if(frame.topLevel) {
context.setVariable("profile__size", t_6);
}
if(frame.topLevel) {
context.addExport("profile__size", t_6);
}
output += "\n";
var t_7;
t_7 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"profile__image");
frame.set("profile__image", t_7, true);
if(frame.topLevel) {
context.setVariable("profile__image", t_7);
}
if(frame.topLevel) {
context.addExport("profile__image", t_7);
}
var t_8;
t_8 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"profile__image_alt");
frame.set("profile__image_alt", t_8, true);
if(frame.topLevel) {
context.setVariable("profile__image_alt", t_8);
}
if(frame.topLevel) {
context.addExport("profile__image_alt", t_8);
}
output += "\n";
var t_9;
t_9 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"profile__name_href");
frame.set("profile__name_href", t_9, true);
if(frame.topLevel) {
context.setVariable("profile__name_href", t_9);
}
if(frame.topLevel) {
context.addExport("profile__name_href", t_9);
}
var t_10;
t_10 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"profile__name");
frame.set("profile__name", t_10, true);
if(frame.topLevel) {
context.setVariable("profile__name", t_10);
}
if(frame.topLevel) {
context.addExport("profile__name", t_10);
}
var t_11;
t_11 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"profile__text");
frame.set("profile__text", t_11, true);
if(frame.topLevel) {
context.setVariable("profile__text", t_11);
}
if(frame.topLevel) {
context.addExport("profile__text", t_11);
}
var t_12;
t_12 = runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"item")),"profile__email_address");
frame.set("profile__email_address", t_12, true);
if(frame.topLevel) {
context.setVariable("profile__email_address", t_12);
}
if(frame.topLevel) {
context.addExport("profile__email_address", t_12);
}
var t_13;
t_13 = runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"item")),"profile__email");
frame.set("profile__email", t_13, true);
if(frame.topLevel) {
context.setVariable("profile__email", t_13);
}
if(frame.topLevel) {
context.addExport("profile__email", t_13);
}
var t_14;
t_14 = runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"item")),"profile__phone_number");
frame.set("profile__phone_number", t_14, true);
if(frame.topLevel) {
context.setVariable("profile__phone_number", t_14);
}
if(frame.topLevel) {
context.addExport("profile__phone_number", t_14);
}
var t_15;
t_15 = runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"item")),"profile__phone");
frame.set("profile__phone", t_15, true);
if(frame.topLevel) {
context.setVariable("profile__phone", t_15);
}
if(frame.topLevel) {
context.addExport("profile__phone", t_15);
}
var t_16;
t_16 = runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"item")),"profile__mobile_number");
frame.set("profile__mobile_number", t_16, true);
if(frame.topLevel) {
context.setVariable("profile__mobile_number", t_16);
}
if(frame.topLevel) {
context.addExport("profile__mobile_number", t_16);
}
var t_17;
t_17 = runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"item")),"profile__mobile");
frame.set("profile__mobile", t_17, true);
if(frame.topLevel) {
context.setVariable("profile__mobile", t_17);
}
if(frame.topLevel) {
context.addExport("profile__mobile", t_17);
}
var t_18;
t_18 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"profile__uuid_href");
frame.set("profile__uuid_href", t_18, true);
if(frame.topLevel) {
context.setVariable("profile__uuid_href", t_18);
}
if(frame.topLevel) {
context.addExport("profile__uuid_href", t_18);
}
var t_19;
t_19 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"profile__uuid");
frame.set("profile__uuid", t_19, true);
if(frame.topLevel) {
context.setVariable("profile__uuid", t_19);
}
if(frame.topLevel) {
context.addExport("profile__uuid", t_19);
}
;
}
output += "<article";
if(runtime.contextOrFrameLookup(context, frame, "id")) {
output += " id=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id"), env.opts.autoescape);
output += "\"";
;
}
output += "\n  class=\"vf-profile";
if(runtime.contextOrFrameLookup(context, frame, "theme")) {
output += " vf-profile-theme--";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "theme"), env.opts.autoescape);
;
}
if(runtime.contextOrFrameLookup(context, frame, "variant")) {
output += " vf-profile--";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "variant"), env.opts.autoescape);
;
}
if(runtime.contextOrFrameLookup(context, frame, "size")) {
output += " vf-profile--";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "size"), env.opts.autoescape);
;
}
else {
output += " vf-profile--medium";
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
if(runtime.contextOrFrameLookup(context, frame, "layout") == runtime.contextOrFrameLookup(context, frame, "block")) {
output += " vf-profile--block";
;
}
else {
output += " vf-profile--inline";
;
}
output += "\">\n";
if(runtime.contextOrFrameLookup(context, frame, "hide_profile__image") == true) {
;
}
else {
output += "  <img class=\"vf-profile__image\" src=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "profile__image"), env.opts.autoescape);
output += "\" alt=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "profile__image_alt"), env.opts.autoescape);
output += "\" loading=\"lazy\">\n";
;
}
output += "\n";
if(runtime.contextOrFrameLookup(context, frame, "hide_profile__title") == true) {
;
}
else {
output += "  <h3 class=\"vf-profile__title\">\n";
if(runtime.contextOrFrameLookup(context, frame, "profile__name_href")) {
output += "    <a href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "profile__name_href"), env.opts.autoescape);
output += "\" class=\"vf-profile__link\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "profile__name"), env.opts.autoescape);
output += "</a>\n";
;
}
else {
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "profile__name"), env.opts.autoescape);
;
}
output += "  </h3>\n";
;
}
output += "\n";
if(runtime.contextOrFrameLookup(context, frame, "hide_profile__job_title") == true) {
;
}
else {
if(runtime.contextOrFrameLookup(context, frame, "profile__job_title")) {
output += "      <p class=\"vf-profile__job-title\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "profile__job_title"), env.opts.autoescape);
output += "</p>\n";
;
}
;
}
output += "\n";
if(runtime.contextOrFrameLookup(context, frame, "hide_profile__text") == true) {
;
}
else {
if(runtime.contextOrFrameLookup(context, frame, "profile__text")) {
output += "      <p class=\"vf-profile__text\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "profile__text"), env.opts.autoescape);
output += "</p>\n";
;
}
;
}
output += "\n";
if(runtime.contextOrFrameLookup(context, frame, "profile__emails")) {
if(runtime.contextOrFrameLookup(context, frame, "hide_profile__emails") == true) {
;
}
else {
frame = frame.push();
var t_22 = runtime.contextOrFrameLookup(context, frame, "profile__emails");
if(t_22) {t_22 = runtime.fromIterator(t_22);
var t_21 = t_22.length;
for(var t_20=0; t_20 < t_22.length; t_20++) {
var t_23 = t_22[t_20];
frame.set("item", t_23);
frame.set("loop.index", t_20 + 1);
frame.set("loop.index0", t_20);
frame.set("loop.revindex", t_21 - t_20);
frame.set("loop.revindex0", t_21 - t_20 - 1);
frame.set("loop.first", t_20 === 0);
frame.set("loop.last", t_20 === t_21 - 1);
frame.set("loop.length", t_21);
output += "        <p class=\"vf-profile__email\">\n          <a href=\"mailto:";
output += runtime.suppressValue(runtime.memberLookup((t_23),"profile__email_address"), env.opts.autoescape);
output += "\" class=\"vf-profile__link vf-profile__link--secondary\">";
output += runtime.suppressValue(runtime.memberLookup((t_23),"profile__email_address"), env.opts.autoescape);
output += "</a>\n        </p>\n";
;
}
}
frame = frame.pop();
;
}
;
}
output += "\n";
if(runtime.contextOrFrameLookup(context, frame, "profile__phones")) {
if(runtime.contextOrFrameLookup(context, frame, "hide_profile__phones") == true) {
;
}
else {
frame = frame.push();
var t_26 = runtime.contextOrFrameLookup(context, frame, "profile__phones");
if(t_26) {t_26 = runtime.fromIterator(t_26);
var t_25 = t_26.length;
for(var t_24=0; t_24 < t_26.length; t_24++) {
var t_27 = t_26[t_24];
frame.set("item", t_27);
frame.set("loop.index", t_24 + 1);
frame.set("loop.index0", t_24);
frame.set("loop.revindex", t_25 - t_24);
frame.set("loop.revindex0", t_25 - t_24 - 1);
frame.set("loop.first", t_24 === 0);
frame.set("loop.last", t_24 === t_25 - 1);
frame.set("loop.length", t_25);
output += "        <p class=\"vf-profile__phone";
if(runtime.memberLookup((t_27),"mobile") == true) {
output += " vf-profile__phone--mobile";
;
}
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"last")) {
output += " | vf-u-last-item ";
;
}
output += "\">\n          <a href=\"tel:";
output += runtime.suppressValue(runtime.memberLookup((t_27),"profile__phone_number"), env.opts.autoescape);
output += "\" class=\"vf-profile__link vf-profile__link--secondary\">";
output += runtime.suppressValue(runtime.memberLookup((t_27),"profile__phone_number"), env.opts.autoescape);
output += "</a>\n        </p>\n";
;
}
}
frame = frame.pop();
;
}
;
}
output += "\n";
if(runtime.contextOrFrameLookup(context, frame, "profile__uuid")) {
if(runtime.contextOrFrameLookup(context, frame, "hide_profile__uuid") == true) {
;
}
else {
output += "      <p class=\"vf-profile__uuid\">\n        <span>ORCID:</span>\n        <a class=\"vf-profile__link vf-profile__link--secondary\" href=\"https://europepmc.org/authors/";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "profile__uuid_href"), env.opts.autoescape);
output += "\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "profile__uuid"), env.opts.autoescape);
output += "</a>\n      </p>\n";
;
}
;
}
output += "\n</article>\n";
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
