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
var t_1;
t_1 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"card_href");
frame.set("card_href", t_1, true);
if(frame.topLevel) {
context.setVariable("card_href", t_1);
}
if(frame.topLevel) {
context.addExport("card_href", t_1);
}
var t_2;
t_2 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"vf_hero__initial_row");
frame.set("vf_hero__initial_row", t_2, true);
if(frame.topLevel) {
context.setVariable("vf_hero__initial_row", t_2);
}
if(frame.topLevel) {
context.addExport("vf_hero__initial_row", t_2);
}
output += "\n";
var t_3;
t_3 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"vf_hero_heading");
frame.set("vf_hero_heading", t_3, true);
if(frame.topLevel) {
context.setVariable("vf_hero_heading", t_3);
}
if(frame.topLevel) {
context.addExport("vf_hero_heading", t_3);
}
var t_4;
t_4 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"vf_hero_summary_title");
frame.set("vf_hero_summary_title", t_4, true);
if(frame.topLevel) {
context.setVariable("vf_hero_summary_title", t_4);
}
if(frame.topLevel) {
context.addExport("vf_hero_summary_title", t_4);
}
var t_5;
t_5 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"vf_hero_subheading");
frame.set("vf_hero_subheading", t_5, true);
if(frame.topLevel) {
context.setVariable("vf_hero_subheading", t_5);
}
if(frame.topLevel) {
context.addExport("vf_hero_subheading", t_5);
}
var t_6;
t_6 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"vf_hero_image");
frame.set("vf_hero_image", t_6, true);
if(frame.topLevel) {
context.setVariable("vf_hero_image", t_6);
}
if(frame.topLevel) {
context.addExport("vf_hero_image", t_6);
}
output += "\n";
var t_7;
t_7 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"vf_hero_href");
frame.set("vf_hero_href", t_7, true);
if(frame.topLevel) {
context.setVariable("vf_hero_href", t_7);
}
if(frame.topLevel) {
context.addExport("vf_hero_href", t_7);
}
var t_8;
t_8 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"vf_hero_text");
frame.set("vf_hero_text", t_8, true);
if(frame.topLevel) {
context.setVariable("vf_hero_text", t_8);
}
if(frame.topLevel) {
context.addExport("vf_hero_text", t_8);
}
var t_9;
t_9 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"hero_text");
frame.set("hero_text", t_9, true);
if(frame.topLevel) {
context.setVariable("hero_text", t_9);
}
if(frame.topLevel) {
context.addExport("hero_text", t_9);
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
t_11 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"variant");
frame.set("variant", t_11, true);
if(frame.topLevel) {
context.setVariable("variant", t_11);
}
if(frame.topLevel) {
context.addExport("variant", t_11);
}
output += "\n";
var t_12;
t_12 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"id");
frame.set("id", t_12, true);
if(frame.topLevel) {
context.setVariable("id", t_12);
}
if(frame.topLevel) {
context.addExport("id", t_12);
}
var t_13;
t_13 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"modifier_class");
frame.set("modifier_class", t_13, true);
if(frame.topLevel) {
context.setVariable("modifier_class", t_13);
}
if(frame.topLevel) {
context.addExport("modifier_class", t_13);
}
var t_14;
t_14 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"override_class");
frame.set("override_class", t_14, true);
if(frame.topLevel) {
context.setVariable("override_class", t_14);
}
if(frame.topLevel) {
context.addExport("override_class", t_14);
}
;
}
output += "\n\n<section\n  class=\"vf-hero ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "modifier_class"), env.opts.autoescape);
output += "\"\n  style=\"\n";
if(runtime.contextOrFrameLookup(context, frame, "vf_hero_image")) {
output += "--vf-hero-bg-image: ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "vf_hero_image"), env.opts.autoescape);
;
}
if(runtime.contextOrFrameLookup(context, frame, "vf_hero__initial_row")) {
output += " --vf-hero-grid__row--initial: ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "vf_hero__initial_row"), env.opts.autoescape);
;
}
output += "\"\n>\n  <div class=\"vf-hero__content\">\n";
if(runtime.contextOrFrameLookup(context, frame, "vf_hero_heading")) {
output += " <h2 class=\"vf-hero__heading\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "vf_hero_heading"), env.opts.autoescape);
output += "</h2>";
;
}
if((runtime.contextOrFrameLookup(context, frame, "vf_hero_summary_title")) || (runtime.contextOrFrameLookup(context, frame, "vf_hero_subheading"))) {
output += "<p class=\"[ vf-summary__title ] vf-hero__subheading\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "vf_hero_summary_title"), env.opts.autoescape);
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "vf_hero_subheading"), env.opts.autoescape);
output += "</p>";
;
}
(function(cb) {if(runtime.contextOrFrameLookup(context, frame, "vf_hero_href")) {
output += "    <p class=\"vf-hero__text\">";
if(runtime.contextOrFrameLookup(context, frame, "vf_hero_href")) {
output += "      <a class=\"vf-link\" href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "vf_hero_href"), env.opts.autoescape);
output += "\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "vf_hero_text"), env.opts.autoescape);
output += "<svg width=\"24\" height=\"24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12S18.627 0 12 0C5.376.008.008 5.376 0 12zm13.707-5.209l4.5 4.5a1 1 0 010 1.414l-4.5 4.5a1 1 0 01-1.414-1.414l2.366-2.367a.25.25 0 00-.177-.424H6a1 1 0 010-2h8.482a.25.25 0 00.177-.427l-2.366-2.368a1 1 0 011.414-1.414z\" fill=\"\" fill-rule=\"nonzero\"></path></svg></a>\n";
;
}
else {
output += "      ";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "vf_hero_text")), env.opts.autoescape);
output += "\n";
;
}
output += "    </p>\n";
cb();
}
else {
frame = frame.push();
var t_17 = runtime.fromIterator(runtime.contextOrFrameLookup(context, frame, "vf_hero_text"));
runtime.asyncEach(t_17, 1, function(hero_text, t_15, t_16,next) {
frame.set("hero_text", hero_text);
frame.set("loop.index", t_15 + 1);
frame.set("loop.index0", t_15);
frame.set("loop.revindex", t_16 - t_15);
frame.set("loop.revindex0", t_16 - t_15 - 1);
frame.set("loop.first", t_15 === 0);
frame.set("loop.last", t_15 === t_16 - 1);
frame.set("loop.length", t_16);
output += "<p class=\"vf-hero__text\">\n      ";
output += runtime.suppressValue(env.getFilter("safe").call(context, hero_text), env.opts.autoescape);
output += "\n    </p>\n";
next(t_15);
;
}, function(t_19,t_18) {
if(t_19) { cb(t_19); return; }
frame = frame.pop();
cb()});
}
})(function(t_20) {
if(t_20) { cb(t_20); return; }output += "  </div>\n\n";
if(runtime.contextOrFrameLookup(context, frame, "modifier_class") === "vf-hero--intense") {
output += "  ";
output += "\n  ";
output += "\n  <script src=\"../../assets/vf-hero/assets/jarallax.js\"></script>\n  <script>\n    document.addEventListener(\"DOMContentLoaded\", function(){\n      jarallax(document.querySelectorAll('.vf-hero--intense'), {\n        speed: 1.25\n      });\n    });\n  </script>\n";
;
}
output += "</section>\n";
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
