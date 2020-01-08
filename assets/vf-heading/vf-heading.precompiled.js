/**
 * Precompiled Nunjucks template: vf-heading.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["vf-heading"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += runtime.suppressValue(env.getExtension("spaceless")["run"](context,function(cb) {
if(!cb) { cb = function(err) { if(err) { throw err; }}}
var t_1 = "";t_1 += "\n";
if(runtime.contextOrFrameLookup(context, frame, "tags")) {
;
}
else {
var t_2;
t_2 = "p";
frame.set("tags", t_2, true);
if(frame.topLevel) {
context.setVariable("tags", t_2);
}
if(frame.topLevel) {
context.addExport("tags", t_2);
}
;
}
t_1 += "\n";
t_1 += "\n";
if(runtime.contextOrFrameLookup(context, frame, "style")) {
var t_3;
t_3 = runtime.contextOrFrameLookup(context, frame, "style");
frame.set("style_class", t_3, true);
if(frame.topLevel) {
context.setVariable("style_class", t_3);
}
if(frame.topLevel) {
context.addExport("style_class", t_3);
}
;
}
t_1 += "\n<";
t_1 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "tags"), env.opts.autoescape);
t_1 += "\n\n";
if(runtime.contextOrFrameLookup(context, frame, "id")) {
t_1 += " id=\"";
t_1 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id"), env.opts.autoescape);
t_1 += "\"";
;
}
t_1 += "\nclass=\"vf-text";
if(runtime.contextOrFrameLookup(context, frame, "type")) {
t_1 += " vf-text-heading--";
t_1 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "type"), env.opts.autoescape);
;
}
if(runtime.contextOrFrameLookup(context, frame, "style_class")) {
t_1 += " vf-text--";
t_1 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "style_class"), env.opts.autoescape);
;
}
if(runtime.contextOrFrameLookup(context, frame, "override_class")) {
t_1 += " | ";
t_1 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "override_class"), env.opts.autoescape);
;
}
t_1 += "\">";
t_1 += runtime.suppressValue((runtime.contextOrFrameLookup(context, frame, "html")?env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "html")):runtime.contextOrFrameLookup(context, frame, "heading")), env.opts.autoescape);
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
