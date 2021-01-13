/**
 * Precompiled Nunjucks template: vf-stack--md.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["vf-stack--md"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
if(runtime.contextOrFrameLookup(context, frame, "context")) {
var t_1;
t_1 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"stack__spacing");
frame.set("stack__spacing", t_1, true);
if(frame.topLevel) {
context.setVariable("stack__spacing", t_1);
}
if(frame.topLevel) {
context.addExport("stack__spacing", t_1);
}
var t_2;
t_2 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"stack__modifier");
frame.set("stack__modifier", t_2, true);
if(frame.topLevel) {
context.setVariable("stack__modifier", t_2);
}
if(frame.topLevel) {
context.addExport("stack__modifier", t_2);
}
var t_3;
t_3 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"stack__spacing__custom");
frame.set("stack__spacing__custom", t_3, true);
if(frame.topLevel) {
context.setVariable("stack__spacing__custom", t_3);
}
if(frame.topLevel) {
context.addExport("stack__spacing__custom", t_3);
}
var t_4;
t_4 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"custom_spacing_property");
frame.set("custom_spacing_property", t_4, true);
if(frame.topLevel) {
context.setVariable("custom_spacing_property", t_4);
}
if(frame.topLevel) {
context.addExport("custom_spacing_property", t_4);
}
;
}
output += "\n<div class=\"vf-stack";
if(runtime.contextOrFrameLookup(context, frame, "stack__spacing")) {
output += " vf-stack--";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "stack__spacing"), env.opts.autoescape);
;
}
if(runtime.contextOrFrameLookup(context, frame, "stack__modifier")) {
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "stack__modifier"), env.opts.autoescape);
;
}
output += "\"";
if(runtime.contextOrFrameLookup(context, frame, "stack__spacing__custom") || runtime.contextOrFrameLookup(context, frame, "custom_spacing_property")) {
output += " style=\"--vf-stack-margin--custom: ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "stack__spacing__custom") || runtime.contextOrFrameLookup(context, frame, "custom_spacing_property"), env.opts.autoescape);
output += ";\"";
;
}
output += ">\n\n";
env.getExtension("render")["run"](context,"@vf-box--normal-primary", function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
output += runtime.suppressValue(t_5, true && env.opts.autoescape);
env.getExtension("render")["run"](context,"@vf-box--normal-primary", function(t_8,t_7) {
if(t_8) { cb(t_8); return; }
output += runtime.suppressValue(t_7, true && env.opts.autoescape);
env.getExtension("render")["run"](context,"@vf-box--normal-primary", function(t_10,t_9) {
if(t_10) { cb(t_10); return; }
output += runtime.suppressValue(t_9, true && env.opts.autoescape);
output += "\n</div>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
