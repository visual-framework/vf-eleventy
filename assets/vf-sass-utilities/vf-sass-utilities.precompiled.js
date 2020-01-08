/**
 * Precompiled Nunjucks template: vf-sass-utilities.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["vf-sass-utilities"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<div class=\"vf-content\">\n\n";
output += runtime.suppressValue(env.getExtension("markdown")["run"](context,function(cb) {
if(!cb) { cb = function(err) { if(err) { throw err; }}}
var t_1 = "";t_1 += "### Available Sass utilities\n\n### Et al.\n\n- `.vf-et-al` for use in publications lists and similar\n\n<span class=\"vf-et-al\">Jon Smith, Jane Johnson, </span>\n\n### Screenreader text\n\n- `.vf-sr-only` some things should only be shown to screen readers\n\n<span class=\"vf-sr-only\">Like this text</span>\n\n### No-wrap.\n\n- `.vf-no-wrap` keep text together, as much as possible\n\nI'm some words that can break awkwardly but keep the <span class=\"vf-no-wrap\">Company Name</span> together.\n";
cb(null, t_1);
;
return t_1;
}
,function(cb) {
if(!cb) { cb = function(err) { if(err) { throw err; }}}
var t_2 = "";t_2 += 2;
cb(null, t_2);
;
return t_2;
}
), true && env.opts.autoescape);
output += "\n</div>\n";
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
