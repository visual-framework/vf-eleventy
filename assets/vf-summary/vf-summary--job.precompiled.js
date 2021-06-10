/**
 * Precompiled Nunjucks template: vf-summary--job.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["vf-summary--job"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
if(runtime.contextOrFrameLookup(context, frame, "context")) {
var t_1;
t_1 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"summary__href");
frame.set("summary__href", t_1, true);
if(frame.topLevel) {
context.setVariable("summary__href", t_1);
}
if(frame.topLevel) {
context.addExport("summary__href", t_1);
}
var t_2;
t_2 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"summary__title");
frame.set("summary__title", t_2, true);
if(frame.topLevel) {
context.setVariable("summary__title", t_2);
}
if(frame.topLevel) {
context.addExport("summary__title", t_2);
}
var t_3;
t_3 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"summary__text");
frame.set("summary__text", t_3, true);
if(frame.topLevel) {
context.setVariable("summary__text", t_3);
}
if(frame.topLevel) {
context.addExport("summary__text", t_3);
}
var t_4;
t_4 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"summary__meta");
frame.set("summary__meta", t_4, true);
if(frame.topLevel) {
context.setVariable("summary__meta", t_4);
}
if(frame.topLevel) {
context.addExport("summary__meta", t_4);
}
var t_5;
t_5 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"summary__date");
frame.set("summary__date", t_5, true);
if(frame.topLevel) {
context.setVariable("summary__date", t_5);
}
if(frame.topLevel) {
context.addExport("summary__date", t_5);
}
var t_6;
t_6 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"summary__date_meta");
frame.set("summary__date_meta", t_6, true);
if(frame.topLevel) {
context.setVariable("summary__date_meta", t_6);
}
if(frame.topLevel) {
context.addExport("summary__date_meta", t_6);
}
;
}
output += "\n<article class=\"vf-summary vf-summary--job\">\n  <p class=\"vf-summary__meta\">";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "summary__meta")), env.opts.autoescape);
output += "</p>\n\n  <h3 class=\"vf-summary__title\">\n\n    <a href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "summary__href"), env.opts.autoescape);
output += "\" class=\"vf-summary__link\">\n      ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "summary__title"), env.opts.autoescape);
output += "\n    </a>\n\n  </h3>\n\n  <p class=\"vf-summary__text\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "summary__text"), env.opts.autoescape);
output += "</p>\n\n  <p class=\"vf-summary__date\">";
if(runtime.contextOrFrameLookup(context, frame, "summary__date_meta")) {
output += "    <span>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "summary__date_meta"), env.opts.autoescape);
output += "</span>\n";
;
}
output += "    Posted ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "summary__date"), env.opts.autoescape);
output += "</p>\n\n</article>\n";
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
