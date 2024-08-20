/**
 * Precompiled Nunjucks template: vf-button.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["vf-button"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
if(runtime.contextOrFrameLookup(context, frame, "context")) {
var t_1;
t_1 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"theme");
frame.set("theme", t_1, true);
if(frame.topLevel) {
context.setVariable("theme", t_1);
}
if(frame.topLevel) {
context.addExport("theme", t_1);
}
var t_2;
t_2 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"id");
frame.set("id", t_2, true);
if(frame.topLevel) {
context.setVariable("id", t_2);
}
if(frame.topLevel) {
context.addExport("id", t_2);
}
var t_3;
t_3 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"text");
frame.set("text", t_3, true);
if(frame.topLevel) {
context.setVariable("text", t_3);
}
if(frame.topLevel) {
context.addExport("text", t_3);
}
var t_4;
t_4 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"style");
frame.set("style", t_4, true);
if(frame.topLevel) {
context.setVariable("style", t_4);
}
if(frame.topLevel) {
context.addExport("style", t_4);
}
var t_5;
t_5 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"size");
frame.set("size", t_5, true);
if(frame.topLevel) {
context.setVariable("size", t_5);
}
if(frame.topLevel) {
context.addExport("size", t_5);
}
var t_6;
t_6 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"override_class");
frame.set("override_class", t_6, true);
if(frame.topLevel) {
context.setVariable("override_class", t_6);
}
if(frame.topLevel) {
context.addExport("override_class", t_6);
}
var t_7;
t_7 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"html");
frame.set("html", t_7, true);
if(frame.topLevel) {
context.setVariable("html", t_7);
}
if(frame.topLevel) {
context.addExport("html", t_7);
}
var t_8;
t_8 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"text");
frame.set("text", t_8, true);
if(frame.topLevel) {
context.setVariable("text", t_8);
}
if(frame.topLevel) {
context.addExport("text", t_8);
}
;
}
output += "\n";
output += runtime.suppressValue(env.getExtension("spaceless")["run"](context,function(cb) {
if(!cb) { cb = function(err) { if(err) { throw err; }}}
var t_9 = "";t_9 += "\n";
var t_10;
t_10 = "button";
frame.set("tags", t_10, true);
if(frame.topLevel) {
context.setVariable("tags", t_10);
}
if(frame.topLevel) {
context.addExport("tags", t_10);
}
t_9 += "\n\n";
t_9 += "\n";
if(runtime.contextOrFrameLookup(context, frame, "theme")) {
var t_11;
t_11 = runtime.contextOrFrameLookup(context, frame, "theme");
frame.set("theme_class", t_11, true);
if(frame.topLevel) {
context.setVariable("theme_class", t_11);
}
if(frame.topLevel) {
context.addExport("theme_class", t_11);
}
;
}
t_9 += "\n<";
t_9 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "tags"), env.opts.autoescape);
t_9 += "\n";
t_9 += "\n";
if(runtime.contextOrFrameLookup(context, frame, "id")) {
t_9 += " id=\"";
t_9 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id"), env.opts.autoescape);
t_9 += "\"";
;
}
t_9 += "\nclass=\"vf-button";
t_9 += "\n";
if(runtime.contextOrFrameLookup(context, frame, "theme_class")) {
t_9 += " vf-button--";
t_9 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "theme_class"), env.opts.autoescape);
;
}
if(runtime.contextOrFrameLookup(context, frame, "style")) {
frame = frame.push();
var t_14 = runtime.contextOrFrameLookup(context, frame, "style");
if(t_14) {t_14 = runtime.fromIterator(t_14);
var t_13 = t_14.length;
for(var t_12=0; t_12 < t_14.length; t_12++) {
var t_15 = t_14[t_12];
frame.set("styles", t_15);
frame.set("loop.index", t_12 + 1);
frame.set("loop.index0", t_12);
frame.set("loop.revindex", t_13 - t_12);
frame.set("loop.revindex0", t_13 - t_12 - 1);
frame.set("loop.first", t_12 === 0);
frame.set("loop.last", t_12 === t_13 - 1);
frame.set("loop.length", t_13);
t_9 += " vf-button--";
t_9 += runtime.suppressValue(t_15, env.opts.autoescape);
;
}
}
frame = frame.pop();
;
}
if(runtime.contextOrFrameLookup(context, frame, "size")) {
t_9 += "  vf-button--";
t_9 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "size"), env.opts.autoescape);
t_9 += "\n";
;
}
if(runtime.contextOrFrameLookup(context, frame, "override_class")) {
t_9 += " | ";
t_9 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "override_class"), env.opts.autoescape);
;
}
t_9 += "\">";
t_9 += runtime.suppressValue((runtime.contextOrFrameLookup(context, frame, "html")?env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "html")):runtime.contextOrFrameLookup(context, frame, "text")), env.opts.autoescape);
t_9 += "</";
t_9 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "tags"), env.opts.autoescape);
t_9 += ">\n";
cb(null, t_9);
;
return t_9;
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
