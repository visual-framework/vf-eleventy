/**
 * Precompiled Nunjucks template: vf-hero.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["vf-hero"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
if(runtime.contextOrFrameLookup(context, frame, "context")) {
output += "\n";
var t_1;
t_1 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"vf_hero_image");
frame.set("vf_hero_image", t_1, true);
if(frame.topLevel) {
context.setVariable("vf_hero_image", t_1);
}
if(frame.topLevel) {
context.addExport("vf_hero_image", t_1);
}
output += "\n";
var t_2;
t_2 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"vf_hero_heading");
frame.set("vf_hero_heading", t_2, true);
if(frame.topLevel) {
context.setVariable("vf_hero_heading", t_2);
}
if(frame.topLevel) {
context.addExport("vf_hero_heading", t_2);
}
var t_3;
t_3 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"vf_hero_heading_additional");
frame.set("vf_hero_heading_additional", t_3, true);
if(frame.topLevel) {
context.setVariable("vf_hero_heading_additional", t_3);
}
if(frame.topLevel) {
context.addExport("vf_hero_heading_additional", t_3);
}
var t_4;
t_4 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"vf_hero_subheading");
frame.set("vf_hero_subheading", t_4, true);
if(frame.topLevel) {
context.setVariable("vf_hero_subheading", t_4);
}
if(frame.topLevel) {
context.addExport("vf_hero_subheading", t_4);
}
var t_5;
t_5 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"vf_hero_text");
frame.set("vf_hero_text", t_5, true);
if(frame.topLevel) {
context.setVariable("vf_hero_text", t_5);
}
if(frame.topLevel) {
context.addExport("vf_hero_text", t_5);
}
output += "\n";
var t_6;
t_6 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"striped");
frame.set("striped", t_6, true);
if(frame.topLevel) {
context.setVariable("striped", t_6);
}
if(frame.topLevel) {
context.addExport("striped", t_6);
}
var t_7;
t_7 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"inverted");
frame.set("inverted", t_7, true);
if(frame.topLevel) {
context.setVariable("inverted", t_7);
}
if(frame.topLevel) {
context.addExport("inverted", t_7);
}
var t_8;
t_8 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"theme");
frame.set("theme", t_8, true);
if(frame.topLevel) {
context.setVariable("theme", t_8);
}
if(frame.topLevel) {
context.addExport("theme", t_8);
}
var t_9;
t_9 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"newTheme");
frame.set("newTheme", t_9, true);
if(frame.topLevel) {
context.setVariable("newTheme", t_9);
}
if(frame.topLevel) {
context.addExport("newTheme", t_9);
}
var t_10;
t_10 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"flush");
frame.set("flush", t_10, true);
if(frame.topLevel) {
context.setVariable("flush", t_10);
}
if(frame.topLevel) {
context.addExport("flush", t_10);
}
var t_11;
t_11 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"offset");
frame.set("offset", t_11, true);
if(frame.topLevel) {
context.setVariable("offset", t_11);
}
if(frame.topLevel) {
context.addExport("offset", t_11);
}
var t_12;
t_12 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"block");
frame.set("block", t_12, true);
if(frame.topLevel) {
context.setVariable("block", t_12);
}
if(frame.topLevel) {
context.addExport("block", t_12);
}
var t_13;
t_13 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"centered");
frame.set("centered", t_13, true);
if(frame.topLevel) {
context.setVariable("centered", t_13);
}
if(frame.topLevel) {
context.addExport("centered", t_13);
}
var t_14;
t_14 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"spacing");
frame.set("spacing", t_14, true);
if(frame.topLevel) {
context.setVariable("spacing", t_14);
}
if(frame.topLevel) {
context.addExport("spacing", t_14);
}
output += "\n";
var t_15;
t_15 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"id");
frame.set("id", t_15, true);
if(frame.topLevel) {
context.setVariable("id", t_15);
}
if(frame.topLevel) {
context.addExport("id", t_15);
}
var t_16;
t_16 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"modifier_class");
frame.set("modifier_class", t_16, true);
if(frame.topLevel) {
context.setVariable("modifier_class", t_16);
}
if(frame.topLevel) {
context.addExport("modifier_class", t_16);
}
var t_17;
t_17 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"override_class");
frame.set("override_class", t_17, true);
if(frame.topLevel) {
context.setVariable("override_class", t_17);
}
if(frame.topLevel) {
context.addExport("override_class", t_17);
}
;
}
output += "\n\n<section\n  class=\"vf-hero\n  ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "modifier_class"), env.opts.autoescape);
if(runtime.contextOrFrameLookup(context, frame, "striped")) {
output += " vf-hero--striped";
;
}
if(runtime.contextOrFrameLookup(context, frame, "inverted")) {
output += " vf-hero--inverted";
;
}
if(runtime.contextOrFrameLookup(context, frame, "theme")) {
output += " vf-hero-theme--";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "theme"), env.opts.autoescape);
;
}
if(runtime.contextOrFrameLookup(context, frame, "newTheme")) {
output += " vf-hero--";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "newTheme"), env.opts.autoescape);
;
}
output += "\n";
if(runtime.contextOrFrameLookup(context, frame, "flush")) {
output += " vf-hero--flush";
;
}
output += "\n";
if(runtime.contextOrFrameLookup(context, frame, "offset")) {
output += " vf-hero--offset";
;
}
output += "\n";
if(runtime.contextOrFrameLookup(context, frame, "block")) {
output += " vf-hero--block";
;
}
output += "\n";
if(runtime.contextOrFrameLookup(context, frame, "centered")) {
output += " vf-hero--centered";
;
}
output += "\n";
if(runtime.contextOrFrameLookup(context, frame, "spacing")) {
output += " vf-hero--";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "spacing"), env.opts.autoescape);
;
}
output += "   | vf-u-fullbleed\"\n\n  style=\"\n";
if(runtime.contextOrFrameLookup(context, frame, "vf_hero_image")) {
output += "--vf-hero--bg-image: ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "vf_hero_image"), env.opts.autoescape);
;
}
if(runtime.contextOrFrameLookup(context, frame, "vf_hero_image_size")) {
output += "--vf-hero--bg-image-size: ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "vf_hero_image_size"), env.opts.autoescape);
;
}
output += "  \">\n";
if(runtime.contextOrFrameLookup(context, frame, "deprecated_text")) {
output += "<!-- ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "deprecated_text"), env.opts.autoescape);
output += " -->";
;
}
output += "  <div class=\"vf-hero__content | vf-stack vf-stack--400 \">\n";
if(runtime.contextOrFrameLookup(context, frame, "vf_hero_heading")) {
output += "    <h2 class=\"vf-hero__heading\">\n";
if(runtime.contextOrFrameLookup(context, frame, "vf_hero_heading_href")) {
output += "<a class=\"vf-hero__heading_link\" href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "vf_hero_heading_href"), env.opts.autoescape);
output += "\">";
;
}
output += "      ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "vf_hero_heading"), env.opts.autoescape);
output += "\n";
if(runtime.contextOrFrameLookup(context, frame, "vf_hero_heading_href")) {
output += "</a>";
;
}
if(runtime.contextOrFrameLookup(context, frame, "vf_hero_heading_additional")) {
output += "<span class=\"vf-hero__heading--additional\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "vf_hero_heading_additional"), env.opts.autoescape);
output += "</span>";
;
}
output += "</h2>\n";
;
}
if(runtime.contextOrFrameLookup(context, frame, "vf_hero_subheading")) {
output += "<p class=\"vf-hero__subheading\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "vf_hero_subheading"), env.opts.autoescape);
output += "</p>";
;
}
(function(cb) {if(runtime.contextOrFrameLookup(context, frame, "vf_hero_text")) {
output += "    <p class=\"vf-hero__text\">";
(function(cb) {if(runtime.contextOrFrameLookup(context, frame, "vf_hero_href")) {
output += "      <a class=\"vf-hero__link | vf-link\" href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "vf_hero_href"), env.opts.autoescape);
output += "\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "vf_hero_text"), env.opts.autoescape);
output += "<svg width=\"24\" height=\"24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12S18.627 0 12 0C5.376.008.008 5.376 0 12zm13.707-5.209l4.5 4.5a1 1 0 010 1.414l-4.5 4.5a1 1 0 01-1.414-1.414l2.366-2.367a.25.25 0 00-.177-.424H6a1 1 0 010-2h8.482a.25.25 0 00.177-.427l-2.366-2.368a1 1 0 011.414-1.414z\" fill=\"\" fill-rule=\"nonzero\"></path></svg>\n      </a>\n";
cb();
}
else {
frame = frame.push();
var t_20 = runtime.fromIterator(runtime.contextOrFrameLookup(context, frame, "vf_hero_text"));
runtime.asyncEach(t_20, 1, function(hero_text, t_18, t_19,next) {
frame.set("hero_text", hero_text);
frame.set("loop.index", t_18 + 1);
frame.set("loop.index0", t_18);
frame.set("loop.revindex", t_19 - t_18);
frame.set("loop.revindex0", t_19 - t_18 - 1);
frame.set("loop.first", t_18 === 0);
frame.set("loop.last", t_18 === t_19 - 1);
frame.set("loop.length", t_19);
output += runtime.suppressValue(env.getFilter("safe").call(context, hero_text), env.opts.autoescape);
output += "\n";
next(t_18);
;
}, function(t_22,t_21) {
if(t_22) { cb(t_22); return; }
frame = frame.pop();
cb()});
}
})(function(t_23) {
if(t_23) { cb(t_23); return; }output += "    </p>\n";
cb()});
}
else {
cb()}
})(function(t_24) {
if(t_24) { cb(t_24); return; }output += "  </div>\n</section>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
