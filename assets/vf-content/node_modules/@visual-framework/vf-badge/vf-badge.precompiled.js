/**
 * Precompiled Nunjucks template: vf-badge.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["vf-badge"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
if(runtime.contextOrFrameLookup(context, frame, "context")) {
output += "\n";
var t_1;
t_1 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"badge_href");
frame.set("badge_href", t_1, true);
if(frame.topLevel) {
context.setVariable("badge_href", t_1);
}
if(frame.topLevel) {
context.addExport("badge_href", t_1);
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
t_5 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"html");
frame.set("html", t_5, true);
if(frame.topLevel) {
context.setVariable("html", t_5);
}
if(frame.topLevel) {
context.addExport("html", t_5);
}
output += "\n";
;
}
output += runtime.suppressValue(env.getExtension("spaceless")["run"](context,function(cb) {
if(!cb) { cb = function(err) { if(err) { throw err; }}}
var t_6 = "";t_6 += "\n";
if(runtime.contextOrFrameLookup(context, frame, "badge_href")) {
var t_7;
t_7 = "a";
frame.set("tags", t_7, true);
if(frame.topLevel) {
context.setVariable("tags", t_7);
}
if(frame.topLevel) {
context.addExport("tags", t_7);
}
;
}
else {
var t_8;
t_8 = "span";
frame.set("tags", t_8, true);
if(frame.topLevel) {
context.setVariable("tags", t_8);
}
if(frame.topLevel) {
context.addExport("tags", t_8);
}
;
}
t_6 += "\n";
t_6 += "\n";
if(runtime.contextOrFrameLookup(context, frame, "theme")) {
var t_9;
t_9 = runtime.contextOrFrameLookup(context, frame, "theme");
frame.set("theme_class", t_9, true);
if(frame.topLevel) {
context.setVariable("theme_class", t_9);
}
if(frame.topLevel) {
context.addExport("theme_class", t_9);
}
;
}
t_6 += "\n\n";
t_6 += "\n<";
t_6 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "tags"), env.opts.autoescape);
t_6 += "\n";
if(runtime.contextOrFrameLookup(context, frame, "tags") == "a") {
t_6 += " href=\"";
t_6 += runtime.suppressValue((runtime.contextOrFrameLookup(context, frame, "badge_href")?runtime.contextOrFrameLookup(context, frame, "badge_href"):"#"), env.opts.autoescape);
t_6 += "\"";
;
}
t_6 += "\n";
if(runtime.contextOrFrameLookup(context, frame, "id")) {
t_6 += " id=\"";
t_6 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id"), env.opts.autoescape);
t_6 += "\"";
;
}
t_6 += "\nclass=\"vf-badge";
if(runtime.contextOrFrameLookup(context, frame, "theme_class")) {
t_6 += " vf-badge--";
t_6 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "theme_class"), env.opts.autoescape);
;
}
if(runtime.contextOrFrameLookup(context, frame, "style")) {
frame = frame.push();
var t_12 = runtime.contextOrFrameLookup(context, frame, "style");
if(t_12) {t_12 = runtime.fromIterator(t_12);
var t_11 = t_12.length;
for(var t_10=0; t_10 < t_12.length; t_10++) {
var t_13 = t_12[t_10];
frame.set("styles", t_13);
frame.set("loop.index", t_10 + 1);
frame.set("loop.index0", t_10);
frame.set("loop.revindex", t_11 - t_10);
frame.set("loop.revindex0", t_11 - t_10 - 1);
frame.set("loop.first", t_10 === 0);
frame.set("loop.last", t_10 === t_11 - 1);
frame.set("loop.length", t_11);
t_6 += " vf-badge--";
t_6 += runtime.suppressValue(t_13, env.opts.autoescape);
;
}
}
frame = frame.pop();
;
}
if(runtime.contextOrFrameLookup(context, frame, "override_class")) {
t_6 += " | ";
t_6 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "override_class"), env.opts.autoescape);
;
}
t_6 += "\">";
t_6 += runtime.suppressValue((runtime.contextOrFrameLookup(context, frame, "html")?env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "html")):runtime.contextOrFrameLookup(context, frame, "text")), env.opts.autoescape);
t_6 += "</";
t_6 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "tags"), env.opts.autoescape);
t_6 += ">\n";
cb(null, t_6);
;
return t_6;
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
