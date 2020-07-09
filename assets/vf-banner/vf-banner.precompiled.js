/**
 * Precompiled Nunjucks template: vf-banner.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["vf-banner"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<div class=\"vf-banner";
if(runtime.contextOrFrameLookup(context, frame, "banner__info") == true) {
output += " vf-banner--alert vf-banner--info";
;
}
if(runtime.contextOrFrameLookup(context, frame, "banner__warning") == true) {
output += " vf-banner--alert vf-banner--warning";
;
}
if(runtime.contextOrFrameLookup(context, frame, "banner__danger") == true) {
output += " vf-banner--alert vf-banner--danger";
;
}
if(runtime.contextOrFrameLookup(context, frame, "banner__success") == true) {
output += " vf-banner--alert vf-banner--success";
;
}
output += "\">\n\n  <div class=\"vf-banner__content\">\n\n    <p class=\"vf-banner__text\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "banner__message"), env.opts.autoescape);
output += "</p>\n\n";
if(runtime.contextOrFrameLookup(context, frame, "banner__dismissable") == true) {
output += "    <button role=\"button\" aria-label=\"close notification banner\" class=\"vf-button vf-button--icon vf-button--dismiss | vf-banner__button\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><title>dismiss banner</title><path d=\"M14.3,12.179a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.442L12.177,9.7a.25.25,0,0,1-.354,0L2.561.442A1.5,1.5,0,0,0,.439,2.563L9.7,11.825a.25.25,0,0,1,0,.354L.439,21.442a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,0,0,2.122-2.121Z\"/></svg>\n    </button>\n";
;
}
output += "\n  </div>\n\n</div>\n";
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
