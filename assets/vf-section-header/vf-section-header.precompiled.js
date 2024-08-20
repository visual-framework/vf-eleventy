/**
 * Precompiled Nunjucks template: vf-section-header.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["vf-section-header"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
if(runtime.contextOrFrameLookup(context, frame, "context")) {
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
t_2 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"href");
frame.set("href", t_2, true);
if(frame.topLevel) {
context.setVariable("href", t_2);
}
if(frame.topLevel) {
context.addExport("href", t_2);
}
var t_3;
t_3 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"section_title");
frame.set("section_title", t_3, true);
if(frame.topLevel) {
context.setVariable("section_title", t_3);
}
if(frame.topLevel) {
context.addExport("section_title", t_3);
}
var t_4;
t_4 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"section__subheading");
frame.set("section__subheading", t_4, true);
if(frame.topLevel) {
context.setVariable("section__subheading", t_4);
}
if(frame.topLevel) {
context.addExport("section__subheading", t_4);
}
var t_5;
t_5 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"vf_section__content");
frame.set("vf_section__content", t_5, true);
if(frame.topLevel) {
context.setVariable("vf_section__content", t_5);
}
if(frame.topLevel) {
context.addExport("vf_section__content", t_5);
}
var t_6;
t_6 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"hidden");
frame.set("hidden", t_6, true);
if(frame.topLevel) {
context.setVariable("hidden", t_6);
}
if(frame.topLevel) {
context.addExport("hidden", t_6);
}
;
}
output += runtime.suppressValue(env.getExtension("spaceless")["run"](context,function(cb) {
if(!cb) { cb = function(err) { if(err) { throw err; }}}
var t_7 = "";t_7 += "\n";
t_7 += "\n";
var t_8;
t_8 = "h2";
frame.set("tags", t_8, true);
if(frame.topLevel) {
context.setVariable("tags", t_8);
}
if(frame.topLevel) {
context.addExport("tags", t_8);
}
if(runtime.contextOrFrameLookup(context, frame, "href")) {
;
}
t_7 += "\n<div class=\"vf-section-header\">\n  ";
t_7 += "\n";
if(runtime.contextOrFrameLookup(context, frame, "hidden")) {
t_7 += "    <";
t_7 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "tags"), env.opts.autoescape);
t_7 += "\n      class=\"vf-section-header__heading vf-u-sr-only\"";
if(runtime.contextOrFrameLookup(context, frame, "id")) {
t_7 += " id=\"";
t_7 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id"), env.opts.autoescape);
t_7 += "\"";
;
}
t_7 += ">";
t_7 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "section_title"), env.opts.autoescape);
t_7 += "</";
t_7 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "tags"), env.opts.autoescape);
t_7 += ">\n  ";
t_7 += "\n";
;
}
else {
t_7 += "    <";
t_7 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "tags"), env.opts.autoescape);
t_7 += "\n      class=\"vf-section-header__heading";
if(runtime.contextOrFrameLookup(context, frame, "href")) {
t_7 += " vf-section-header__heading--is-link";
;
}
t_7 += "\"";
if(runtime.contextOrFrameLookup(context, frame, "id")) {
t_7 += " id=\"";
t_7 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id"), env.opts.autoescape);
t_7 += "\"";
;
}
t_7 += ">\n";
if(runtime.contextOrFrameLookup(context, frame, "href")) {
t_7 += "<a href=\"";
t_7 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "href"), env.opts.autoescape);
t_7 += "\">";
;
}
t_7 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "section_title"), env.opts.autoescape);
if(runtime.contextOrFrameLookup(context, frame, "href")) {
t_7 += "</a>";
;
}
if(runtime.contextOrFrameLookup(context, frame, "href")) {
t_7 += "        <svg aria-hidden=\"true\" class=\"vf-section-header__icon | vf-icon vf-icon-arrow--inline-end\" width=\"1em\" height=\"1em\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12S18.627 0 12 0C5.376.008.008 5.376 0 12zm13.707-5.209l4.5 4.5a1 1 0 010 1.414l-4.5 4.5a1 1 0 01-1.414-1.414l2.366-2.367a.25.25 0 00-.177-.424H6a1 1 0 010-2h8.482a.25.25 0 00.177-.427l-2.366-2.368a1 1 0 011.414-1.414z\" fill=\"\" fill-rule=\"nonzero\"></path></svg>";
;
}
t_7 += "</";
t_7 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "tags"), env.opts.autoescape);
t_7 += ">\n";
;
}
if(runtime.contextOrFrameLookup(context, frame, "section__subheading")) {
t_7 += "    <p class=\"vf-section-header__subheading\">";
t_7 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "section__subheading"), env.opts.autoescape);
t_7 += "</p>\n";
;
}
(function(cb) {if(runtime.contextOrFrameLookup(context, frame, "vf_section__content")) {
frame = frame.push();
var t_11 = runtime.fromIterator(runtime.contextOrFrameLookup(context, frame, "vf_section__content"));
runtime.asyncEach(t_11, 1, function(section__content, t_9, t_10,next) {
frame.set("section__content", section__content);
frame.set("loop.index", t_9 + 1);
frame.set("loop.index0", t_9);
frame.set("loop.revindex", t_10 - t_9);
frame.set("loop.revindex0", t_10 - t_9 - 1);
frame.set("loop.first", t_9 === 0);
frame.set("loop.last", t_9 === t_10 - 1);
frame.set("loop.length", t_10);
t_7 += "<p class=\"vf-section-header__text\">";
t_7 += runtime.suppressValue(env.getFilter("safe").call(context, section__content), env.opts.autoescape);
t_7 += "</p>";
next(t_9);
;
}, function(t_13,t_12) {
if(t_13) { cb(t_13); return; }
frame = frame.pop();
cb()});
}
else {
cb()}
})(function(t_14) {
if(t_14) { cb(t_14); return; }t_7 += "</div>\n\n";
cb(null, t_7);
});
return t_7;
}
,null), true && env.opts.autoescape);
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
