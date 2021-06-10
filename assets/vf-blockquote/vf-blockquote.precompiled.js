/**
 * Precompiled Nunjucks template: vf-blockquote.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["vf-blockquote"] = (function() {
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
var t_3;
t_3 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"blockquote_text");
frame.set("blockquote_text", t_3, true);
if(frame.topLevel) {
context.setVariable("blockquote_text", t_3);
}
if(frame.topLevel) {
context.addExport("blockquote_text", t_3);
}
var t_4;
t_4 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"blockquote_citation");
frame.set("blockquote_citation", t_4, true);
if(frame.topLevel) {
context.setVariable("blockquote_citation", t_4);
}
if(frame.topLevel) {
context.addExport("blockquote_citation", t_4);
}
;
}
output += "\n<blockquote";
if(runtime.contextOrFrameLookup(context, frame, "id")) {
output += " id=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id"), env.opts.autoescape);
output += "\"";
;
}
output += " class=\"vf-blockquote";
if(runtime.contextOrFrameLookup(context, frame, "override_class")) {
output += " | ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "override_class"), env.opts.autoescape);
;
}
output += " | vf-stack vf-stack--400\">\n";
if((runtime.contextOrFrameLookup(context, frame, "blockquote_text")) || (runtime.contextOrFrameLookup(context, frame, "html")) || (runtime.contextOrFrameLookup(context, frame, "text"))) {
output += "    <p class=\"vf-blockquote__text\">";
output += runtime.suppressValue(((runtime.contextOrFrameLookup(context, frame, "html")) || (runtime.contextOrFrameLookup(context, frame, "blockquote_text"))?(runtime.contextOrFrameLookup(context, frame, "html")) || env.getFilter("safe").call(context, (runtime.contextOrFrameLookup(context, frame, "blockquote_text"))):runtime.contextOrFrameLookup(context, frame, "text")), env.opts.autoescape);
output += "</p>\n";
;
}
output += "\n";
if(runtime.contextOrFrameLookup(context, frame, "blockquote_citation")) {
output += "  <footer class=\"vf-blockquote__footer\">\n    <cite class=\"vf-blockquote__citation\">";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "blockquote_citation")), env.opts.autoescape);
output += "</cite>\n  </footer>\n";
;
}
output += "\n</blockquote>\n";
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
