/**
 * Precompiled Nunjucks template: vf-form__legend.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["vf-form__legend"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
if(runtime.contextOrFrameLookup(context, frame, "context")) {
var t_1;
t_1 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"legend__text");
frame.set("legend__text", t_1, true);
if(frame.topLevel) {
context.setVariable("legend__text", t_1);
}
if(frame.topLevel) {
context.addExport("legend__text", t_1);
}
var t_2;
t_2 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"required");
frame.set("required", t_2, true);
if(frame.topLevel) {
context.setVariable("required", t_2);
}
if(frame.topLevel) {
context.addExport("required", t_2);
}
;
}
output += "\n<legend class=\"vf-form__legend";
if(runtime.contextOrFrameLookup(context, frame, "required")) {
output += " | vf-form__legend--required";
;
}
output += "\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "legend__text"), env.opts.autoescape);
if(runtime.contextOrFrameLookup(context, frame, "required")) {
output += "<span class=\"vf-u-sr-only\">field is required.</span>\n<svg class=\"vf-icon vf-icon--asterick\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><title>asterick</title><path d=\"M23.555,8.729a1.505,1.505,0,0,0-1.406-.98H16.062a.5.5,0,0,1-.472-.334L13.405,1.222a1.5,1.5,0,0,0-2.81,0l-.005.016L8.41,7.415a.5.5,0,0,1-.471.334H1.85A1.5,1.5,0,0,0,.887,10.4l5.184,4.3a.5.5,0,0,1,.155.543L4.048,21.774a1.5,1.5,0,0,0,2.31,1.684l5.346-3.92a.5.5,0,0,1,.591,0l5.344,3.919a1.5,1.5,0,0,0,2.312-1.683l-2.178-6.535a.5.5,0,0,1,.155-.543l5.194-4.306A1.5,1.5,0,0,0,23.555,8.729Z\"/></svg>\n";
;
}
output += "</legend>\n";
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
