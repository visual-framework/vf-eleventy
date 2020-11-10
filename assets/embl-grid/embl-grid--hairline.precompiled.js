/**
 * Precompiled Nunjucks template: embl-grid--hairline.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["embl-grid--hairline"] = (function() {
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
output += "\">\n";
env.getExtension("render")["run"](context,"@vf-section-header", function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
output += runtime.suppressValue(t_4, true && env.opts.autoescape);
output += "  <div class=\"vf-content\">\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus fugiat delectus dolore molestias rerum? Dolores doloribus impedit quasi provident odit perferendis vitae incidunt, mollitia repellendus a alias necessitatibus, molestiae! Nesciunt.</p>\n  </div>\n";
env.getExtension("render")["run"](context,"@vf-box--normal-primary", function(t_7,t_6) {
if(t_7) { cb(t_7); return; }
output += runtime.suppressValue(t_6, true && env.opts.autoescape);
output += "</div>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
