/**
 * Precompiled Nunjucks template: vf-link--example.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["vf-link--example"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "\n<div class=\"vf-grid vf-u-padding--lg\">\n<!-- Default -->\n<a href=\"JavaScript:Void(0);\" class=\"vf-link \">A default link</a>\n<!-- Default Hover -->\n<a href=\"JavaScript:Void(0);\" class=\"vf-link vf-link--hover\">A default:hover link</a>\n<!-- Default Visited -->\n<a href=\"JavaScript:Void(0);\" class=\"vf-link vf-link--visited\">A default:visited link</a>\n<!-- Default Disabled -->\n<a href=\"JavaScript:Void(0);\" class=\"vf-link vf-link--disabled\" disabled>A disabled default link</a>\n</div>\n<div class=\"vf-grid vf-u-background-color--grey--dark vf-u-padding--lg\">\n<!-- Default -->\n<a href=\"JavaScript:Void(0);\" class=\"vf-link \">A default link</a>\n<!-- Default Hover -->\n<a href=\"JavaScript:Void(0);\" class=\"vf-link vf-link--hover\">A default:hover link</a>\n<!-- Default Visited -->\n<a href=\"JavaScript:Void(0);\" class=\"vf-link vf-link--visited\">A default:visited link</a>\n<!-- Default Disabled -->\n<a href=\"JavaScript:Void(0);\" class=\"vf-link vf-link--disabled\" disabled>A disabled default link</a>\n</div>\n<div class=\"vf-grid vf-u-padding--lg\">\n<!-- Primary -->\n<a href=\"JavaScript:Void(0);\" class=\"vf-link \">A primary link</a>\n<!-- Primary Hover -->\n<a href=\"JavaScript:Void(0);\" class=\"vf-link vf-link--hover\">A primary:hover link</a>\n<!-- Primary Visited -->\n<a href=\"JavaScript:Void(0);\" class=\"vf-link vf-link--visited\">A primary:visited link</a>\n<!-- Primary Disabled -->\n<a href=\"JavaScript:Void(0);\" class=\"vf-link vf-link--disabled\" disabled>A disabled primary link</a>\n</div>\n<div class=\"vf-grid vf-u-background-color--grey--dark vf-u-padding--lg\">\n<!-- Primary -->\n<a href=\"JavaScript:Void(0);\" class=\"vf-link \">A primary link</a>\n<!-- Primary Hover -->\n<a href=\"JavaScript:Void(0);\" class=\"vf-link vf-link--hover\">A primary:hover link</a>\n<!-- Primary Visited -->\n<a href=\"JavaScript:Void(0);\" class=\"vf-link vf-link--visited\">A primary:visited link</a>\n<!-- Primary Disabled -->\n<a href=\"JavaScript:Void(0);\" class=\"vf-link vf-link--disabled\" disabled>A disabled primary link</a>\n</div>\n<div class=\"vf-grid vf-u-padding--lg\">\n<!-- Secondary -->\n<a href=\"JavaScript:Void(0);\" class=\"vf-link vf-link--secondary \">A secondary link</a>\n<!-- Secondary Hover -->\n<a href=\"JavaScript:Void(0);\" class=\"vf-link vf-link--secondary vf-link--secondary--hover\">A secondary:hover link</a>\n<!-- Secondary Visited -->\n<a href=\"JavaScript:Void(0);\" class=\"vf-link vf-link--secondary vf-link--secondary--visited\">A secondary:visited link</a>\n<!-- Secondary Disabled -->\n<a href=\"JavaScript:Void(0);\" class=\"vf-link vf-link--secondary vf-link--disabled\" disabled>A disabled secondary link</a>\n<!-- Example -->\n<a href=\"\" class=\"vf-link \"></a>\n</div>\n<div class=\"vf-grid vf-u-background-color--grey--dark vf-u-padding--lg\">\n  <!-- Secondary -->\n  <a href=\"JavaScript:Void(0);\" class=\"vf-link vf-link--secondary \">A secondary link</a>\n  <!-- Secondary Hover -->\n  <a href=\"JavaScript:Void(0);\" class=\"vf-link vf-link--secondary vf-link--secondary--hover\">A secondary:hover link</a>\n  <!-- Secondary Visited -->\n  <a href=\"JavaScript:Void(0);\" class=\"vf-link vf-link--secondary vf-link--secondary--visited\">A secondary:visited link</a>\n  <!-- Secondary Disabled -->\n  <a href=\"JavaScript:Void(0);\" class=\"vf-link vf-link--secondary vf-link--disabled\" disabled>A disabled secondary link</a>\n  <!-- Example -->\n  <a href=\"JavaScript:Void(0);\" class=\"vf-link \"></a>\n</div>\n";
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
