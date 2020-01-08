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
output += runtime.suppressValue(env.getExtension("spaceless")["run"](context,function(cb) {
if(!cb) { cb = function(err) { if(err) { throw err; }}}
var t_1 = "";t_1 += "\n";
if(runtime.contextOrFrameLookup(context, frame, "href")) {
var t_2;
t_2 = "a";
frame.set("tags", t_2, true);
if(frame.topLevel) {
context.setVariable("tags", t_2);
}
if(frame.topLevel) {
context.addExport("tags", t_2);
}
;
}
else {
var t_3;
t_3 = "span";
frame.set("tags", t_3, true);
if(frame.topLevel) {
context.setVariable("tags", t_3);
}
if(frame.topLevel) {
context.addExport("tags", t_3);
}
;
}
t_1 += "\n";
t_1 += "\n";
if(runtime.contextOrFrameLookup(context, frame, "theme")) {
var t_4;
t_4 = runtime.contextOrFrameLookup(context, frame, "theme");
frame.set("theme_class", t_4, true);
if(frame.topLevel) {
context.setVariable("theme_class", t_4);
}
if(frame.topLevel) {
context.addExport("theme_class", t_4);
}
;
}
t_1 += "\n\n";
t_1 += "\n<";
t_1 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "tags"), env.opts.autoescape);
t_1 += "\n";
if(runtime.contextOrFrameLookup(context, frame, "tags") == "a") {
t_1 += " href=\"";
t_1 += runtime.suppressValue((runtime.contextOrFrameLookup(context, frame, "badge_href")?runtime.contextOrFrameLookup(context, frame, "badge_href"):"#"), env.opts.autoescape);
t_1 += "\"";
;
}
t_1 += "\n";
if(runtime.contextOrFrameLookup(context, frame, "id")) {
t_1 += " id=\"";
t_1 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id"), env.opts.autoescape);
t_1 += "\"";
;
}
t_1 += "\nclass=\"vf-badge";
if(runtime.contextOrFrameLookup(context, frame, "theme_class")) {
t_1 += " vf-badge--";
t_1 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "theme_class"), env.opts.autoescape);
;
}
if(runtime.contextOrFrameLookup(context, frame, "style")) {
frame = frame.push();
var t_7 = runtime.contextOrFrameLookup(context, frame, "style");
if(t_7) {t_7 = runtime.fromIterator(t_7);
var t_6 = t_7.length;
for(var t_5=0; t_5 < t_7.length; t_5++) {
var t_8 = t_7[t_5];
frame.set("styles", t_8);
frame.set("loop.index", t_5 + 1);
frame.set("loop.index0", t_5);
frame.set("loop.revindex", t_6 - t_5);
frame.set("loop.revindex0", t_6 - t_5 - 1);
frame.set("loop.first", t_5 === 0);
frame.set("loop.last", t_5 === t_6 - 1);
frame.set("loop.length", t_6);
t_1 += " vf-badge--";
t_1 += runtime.suppressValue(t_8, env.opts.autoescape);
;
}
}
frame = frame.pop();
;
}
if(runtime.contextOrFrameLookup(context, frame, "override_class")) {
t_1 += " | ";
t_1 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "override_class"), env.opts.autoescape);
;
}
t_1 += "\">";
t_1 += runtime.suppressValue((runtime.contextOrFrameLookup(context, frame, "html")?env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "html")):runtime.contextOrFrameLookup(context, frame, "text")), env.opts.autoescape);
t_1 += "</";
t_1 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "tags"), env.opts.autoescape);
t_1 += ">\n";
cb(null, t_1);
;
return t_1;
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
