/**
 * Precompiled Nunjucks template: vf-link.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["vf-link"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += runtime.suppressValue(env.getExtension("spaceless")["run"](context,function(cb) {
if(!cb) { cb = function(err) { if(err) { throw err; }}}
var t_1 = "";t_1 += "\n";
t_1 += "\n";
var t_2;
t_2 = false;
frame.set("disabled", t_2, true);
if(frame.topLevel) {
context.setVariable("disabled", t_2);
}
if(frame.topLevel) {
context.addExport("disabled", t_2);
}
t_1 += "\n<a\n";
if(runtime.contextOrFrameLookup(context, frame, "id")) {
t_1 += " id=\"";
t_1 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id"), env.opts.autoescape);
t_1 += "\"";
;
}
t_1 += "\nhref=\"";
t_1 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "link_href"), env.opts.autoescape);
t_1 += "\"\n\n";
if(runtime.contextOrFrameLookup(context, frame, "target")) {
t_1 += " target=\"_";
t_1 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "target"), env.opts.autoescape);
t_1 += "\"";
;
}
t_1 += "\nclass=\"vf-link\n\n";
if(runtime.contextOrFrameLookup(context, frame, "theme")) {
t_1 += "vf-link--";
t_1 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "theme"), env.opts.autoescape);
;
}
t_1 += "\n";
if(runtime.contextOrFrameLookup(context, frame, "style")) {
frame = frame.push();
var t_5 = runtime.contextOrFrameLookup(context, frame, "style");
if(t_5) {t_5 = runtime.fromIterator(t_5);
var t_4 = t_5.length;
for(var t_3=0; t_3 < t_5.length; t_3++) {
var t_6 = t_5[t_3];
frame.set("styles", t_6);
frame.set("loop.index", t_3 + 1);
frame.set("loop.index0", t_3);
frame.set("loop.revindex", t_4 - t_3);
frame.set("loop.revindex0", t_4 - t_3 - 1);
frame.set("loop.first", t_3 === 0);
frame.set("loop.last", t_3 === t_4 - 1);
frame.set("loop.length", t_4);
t_1 += "    ";
if(t_6 == "disabled") {
t_1 += "      vf-link--";
t_1 += runtime.suppressValue(t_6, env.opts.autoescape);
var t_7;
t_7 = true;
frame.set("disabled", t_7, true);
if(frame.topLevel) {
context.setVariable("disabled", t_7);
}
if(frame.topLevel) {
context.addExport("disabled", t_7);
}
;
}
else {
t_1 += "      vf-link--";
if(runtime.contextOrFrameLookup(context, frame, "theme")) {
t_1 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "theme"), env.opts.autoescape);
t_1 += "--";
;
}
t_1 += runtime.suppressValue(t_6, env.opts.autoescape);
;
}
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
t_1 += "\"\n\n";
if(runtime.contextOrFrameLookup(context, frame, "disabled")) {
t_1 += " disabled";
;
}
t_1 += ">";
t_1 += runtime.suppressValue((runtime.contextOrFrameLookup(context, frame, "html")?env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "html")):runtime.contextOrFrameLookup(context, frame, "text")), env.opts.autoescape);
t_1 += "</a>\n";
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
