/**
 * Precompiled Nunjucks template: vf-text.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["vf-text"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += runtime.suppressValue(env.getExtension("spaceless")["run"](context,function(cb) {
if(!cb) { cb = function(err) { if(err) { throw err; }}}
var t_1 = "";t_1 += "\n<p\n";
if(runtime.contextOrFrameLookup(context, frame, "id")) {
t_1 += " id=\"";
t_1 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id"), env.opts.autoescape);
t_1 += "\"";
;
}
t_1 += "\nclass=\"vf-text-body";
if(runtime.contextOrFrameLookup(context, frame, "type")) {
t_1 += " vf-text-body--";
t_1 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "type"), env.opts.autoescape);
;
}
if(runtime.contextOrFrameLookup(context, frame, "override_class")) {
t_1 += " | ";
t_1 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "override_class"), env.opts.autoescape);
;
}
t_1 += "\">";
t_1 += runtime.suppressValue((runtime.contextOrFrameLookup(context, frame, "html")?env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "html")):runtime.contextOrFrameLookup(context, frame, "text")), env.opts.autoescape);
t_1 += "</p>\n\n";
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
