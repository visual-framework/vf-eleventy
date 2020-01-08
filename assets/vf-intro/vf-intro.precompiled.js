/**
 * Precompiled Nunjucks template: vf-intro.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["vf-intro"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<section class=\"vf-intro | embl-grid embl-grid--has-centered-content\">\n  <div><!-- empty --></div>\n  <div>\n    <h1 class=\"vf-intro__heading ";
if(runtime.contextOrFrameLookup(context, frame, "vf_intro_phase")) {
output += "vf-intro__heading--has-tag";
;
}
output += "\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "vf_intro_heading"), env.opts.autoescape);
output += " ";
if(runtime.contextOrFrameLookup(context, frame, "vf_intro_phase")) {
output += "<a href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "intro_heading_href"), env.opts.autoescape);
output += "\" class=\"vf-badge vf-badge--primary vf-badge--phases\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "vf_intro_phase"), env.opts.autoescape);
output += "</a>";
;
}
output += "</h1>\n";
env.getExtension("render")["run"](context,"@vf-lede",{"vf_lede_text": runtime.contextOrFrameLookup(context, frame, "vf_intro_lede")}, function(t_2,t_1) {
if(t_2) { cb(t_2); return; }
output += runtime.suppressValue(t_1, true && env.opts.autoescape);
frame = frame.push();
var t_5 = runtime.fromIterator(runtime.contextOrFrameLookup(context, frame, "vf_intro_text"));
runtime.asyncEach(t_5, 1, function(intro_text, t_3, t_4,next) {
frame.set("intro_text", intro_text);
frame.set("loop.index", t_3 + 1);
frame.set("loop.index0", t_3);
frame.set("loop.revindex", t_4 - t_3);
frame.set("loop.revindex0", t_4 - t_3 - 1);
frame.set("loop.first", t_3 === 0);
frame.set("loop.last", t_3 === t_4 - 1);
frame.set("loop.length", t_4);
output += "<p class=\"vf-intro__text\">";
output += runtime.suppressValue(intro_text, env.opts.autoescape);
output += "</p>\n";
next(t_3);
;
}, function(t_7,t_6) {
if(t_7) { cb(t_7); return; }
frame = frame.pop();
output += "  </div>\n</section>\n";
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
