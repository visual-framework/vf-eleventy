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
output += runtime.suppressValue(env.getExtension("spaceless")["run"](context,function(cb) {
if(!cb) { cb = function(err) { if(err) { throw err; }}}
var t_1 = "";if(runtime.contextOrFrameLookup(context, frame, "context")) {
var t_2;
t_2 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"vf_hero_image");
frame.set("vf_hero_image", t_2, true);
if(frame.topLevel) {
context.setVariable("vf_hero_image", t_2);
}
if(frame.topLevel) {
context.addExport("vf_hero_image", t_2);
}
t_1 += "\n";
var t_3;
t_3 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"vf_hero_kicker");
frame.set("vf_hero_kicker", t_3, true);
if(frame.topLevel) {
context.setVariable("vf_hero_kicker", t_3);
}
if(frame.topLevel) {
context.addExport("vf_hero_kicker", t_3);
}
var t_4;
t_4 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"vf_hero_heading");
frame.set("vf_hero_heading", t_4, true);
if(frame.topLevel) {
context.setVariable("vf_hero_heading", t_4);
}
if(frame.topLevel) {
context.addExport("vf_hero_heading", t_4);
}
var t_5;
t_5 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"vf_hero_heading_href");
frame.set("vf_hero_heading_href", t_5, true);
if(frame.topLevel) {
context.setVariable("vf_hero_heading_href", t_5);
}
if(frame.topLevel) {
context.addExport("vf_hero_heading_href", t_5);
}
var t_6;
t_6 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"vf_hero_subheading");
frame.set("vf_hero_subheading", t_6, true);
if(frame.topLevel) {
context.setVariable("vf_hero_subheading", t_6);
}
if(frame.topLevel) {
context.addExport("vf_hero_subheading", t_6);
}
t_1 += "\n";
var t_7;
t_7 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"vf_hero_text");
frame.set("vf_hero_text", t_7, true);
if(frame.topLevel) {
context.setVariable("vf_hero_text", t_7);
}
if(frame.topLevel) {
context.addExport("vf_hero_text", t_7);
}
t_1 += "\n";
var t_8;
t_8 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"vf_hero_link_text");
frame.set("vf_hero_link_text", t_8, true);
if(frame.topLevel) {
context.setVariable("vf_hero_link_text", t_8);
}
if(frame.topLevel) {
context.addExport("vf_hero_link_text", t_8);
}
var t_9;
t_9 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"vf_hero_link_href");
frame.set("vf_hero_link_href", t_9, true);
if(frame.topLevel) {
context.setVariable("vf_hero_link_href", t_9);
}
if(frame.topLevel) {
context.addExport("vf_hero_link_href", t_9);
}
t_1 += "\n";
var t_10;
t_10 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"spacing");
frame.set("spacing", t_10, true);
if(frame.topLevel) {
context.setVariable("spacing", t_10);
}
if(frame.topLevel) {
context.addExport("spacing", t_10);
}
t_1 += "\n";
var t_11;
t_11 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"id");
frame.set("id", t_11, true);
if(frame.topLevel) {
context.setVariable("id", t_11);
}
if(frame.topLevel) {
context.addExport("id", t_11);
}
var t_12;
t_12 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"modifier_class");
frame.set("modifier_class", t_12, true);
if(frame.topLevel) {
context.setVariable("modifier_class", t_12);
}
if(frame.topLevel) {
context.addExport("modifier_class", t_12);
}
var t_13;
t_13 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"override_class");
frame.set("override_class", t_13, true);
if(frame.topLevel) {
context.setVariable("override_class", t_13);
}
if(frame.topLevel) {
context.addExport("override_class", t_13);
}
t_1 += "\n  ";
t_1 += "\n";
var t_14;
t_14 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"vf_hero_heading_additional");
frame.set("vf_hero_heading_additional", t_14, true);
if(frame.topLevel) {
context.setVariable("vf_hero_heading_additional", t_14);
}
if(frame.topLevel) {
context.addExport("vf_hero_heading_additional", t_14);
}
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"vf_hero_heading_additional")) {
var t_15;
t_15 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"vf_hero_heading_additional");
frame.set("vf_hero_kicker", t_15, true);
if(frame.topLevel) {
context.setVariable("vf_hero_kicker", t_15);
}
if(frame.topLevel) {
context.addExport("vf_hero_kicker", t_15);
}
;
}
;
}
cb(null, t_1);
;
return t_1;
}
,null), true && env.opts.autoescape);
output += "<section\n  class=\"vf-hero";
if(runtime.contextOrFrameLookup(context, frame, "spacing")) {
output += " vf-hero--";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "spacing"), env.opts.autoescape);
;
}
output += " | vf-u-fullbleed";
if(runtime.contextOrFrameLookup(context, frame, "modifier_class")) {
output += " ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "modifier_class"), env.opts.autoescape);
;
}
output += "\"\n  style=\"";
if(runtime.contextOrFrameLookup(context, frame, "vf_hero_image")) {
output += "--vf-hero--bg-image: ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "vf_hero_image"), env.opts.autoescape);
;
}
if(runtime.contextOrFrameLookup(context, frame, "vf_hero_image_size")) {
output += " --vf-hero--bg-image-size: ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "vf_hero_image_size"), env.opts.autoescape);
;
}
output += "\">\n  <div class=\"vf-hero__content | vf-box | vf-stack vf-stack--400\">";
if(runtime.contextOrFrameLookup(context, frame, "vf_hero_kicker")) {
output += "<p class=\"vf-hero__kicker\">";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "vf_hero_kicker")), env.opts.autoescape);
output += "</p>";
;
}
if(runtime.contextOrFrameLookup(context, frame, "vf_hero_heading")) {
output += "    <h2 class=\"vf-hero__heading\">";
if(runtime.contextOrFrameLookup(context, frame, "vf_hero_heading_href")) {
output += "<a class=\"vf-hero__heading_link\" href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "vf_hero_heading_href"), env.opts.autoescape);
output += "\">";
;
}
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "vf_hero_heading")), env.opts.autoescape);
if(runtime.contextOrFrameLookup(context, frame, "vf_hero_heading_href")) {
output += "</a>";
;
}
output += "</h2>\n";
;
}
output += "\n";
if(runtime.contextOrFrameLookup(context, frame, "vf_hero_subheading")) {
output += "<p class=\"vf-hero__subheading\">";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "vf_hero_subheading")), env.opts.autoescape);
output += "</p>";
;
}
if(runtime.contextOrFrameLookup(context, frame, "vf_hero_text")) {
frame = frame.push();
var t_18 = runtime.contextOrFrameLookup(context, frame, "vf_hero_text");
if(t_18) {t_18 = runtime.fromIterator(t_18);
var t_17 = t_18.length;
for(var t_16=0; t_16 < t_18.length; t_16++) {
var t_19 = t_18[t_16];
frame.set("hero_text", t_19);
frame.set("loop.index", t_16 + 1);
frame.set("loop.index0", t_16);
frame.set("loop.revindex", t_17 - t_16);
frame.set("loop.revindex0", t_17 - t_16 - 1);
frame.set("loop.first", t_16 === 0);
frame.set("loop.last", t_16 === t_17 - 1);
frame.set("loop.length", t_17);
output += "        <p class=\"vf-hero__text\">";
output += runtime.suppressValue(env.getFilter("safe").call(context, t_19), env.opts.autoescape);
output += "</p>";
;
}
}
frame = frame.pop();
;
}
if((runtime.contextOrFrameLookup(context, frame, "vf_hero_link_href")) && (runtime.contextOrFrameLookup(context, frame, "vf_hero_link_text"))) {
output += "      <a class=\"vf-hero__link\" href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "vf_hero_link_href"), env.opts.autoescape);
output += "\">";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "vf_hero_link_text")), env.opts.autoescape);
output += "<svg width=\"24\" height=\"24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12S18.627 0 12 0C5.376.008.008 5.376 0 12zm13.707-5.209l4.5 4.5a1 1 0 010 1.414l-4.5 4.5a1 1 0 01-1.414-1.414l2.366-2.367a.25.25 0 00-.177-.424H6a1 1 0 010-2h8.482a.25.25 0 00.177-.427l-2.366-2.368a1 1 0 011.414-1.414z\" fill=\"\" fill-rule=\"nonzero\"></path></svg>\n      </a>";
;
}
output += "</div>\n</section>\n";
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
