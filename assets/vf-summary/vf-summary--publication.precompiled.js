/**
 * Precompiled Nunjucks template: vf-summary--publication.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["vf-summary--publication"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<article class=\"vf-summary vf-summary--publication\">\n  <h3 class=\"vf-summary__title\">\n    <a href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "summary__href"), env.opts.autoescape);
output += "\" class=\"vf-summary__link\">\n      Computer modeling in developmental biology: growing today, essential tomorrow.\n    </a>\n  </h3>\n  <p class=\"vf-summary__author\">\n    Jimenez RC, Albar JP, Bhak J, Blatter MC, Blicher T, Brazas MD, Brooksbank C, Budd A, De Las Rivas J, Dreyer J, van Driel MA, Dunn MJ, Fernandes PL, van Gelder CW, Hermjakob H, Ioannidis V, Judge DP, Kahlem P, Korpelainen E, Kraus HJ, Loveland J, Mayer C, McDowall J, Moran F, Mulder N, Nyronen T, Rother K, Salazar GA, Schneider R, Via A, Villaveces JM, Yu P, Schneider MV, Attwood TK, Corpas M.\n  </p>\n  <p class=\"vf-summary__source\">\n    The Journal of cell biology\n    <span class=\"vf-summary__date\">2019</span>\n  </p>\n\n  <p class=\"vf-summary__text\">\n    144(23):4214-4225. doi: 10.1242/dev.151274.\n    <a class=\"vf-link\" href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "summary__href"), env.opts.autoescape);
output += "\">Europe</a>\n    <a class=\"vf-link\" href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "summary__href"), env.opts.autoescape);
output += "\">PMC</a>\n  </p>\n</article>\n";
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
