/**
 * Precompiled Nunjucks template: vf-design-tokens.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["vf-design-tokens"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<div class=\"vf-content embl-grid embl-grid--has-centered-content\">\n  <div></div>\n  <section>\n    <p>The Design Tokens used within `vf-core` are generated from several `.yml` files. These are then compiled into various Sass files as needed.</p>\n    <p>In the future we hope to offer Sketch and Photoshop colour palettes.</p>\n    <p>If you required a different format (LESS, iOS, Android). Please get in touch.</p>\n    <blockquote class=\"vf-u-margin-bottom--xl\">\n    Design tokens are the visual design atoms of the design system — specifically, they are named entities that store visual design attributes. We use them in place of hard-coded values (such as hex values for color or pixel values for spacing) in order to maintain a scalable and consistent visual system for UI development.\n    <br>\n    <br>\n    — <a href=\"https://www.lightningdesignsystem.com/design-tokens/\">Salesforce, Lightning Design System.</a>\n    </blockquote>\n  </section>\n</div>\n";
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
