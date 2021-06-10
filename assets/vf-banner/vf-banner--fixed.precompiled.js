/**
 * Precompiled Nunjucks template: vf-banner--fixed.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["vf-banner--fixed"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<!-- dismissible banner -->\n<div class=\"vf-banner vf-banner--fixed vf-banner--bottom vf-banner--notice\"\ndata-vf-js-banner\ndata-vf-js-banner-state=\"dismissible\"\ndata-vf-js-banner-button-text=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "banner__text"), env.opts.autoescape);
output += "\"\ndata-vf-js-banner-cookie-name=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "data") - runtime.contextOrFrameLookup(context, frame, "service") - runtime.contextOrFrameLookup(context, frame, "id"), env.opts.autoescape);
output += "\"\ndata-vf-js-banner-cookie-version=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "data") - runtime.contextOrFrameLookup(context, frame, "protection") - runtime.contextOrFrameLookup(context, frame, "version"), env.opts.autoescape);
output += "\"\ndata-vf-js-banner-extra-button=\"<a href='#'>Optional button</a><a target='_blank' href='#'>New tab button</a>\"\ndata-vf-js-banner-auto-accept=\"false\">\n  <div class=\"vf-banner__content | vf-grid\" data-vf-js-banner-text>\n    <p class=\"vf-banner__text vf-banner__text--lg\">\n      This website uses cookies, and the limiting processing of your personal data to function. By using the site you are agreeing to this as outlined in our <a class=\"vf-banner__link\" href=\"JavaScript:Void(0);\">Privacy Notice</a> and <a class=\"vf-banner__link\" href=\"JavaScript:Void(0);\">Terms Of Use</a>.\n    </p>\n  </div>\n</div>\n\n<!-- persistent banner -->\n<!-- <div class=\"vf-banner vf-banner--fixed vf-banner--bottom vf-banner--notice\"\ndata-vf-js-banner\ndata-vf-js-banner-state=\"persistent\"\ndata-vf-js-banner-extra-button=\"<a href='#'>Optional button</a><a target='_blank' href='#'>New tab button</a>\">\n  <div class=\"vf-banner__content | vf-grid\" data-vf-js-banner-notice-text>\n    <p class=\"vf-text vf-text-body--2\">\n      A persistent banner <a class=\"vf-link\" href=\"JavaScript:Void(0);\">Privacy Notice</a> and <a class=\"vf-link\" href=\"JavaScript:Void(0);\">Terms Of Use</a>.\n    </p>\n  </div>\n</div> -->\n\n<!-- Blocking, dismissible banner -->\n<!-- <div class=\"vf-banner vf-banner--blocking vf-banner--notice\"\ndata-vf-js-banner\ndata-vf-js-banner-state=\"blocking\" data-vf-js-banner-esc-close=\"y\"\ndata-vf-js-banner-cookie-name=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "data") - runtime.contextOrFrameLookup(context, frame, "service") - runtime.contextOrFrameLookup(context, frame, "id"), env.opts.autoescape);
output += "\"\ndata-vf-js-banner-cookie-version=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "data") - runtime.contextOrFrameLookup(context, frame, "protection") - runtime.contextOrFrameLookup(context, frame, "version"), env.opts.autoescape);
output += "\">\n  <div class=\"vf-banner__content | vf-grid\" data-vf-js-banner-notice-text>\n\n    <div class=\"vf-box\">\n        <h2 class=\"vf-text vf-text-heading-2\">A blocking banner</h2>\n        <p class=\"vf-text vf-text-body--3\">This might have a richer layout. Note, this implementation is not yet feature complete.</p>\n    </div>\n\n  </div>\n</div> -->\n\n<!-- programmatic banner -->\n<!-- <div class=\"vf-banner vf-banner--fixed vf-banner--bottom vf-banner--notice\"\n      data-vf-js-banner-id=\"32423\"\n></div> -->\n";
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
