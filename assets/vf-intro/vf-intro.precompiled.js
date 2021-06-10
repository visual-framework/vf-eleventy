/**
 * Precompiled Nunjucks template: vf-intro.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["vf-intro"] = (function() {
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
output += "\n";
var t_2;
t_2 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"vf_intro_heading");
frame.set("vf_intro_heading", t_2, true);
if(frame.topLevel) {
context.setVariable("vf_intro_heading", t_2);
}
if(frame.topLevel) {
context.addExport("vf_intro_heading", t_2);
}
output += "\n";
var t_3;
t_3 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"vf_intro_phase");
frame.set("vf_intro_phase", t_3, true);
if(frame.topLevel) {
context.setVariable("vf_intro_phase", t_3);
}
if(frame.topLevel) {
context.addExport("vf_intro_phase", t_3);
}
var t_4;
t_4 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"vf_intro_heading_href");
frame.set("vf_intro_heading_href", t_4, true);
if(frame.topLevel) {
context.setVariable("vf_intro_heading_href", t_4);
}
if(frame.topLevel) {
context.addExport("vf_intro_heading_href", t_4);
}
output += "\n";
var t_5;
t_5 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"vf_intro_badge");
frame.set("vf_intro_badge", t_5, true);
if(frame.topLevel) {
context.setVariable("vf_intro_badge", t_5);
}
if(frame.topLevel) {
context.addExport("vf_intro_badge", t_5);
}
output += "\n";
var t_6;
t_6 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"vf_intro_subheading");
frame.set("vf_intro_subheading", t_6, true);
if(frame.topLevel) {
context.setVariable("vf_intro_subheading", t_6);
}
if(frame.topLevel) {
context.addExport("vf_intro_subheading", t_6);
}
var t_7;
t_7 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"vf_intro_lede");
frame.set("vf_intro_lede", t_7, true);
if(frame.topLevel) {
context.setVariable("vf_intro_lede", t_7);
}
if(frame.topLevel) {
context.addExport("vf_intro_lede", t_7);
}
output += "\n";
var t_8;
t_8 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"vf_intro_text");
frame.set("vf_intro_text", t_8, true);
if(frame.topLevel) {
context.setVariable("vf_intro_text", t_8);
}
if(frame.topLevel) {
context.addExport("vf_intro_text", t_8);
}
var t_9;
t_9 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"intro_text");
frame.set("intro_text", t_9, true);
if(frame.topLevel) {
context.setVariable("intro_text", t_9);
}
if(frame.topLevel) {
context.addExport("intro_text", t_9);
}
;
}
output += "<section class=\"vf-intro\"";
if(runtime.contextOrFrameLookup(context, frame, "intro_stack_spacing")) {
output += " style=\"--vf-intro-spacing: ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "intro_stack_spacing"), env.opts.autoescape);
output += "\"";
;
}
if(runtime.contextOrFrameLookup(context, frame, "id")) {
output += " id=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id"), env.opts.autoescape);
output += "\"";
;
}
output += ">\n\n  <div><!-- empty --></div>\n\n  <div class=\"vf-stack\">\n\n  <h1 class=\"vf-intro__heading ";
if((runtime.contextOrFrameLookup(context, frame, "vf_intro_phase")) || (runtime.contextOrFrameLookup(context, frame, "vf_intro_badge"))) {
output += "vf-intro__heading--has-tag";
;
}
output += "\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "vf_intro_heading"), env.opts.autoescape);
if((runtime.contextOrFrameLookup(context, frame, "vf_intro_phase")) && (runtime.contextOrFrameLookup(context, frame, "vf_intro_badge"))) {
output += "<h2 style=\"color: var(--vf-ui-color--red)\">Please use the relevant <code>vf-badge</code> yaml only</h2>";
;
}
if((runtime.contextOrFrameLookup(context, frame, "vf_intro_phase"))) {
if((runtime.contextOrFrameLookup(context, frame, "vf_intro_heading_href"))) {
output += "      <a href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "intro_heading_href"), env.opts.autoescape);
output += "\" class=\"vf-badge vf-badge--primary\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "vf_intro_phase"), env.opts.autoescape);
output += "</a>";
;
}
else {
output += "<span class=\"vf-badge vf-badge--primary\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "vf_intro_phase"), env.opts.autoescape);
output += ";</span>";
;
}
;
}
(function(cb) {if(runtime.contextOrFrameLookup(context, frame, "vf_intro_badge")) {
var t_10;
t_10 = "@vf-badge";
frame.set("badge", t_10, true);
if(frame.topLevel) {
context.setVariable("badge", t_10);
}
if(frame.topLevel) {
context.addExport("badge", t_10);
}
env.getExtension("render")["run"](context,runtime.contextOrFrameLookup(context, frame, "badge"),{"context": runtime.contextOrFrameLookup(context, frame, "vf_intro_badge")}, function(t_12,t_11) {
if(t_12) { cb(t_12); return; }
output += runtime.suppressValue(t_11, true && env.opts.autoescape);
cb()});
}
else {
cb()}
})(function(t_13) {
if(t_13) { cb(t_13); return; }output += "</h1>";
if((runtime.contextOrFrameLookup(context, frame, "vf_intro_lede")) && (runtime.contextOrFrameLookup(context, frame, "vf_lede_text"))) {
output += "<h2 style=\"color: var(--vf-ui-color--red)\">Please use the relevant <code>vf_intro_lede</code> yaml only</h2>";
;
}
if(runtime.contextOrFrameLookup(context, frame, "vf_intro_subheading")) {
output += "  <h2 class=\"vf-intro__subheading\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "vf_intro_subheading"), env.opts.autoescape);
output += "</h2>\n";
;
}
output += "\n";
(function(cb) {if(runtime.contextOrFrameLookup(context, frame, "vf_intro_lede")) {
env.getExtension("render")["run"](context,"@vf-lede",{"vf_lede_text": runtime.contextOrFrameLookup(context, frame, "vf_intro_lede")}, function(t_15,t_14) {
if(t_15) { cb(t_15); return; }
output += runtime.suppressValue(t_14, true && env.opts.autoescape);
cb()});
}
else {
cb()}
})(function(t_16) {
if(t_16) { cb(t_16); return; }output += "\n";
(function(cb) {if(runtime.contextOrFrameLookup(context, frame, "vf_lede_text")) {
env.getExtension("render")["run"](context,"@vf-lede",{"vf_lede_text": runtime.contextOrFrameLookup(context, frame, "vf_intro_lede")}, function(t_18,t_17) {
if(t_18) { cb(t_18); return; }
output += runtime.suppressValue(t_17, true && env.opts.autoescape);
cb()});
}
else {
cb()}
})(function(t_19) {
if(t_19) { cb(t_19); return; }output += "\n";
(function(cb) {if(runtime.contextOrFrameLookup(context, frame, "vf_intro_text")) {
frame = frame.push();
var t_22 = runtime.fromIterator(runtime.contextOrFrameLookup(context, frame, "vf_intro_text"));
runtime.asyncEach(t_22, 1, function(intro_text, t_20, t_21,next) {
frame.set("intro_text", intro_text);
frame.set("loop.index", t_20 + 1);
frame.set("loop.index0", t_20);
frame.set("loop.revindex", t_21 - t_20);
frame.set("loop.revindex0", t_21 - t_20 - 1);
frame.set("loop.first", t_20 === 0);
frame.set("loop.last", t_20 === t_21 - 1);
frame.set("loop.length", t_21);
output += "<p class=\"vf-intro__text\">";
output += runtime.suppressValue(env.getFilter("safe").call(context, intro_text), env.opts.autoescape);
output += "</p>";
next(t_20);
;
}, function(t_24,t_23) {
if(t_24) { cb(t_24); return; }
frame = frame.pop();
cb()});
}
else {
cb()}
})(function(t_25) {
if(t_25) { cb(t_25); return; }output += "\n  </div>\n</section>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
