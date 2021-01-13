/**
 * Precompiled Nunjucks template: vf-u-fullbleed.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["vf-u-fullbleed"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<div class=\"vf-content | embl-grid embl-grid--has-centered-content | vf-u-fullbleed vf-u-background-color--blue\">\n  <h1>Hellow World</h1>\n  <div>\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto earum vero laudantium quia officiis cum nemo autem reprehenderit, praesentium rerum vel! Ducimus, ullam impedit tempore vel, ipsam magnam quos voluptatum!</p>\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed alias, minima omnis possimus aut aliquam commodi, molestias repellat tempore nobis deserunt quis quod maiores inventore debitis in vitae aspernatur dolores.</p>\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas nostrum iste, aut dolor sapiente quos at neque, non! Voluptas eveniet quia laboriosam eligendi architecto qui minima corrupti velit consectetur. Temporibus?</p>\n  </div>\n</div>\n";
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
