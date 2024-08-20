/**
 * Precompiled Nunjucks template: vf-navigation--on-this-page--example.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["vf-navigation--on-this-page--example"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getExtension("render")["run"](context,"@vf-navigation",{"classModifier": "on-this-page","heading": runtime.contextOrFrameLookup(context, frame, "heading"),"navigation": runtime.contextOrFrameLookup(context, frame, "navigation"),"activateJavascript": runtime.contextOrFrameLookup(context, frame, "activateJavascript")}, function(t_2,t_1) {
if(t_2) { cb(t_2); return; }
output += runtime.suppressValue(t_1, true && env.opts.autoescape);
output += "\n<section class=\"embl-grid embl-grid--has-sidebar\" id=\"container-1\">\n";
env.getExtension("render")["run"](context,"@vf-section-header",{"section_title": "Home","href": "container-1"}, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
output += runtime.suppressValue(t_3, true && env.opts.autoescape);
output += "  <div>\n    <p>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget massa dolor. Morbi suscipit lorem in volutpat\n      sollicitudin. Pellentesque cursus consequat mi, sed lobortis enim aliquet ac. Morbi eu tincidunt lorem. Cras eget\n      leo rhoncus, ultrices erat quis, commodo lorem. Fusce placerat urna vitae eleifend tincidunt. Integer lobortis\n      erat in ante mollis, in tincidunt erat varius. Cras quis erat ac lorem mollis vulputate. Fusce pulvinar\n      condimentum cursus.\n    </p>\n    <p>\n      Vivamus gravida scelerisque nibh eu blandit. Vivamus et varius mi. Vivamus ut dictum leo, vitae commodo leo.\n      Curabitur sed diam tristique velit laoreet cursus. Pellentesque ultricies ullamcorper neque malesuada scelerisque.\n      Proin varius sodales ante, sed accumsan risus dapibus sed. Nam eget dignissim tortor, sed pulvinar sapien. In\n      congue, augue in lacinia congue, nunc lacus sagittis lacus, et gravida tortor nisl vitae turpis. Donec id libero\n      tempor orci bibendum interdum. Sed nisl purus, tempor quis enim quis, laoreet fermentum lacus.\n    </p>\n\n  </div>\n</section>\n\n<section class=\"embl-grid embl-grid--has-sidebar\" id=\"container-2\">\n";
env.getExtension("render")["run"](context,"@vf-section-header",{"section_title": "Downloads","href": "JavaScript:Void(0);"}, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
output += runtime.suppressValue(t_5, true && env.opts.autoescape);
output += "  <div>\n    <p>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget massa dolor. Morbi suscipit lorem in volutpat\n      sollicitudin. Pellentesque cursus consequat mi, sed lobortis enim aliquet ac. Morbi eu tincidunt lorem. Cras eget\n      leo rhoncus, ultrices erat quis, commodo lorem. Fusce placerat urna vitae eleifend tincidunt. Integer lobortis\n      erat in ante mollis, in tincidunt erat varius. Cras quis erat ac lorem mollis vulputate. Fusce pulvinar\n      condimentum cursus. Proin quis ligula lacinia, elementum eros dignissim, pretium libero. Vivamus dignissim nisi\n      urna, sed elementum nisi egestas sed. Nulla at sagittis leo. Sed ut odio a libero pretium tempus at in odio.\n      Praesent suscipit tellus urna, non eleifend enim fringilla in. Ut interdum, arcu a suscipit accumsan, metus felis\n      aliquet tellus, quis maximus est massa nec eros. Duis egestas, elit ut tempor lobortis, dolor ligula iaculis\n      nulla, at hendrerit enim diam eu sapien.\n    </p>\n    <p>\n      Cras ultrices cursus odio, vel cursus justo ultrices ut. Vestibulum non eros eu nunc tristique bibendum. Integer\n      leo neque, varius et varius molestie, mattis eu orci. Suspendisse ullamcorper augue ut ex eleifend iaculis. Donec\n      lacus dolor, sodales id urna ut, placerat eleifend nisi. Aliquam sollicitudin nibh sodales ex sagittis aliquet.\n      Etiam nec tempor metus. Nam quis tincidunt massa, fringilla fringilla metus. Orci varius natoque penatibus et\n      magnis dis parturient montes, nascetur ridiculus mus.\n    </p>\n  </div>\n</section>\n\n<section class=\"embl-grid embl-grid--has-sidebar\" id=\"container-3\">\n";
env.getExtension("render")["run"](context,"@vf-section-header",{"section_title": "Release notes","href": "JavaScript:Void(0);"}, function(t_8,t_7) {
if(t_8) { cb(t_8); return; }
output += runtime.suppressValue(t_7, true && env.opts.autoescape);
output += "  <div>\n    <p>\n      Sed fringilla pretium quam vehicula viverra. Etiam sed augue vitae ante consectetur auctor id eget urna.\n      Vestibulum bibendum vulputate ultrices. Proin euismod est felis, eu egestas ligula laoreet eu. Sed eget tincidunt\n      libero, in posuere mauris. Phasellus vel urna faucibus nunc congue pulvinar. Aliquam massa ipsum, euismod semper\n      arcu nec, luctus hendrerit nisl. Vivamus ultrices mattis dui at sagittis. Phasellus ac erat dui. Aliquam erat\n      volutpat. Cras ac elit non quam maximus congue. Sed mi justo, bibendum eu lacinia nec, lobortis ac purus. Duis\n      elementum orci sit amet pulvinar malesuada. Mauris luctus risus et ipsum eleifend pharetra.\n    </p>\n    <p>\n      Cras ultrices cursus odio, vel cursus justo ultrices ut. Vestibulum non eros eu nunc tristique bibendum. Integer\n      leo neque, varius et varius molestie, mattis eu orci. Suspendisse ullamcorper augue ut ex eleifend iaculis. Donec\n      lacus dolor, sodales id urna ut, placerat eleifend nisi. Aliquam sollicitudin nibh sodales ex sagittis aliquet.\n      Etiam nec tempor metus. Nam quis tincidunt massa, fringilla fringilla metus. Orci varius natoque penatibus et\n      magnis dis parturient montes, nascetur ridiculus mus.\n    </p>\n  </div>\n</section>\n\n<section class=\"embl-grid embl-grid--has-sidebar\" id=\"container-4\">\n";
env.getExtension("render")["run"](context,"@vf-section-header",{"section_title": "Another item","href": "JavaScript:Void(0);"}, function(t_10,t_9) {
if(t_10) { cb(t_10); return; }
output += runtime.suppressValue(t_9, true && env.opts.autoescape);
output += "  <div>\n    <p>\n      Cras ultrices cursus odio, vel cursus justo ultrices ut. Vestibulum non eros eu nunc tristique bibendum. Integer\n      leo neque, varius et varius molestie, mattis eu orci. Suspendisse ullamcorper augue ut ex eleifend iaculis. Donec\n      lacus dolor, sodales id urna ut, placerat eleifend nisi. Aliquam sollicitudin nibh sodales ex sagittis aliquet.\n      Etiam nec tempor metus. Nam quis tincidunt massa, fringilla fringilla metus. Orci varius natoque penatibus et\n      magnis dis parturient montes, nascetur ridiculus mus.\n    </p>\n  </div>\n</section>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
