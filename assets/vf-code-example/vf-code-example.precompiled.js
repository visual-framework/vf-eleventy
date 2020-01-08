/**
 * Precompiled Nunjucks template: vf-code-example.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["vf-code-example"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<pre class=\"vf-code-example__pre\"><code class=\"Code Code--lang-html vf-code-example\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">pre</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vf-code-example__pre\"</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">code</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"vf-code-example\"</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">your</span> <span class=\"hljs-attr\">special</span> <span class=\"hljs-attr\">code</span> <span class=\"hljs-attr\">here</span>&gt;</span>\nMaybe some html tags?\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">link</span> <span class=\"hljs-attr\">rel</span>=<span class=\"hljs-string\">\"stylesheet\"</span> <span class=\"hljs-attr\">href</span>=<span class=\"hljs-string\">\"https://aurl\"</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span> <span class=\"hljs-attr\">src</span>=<span class=\"hljs-string\">\"https://aurl\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">code</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">pre</span>&gt;</span>\n</code></pre>\n";
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
