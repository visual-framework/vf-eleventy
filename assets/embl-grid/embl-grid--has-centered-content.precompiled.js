/**
 * Precompiled Nunjucks template: embl-grid--has-centered-content.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["embl-grid--has-centered-content"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
if(runtime.contextOrFrameLookup(context, frame, "context")) {
var t_1;
t_1 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"embl_grid__type");
frame.set("embl_grid__type", t_1, true);
if(frame.topLevel) {
context.setVariable("embl_grid__type", t_1);
}
if(frame.topLevel) {
context.addExport("embl_grid__type", t_1);
}
var t_2;
t_2 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"embl_grid__hairline");
frame.set("embl_grid__hairline", t_2, true);
if(frame.topLevel) {
context.setVariable("embl_grid__hairline", t_2);
}
if(frame.topLevel) {
context.addExport("embl_grid__hairline", t_2);
}
var t_3;
t_3 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"embl_grid__modifier");
frame.set("embl_grid__modifier", t_3, true);
if(frame.topLevel) {
context.setVariable("embl_grid__modifier", t_3);
}
if(frame.topLevel) {
context.addExport("embl_grid__modifier", t_3);
}
;
}
output += "\n<div class=\"embl-grid";
if(runtime.contextOrFrameLookup(context, frame, "embl_grid__type") == "centered") {
output += " embl-grid--has-centered-content";
;
}
else {
if(runtime.contextOrFrameLookup(context, frame, "embl_grid__type") == "sidebar") {
output += " embl-grid--has-sidebar";
;
}
;
}
if(runtime.contextOrFrameLookup(context, frame, "embl_grid__hairline")) {
output += " embl-grid-has-sidebar--hairline";
;
}
if(runtime.contextOrFrameLookup(context, frame, "embl_grid__modifier")) {
output += " | ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "embl_grid__modifier"), env.opts.autoescape);
;
}
output += "\">\n  <div></div>\n  <div>\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus fugiat delectus dolore molestias rerum? Dolores doloribus impedit quasi provident odit perferendis vitae incidunt, mollitia repellendus a alias necessitatibus, molestiae! Nesciunt. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta dolor odit vel ipsa consequatur sunt, esse sapiente commodi harum velit asperiores quasi nostrum sint dolorem blanditiis eum magnam voluptatibus aliquam.</p>\n  </div>\n  <div></div>\n</div>\n";
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
