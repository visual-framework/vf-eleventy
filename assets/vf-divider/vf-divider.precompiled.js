/**
 * Precompiled Nunjucks template: vf-divider.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["vf-divider"] = (function() {
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
t_2 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"override_class");
frame.set("override_class", t_2, true);
if(frame.topLevel) {
context.setVariable("override_class", t_2);
}
if(frame.topLevel) {
context.addExport("override_class", t_2);
}
;
}
output += "\n<hr\n";
if(runtime.contextOrFrameLookup(context, frame, "id")) {
output += " id=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id"), env.opts.autoescape);
output += "\"";
;
}
output += "class=\"vf-divider";
if(runtime.contextOrFrameLookup(context, frame, "override_class")) {
output += " | ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "override_class"), env.opts.autoescape);
;
}
output += "\"";
if(runtime.contextOrFrameLookup(context, frame, "context_margin__inline")) {
output += " style=\"--context-margin--inline: ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "context_margin__inline"), env.opts.autoescape);
output += ";\"";
;
}
output += ">\n";
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
