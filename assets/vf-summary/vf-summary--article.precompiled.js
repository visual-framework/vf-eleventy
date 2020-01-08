/**
 * Precompiled Nunjucks template: vf-summary--article.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["vf-summary--article"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<article class=\"vf-summary vf-summary--article\">\n\n  <h3 class=\"vf-summary__title\">\n    <a href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "summary__href"), env.opts.autoescape);
output += "\" class=\"vf-summary__link\">EMBL's top social media posts of 2017 and what we learned from them</a>\n  </h3>\n\n  <div class=\"vf-summary__meta\">\n    <a href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "summary__href"), env.opts.autoescape);
output += "\" class=\"vf-summary__author vf-summary__link\">Laura Howes</a>\n    <p class=\"vf-summary__date\">06 February 2018</p>\n    <a href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "summary__href"), env.opts.autoescape);
output += "\" class=\"vf-summary__link\">Leave Comment</a>\n  </div>\n\n  <p class=\"vf-summary__text\">I want to take a look back at my first full year as EMBL's social media manager. So what worked best over 2017 and what can I learn from this? My basic goals for VF’s social media are to build community and develop a shared understanding of who we as an organisation are. Consequently, I care about what resonates on the different social sites much more than driving traffic back to Visual Framework websites, although traffic is obviously a by-product.</p>\n\n</article>\n";
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
