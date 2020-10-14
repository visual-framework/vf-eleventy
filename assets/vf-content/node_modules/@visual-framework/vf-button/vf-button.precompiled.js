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
output += "\n";
var t_1;
t_1 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"button_href");
frame.set("button_href", t_1, true);
if(frame.topLevel) {
context.setVariable("button_href", t_1);
}
if(frame.topLevel) {
context.addExport("button_href", t_1);
}
var t_2;
t_2 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"theme");
frame.set("theme", t_2, true);
if(frame.topLevel) {
context.setVariable("theme", t_2);
}
if(frame.topLevel) {
context.addExport("theme", t_2);
}
var t_3;
t_3 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"id");
frame.set("id", t_3, true);
if(frame.topLevel) {
context.setVariable("id", t_3);
}
if(frame.topLevel) {
context.addExport("id", t_3);
}
var t_4;
t_4 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"text");
frame.set("text", t_4, true);
if(frame.topLevel) {
context.setVariable("text", t_4);
}
if(frame.topLevel) {
context.addExport("text", t_4);
}
var t_5;
t_5 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"style");
frame.set("style", t_5, true);
if(frame.topLevel) {
context.setVariable("style", t_5);
}
if(frame.topLevel) {
context.addExport("style", t_5);
}
var t_6;
t_6 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"size");
frame.set("size", t_6, true);
if(frame.topLevel) {
context.setVariable("size", t_6);
}
if(frame.topLevel) {
context.addExport("size", t_6);
}
var t_7;
t_7 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"override_class");
frame.set("override_class", t_7, true);
if(frame.topLevel) {
context.setVariable("override_class", t_7);
}
if(frame.topLevel) {
context.addExport("override_class", t_7);
}
var t_8;
t_8 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"html");
frame.set("html", t_8, true);
if(frame.topLevel) {
context.setVariable("html", t_8);
}
if(frame.topLevel) {
context.addExport("html", t_8);
}
var t_9;
t_9 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"text");
frame.set("text", t_9, true);
if(frame.topLevel) {
context.setVariable("text", t_9);
}
if(frame.topLevel) {
context.addExport("text", t_9);
}
output += "\n";
;
}
output += "\n";
output += runtime.suppressValue(env.getExtension("spaceless")["run"](context,function(cb) {
if(!cb) { cb = function(err) { if(err) { throw err; }}}
var t_10 = "";t_10 += "\n";
if((runtime.contextOrFrameLookup(context, frame, "button_href")) || (runtime.contextOrFrameLookup(context, frame, "href"))) {
var t_11;
t_11 = "a";
frame.set("tags", t_11, true);
if(frame.topLevel) {
context.setVariable("tags", t_11);
}
if(frame.topLevel) {
context.addExport("tags", t_11);
}
;
}
else {
var t_12;
t_12 = "button";
frame.set("tags", t_12, true);
if(frame.topLevel) {
context.setVariable("tags", t_12);
}
if(frame.topLevel) {
context.addExport("tags", t_12);
}
;
}
t_10 += "\n";
t_10 += "\n";
if(runtime.contextOrFrameLookup(context, frame, "theme")) {
var t_13;
t_13 = runtime.contextOrFrameLookup(context, frame, "theme");
frame.set("theme_class", t_13, true);
if(frame.topLevel) {
context.setVariable("theme_class", t_13);
}
if(frame.topLevel) {
context.addExport("theme_class", t_13);
}
;
}
t_10 += "\n<";
t_10 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "tags"), env.opts.autoescape);
t_10 += "\n";
if(runtime.contextOrFrameLookup(context, frame, "tags") == "a") {
t_10 += " href=\"";
t_10 += runtime.suppressValue((runtime.contextOrFrameLookup(context, frame, "button_href")) || (runtime.contextOrFrameLookup(context, frame, "href")), env.opts.autoescape);
t_10 += "\"";
;
}
t_10 += "\n";
if(runtime.contextOrFrameLookup(context, frame, "id")) {
t_10 += " id=\"";
t_10 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id"), env.opts.autoescape);
t_10 += "\"";
;
}
t_10 += "\nclass=\"vf-button";
t_10 += "\n";
if(runtime.contextOrFrameLookup(context, frame, "theme_class")) {
t_10 += " vf-button--";
t_10 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "theme_class"), env.opts.autoescape);
;
}
if(runtime.contextOrFrameLookup(context, frame, "style")) {
frame = frame.push();
var t_16 = runtime.contextOrFrameLookup(context, frame, "style");
if(t_16) {t_16 = runtime.fromIterator(t_16);
var t_15 = t_16.length;
for(var t_14=0; t_14 < t_16.length; t_14++) {
var t_17 = t_16[t_14];
frame.set("styles", t_17);
frame.set("loop.index", t_14 + 1);
frame.set("loop.index0", t_14);
frame.set("loop.revindex", t_15 - t_14);
frame.set("loop.revindex0", t_15 - t_14 - 1);
frame.set("loop.first", t_14 === 0);
frame.set("loop.last", t_14 === t_15 - 1);
frame.set("loop.length", t_15);
t_10 += " vf-button--";
t_10 += runtime.suppressValue(t_17, env.opts.autoescape);
;
}
}
frame = frame.pop();
;
}
if(runtime.contextOrFrameLookup(context, frame, "size")) {
t_10 += "  vf-button--";
t_10 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "size"), env.opts.autoescape);
t_10 += "\n";
;
}
if(runtime.contextOrFrameLookup(context, frame, "override_class")) {
t_10 += " | ";
t_10 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "override_class"), env.opts.autoescape);
;
}
t_10 += "\">";
t_10 += runtime.suppressValue((runtime.contextOrFrameLookup(context, frame, "html")?env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "html")):runtime.contextOrFrameLookup(context, frame, "text")), env.opts.autoescape);
t_10 += "</";
t_10 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "tags"), env.opts.autoescape);
t_10 += ">\n";
cb(null, t_10);
;
return t_10;
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
