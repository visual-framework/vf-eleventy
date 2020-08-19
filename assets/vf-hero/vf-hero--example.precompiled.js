/**
 * Precompiled Nunjucks template: vf-hero--example.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["vf-hero--example"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<section class=\"vf-hero vf-hero--very-easy\">\n\n  <div class=\"vf-hero__content\">\n";
if(runtime.contextOrFrameLookup(context, frame, "vf_hero_heading")) {
output += " <h2 class=\"vf-hero__heading\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "vf_hero_heading"), env.opts.autoescape);
output += "</h2>";
;
}
output += "    <p class=\"vf-hero__text\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "vf_hero_text"), env.opts.autoescape);
output += "<a class=\"vf-link\" href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "vf_hero_link"), env.opts.autoescape);
output += "\"> ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "vf_hero_link_text"), env.opts.autoescape);
output += "</a></p>\n  </div>\n\n</section>\n\n<section class=\"vf-hero vf-hero--easy\">\n  <style>.vf-hero {--vf-hero-bg-image: url('../../assets/vf-hero/assets/vf-intro-group.png');}</style>\n\n  <div class=\"vf-hero__content\">\n";
if(runtime.contextOrFrameLookup(context, frame, "vf_hero_heading")) {
output += " <h2 class=\"vf-hero__heading\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "vf_hero_heading"), env.opts.autoescape);
output += "</h2>";
;
}
output += "    <p class=\"vf-hero__text\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "vf_hero_text"), env.opts.autoescape);
output += "<a class=\"vf-link\" href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "vf_hero_link"), env.opts.autoescape);
output += "\"> ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "vf_hero_link_text"), env.opts.autoescape);
output += "</a></p>\n  </div>\n\n</section>\n\n<section class=\"vf-hero vf-hero--normal | vf-hero-theme--primary\">\n  <style>.vf-hero {--vf-hero-bg-image: url('../../assets/vf-hero/assets/vf-intro-group.png');}</style>\n\n  <div class=\"vf-hero__content\">\n";
if(runtime.contextOrFrameLookup(context, frame, "vf_hero_heading")) {
output += " <h2 class=\"vf-hero__heading\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "vf_hero_heading"), env.opts.autoescape);
output += "</h2>";
;
}
output += "    <p class=\"vf-hero__text\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "vf_hero_text"), env.opts.autoescape);
output += "<a class=\"vf-link\" href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "vf_hero_link"), env.opts.autoescape);
output += "\"> ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "vf_hero_link_text"), env.opts.autoescape);
output += "</a></p>\n  </div>\n\n</section>\n\n<section class=\"vf-hero vf-hero--hard | vf-hero-theme--tertiary\">\n  <style>.vf-hero {--vf-hero-bg-image: url('../../assets/vf-hero/assets/vf-intro-group.png');}</style>\n\n  <div class=\"vf-hero__content\">\n";
if(runtime.contextOrFrameLookup(context, frame, "vf_hero_heading")) {
output += " <h2 class=\"vf-hero__heading\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "vf_hero_heading"), env.opts.autoescape);
output += "</h2>";
;
}
output += "    <p class=\"vf-hero__text\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "vf_hero_text"), env.opts.autoescape);
output += "<a class=\"vf-link\" href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "vf_hero_link"), env.opts.autoescape);
output += "\"> ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "vf_hero_link_text"), env.opts.autoescape);
output += "</a></p>\n  </div>\n\n</section>\n\n<section class=\"vf-hero vf-hero--hard | vf-hero-theme--primary\">\n  <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"200\" height=\"200\" class=\"vf-lens | vf-hero__lens\">\n    <path fill=\"\" d=\"M1,1V199H199V1z\"/>\n  </svg>\n\n  <div class=\"vf-hero__content\">\n";
if(runtime.contextOrFrameLookup(context, frame, "vf_hero_heading")) {
output += " <h2 class=\"vf-hero__heading\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "vf_hero_heading"), env.opts.autoescape);
output += "</h2>";
;
}
output += "    <p class=\"vf-hero__text\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "vf_hero_text"), env.opts.autoescape);
output += "<a class=\"vf-link\" href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "vf_hero_link"), env.opts.autoescape);
output += "\"> ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "vf_hero_link_text"), env.opts.autoescape);
output += "</a></p>\n  </div>\n</section>\n\n\n\n\n<section class=\"vf-hero vf-hero--extreme\">\n  <div class=\"vf-hero__image\">\n    <img src=\"";
output += runtime.suppressValue(env.getFilter("path").call(context, "../../assets/vf-hero/assets/vf-intro-group.png"), env.opts.autoescape);
output += "\" alt=\"\">\n  </div>\n\n  <div class=\"vf-hero__content\">\n";
if(runtime.contextOrFrameLookup(context, frame, "vf_hero_heading")) {
output += " <h2 class=\"vf-hero__heading\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "vf_hero_heading"), env.opts.autoescape);
output += "</h2>";
;
}
output += "    <p class=\"vf-hero__text\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "vf_hero_text"), env.opts.autoescape);
output += "<a class=\"vf-link\" href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "vf_hero_link"), env.opts.autoescape);
output += "\"> ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "vf_hero_link_text"), env.opts.autoescape);
output += "</a></p>\n  </div>\n</section>\n";
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
