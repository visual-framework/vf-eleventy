/**
 * Precompiled Nunjucks template: vf-card-container.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["vf-card-container"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
if(runtime.contextOrFrameLookup(context, frame, "context")) {
var t_1;
t_1 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"modifier");
frame.set("modifier", t_1, true);
if(frame.topLevel) {
context.setVariable("modifier", t_1);
}
if(frame.topLevel) {
context.addExport("modifier", t_1);
}
var t_2;
t_2 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"vf_cards");
frame.set("vf_cards", t_2, true);
if(frame.topLevel) {
context.setVariable("vf_cards", t_2);
}
if(frame.topLevel) {
context.addExport("vf_cards", t_2);
}
var t_3;
t_3 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"container_section__header");
frame.set("container_section__header", t_3, true);
if(frame.topLevel) {
context.setVariable("container_section__header", t_3);
}
if(frame.topLevel) {
context.addExport("container_section__header", t_3);
}
var t_4;
t_4 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"variant");
frame.set("cardtype", t_4, true);
if(frame.topLevel) {
context.setVariable("cardtype", t_4);
}
if(frame.topLevel) {
context.addExport("cardtype", t_4);
}
var t_5;
t_5 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"cards_aspect_ratio");
frame.set("cards_aspect_ratio", t_5, true);
if(frame.topLevel) {
context.setVariable("cards_aspect_ratio", t_5);
}
if(frame.topLevel) {
context.addExport("cards_aspect_ratio", t_5);
}
var t_6;
t_6 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"cards_per_row");
frame.set("cards_per_row", t_6, true);
if(frame.topLevel) {
context.setVariable("cards_per_row", t_6);
}
if(frame.topLevel) {
context.addExport("cards_per_row", t_6);
}
;
}
output += "\n<section\n  class=\"vf-card-container";
if(runtime.contextOrFrameLookup(context, frame, "cards_per_row")) {
output += " vf-card-container__col-";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "cards_per_row"), env.opts.autoescape);
;
}
if(runtime.contextOrFrameLookup(context, frame, "modifier")) {
output += " | ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "modifier"), env.opts.autoescape);
;
}
output += "\"\n  style=\"--vf-card__image--aspect-ratio: ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "cards_aspect_ratio"), env.opts.autoescape);
output += ";\"\n>\n  <div class=\"vf-card-container__inner\">\n";
env.getExtension("render")["run"](context,"@vf-section-header",{"context": runtime.contextOrFrameLookup(context, frame, "container_section__header")}, function(t_8,t_7) {
if(t_8) { cb(t_8); return; }
output += runtime.suppressValue(t_7, true && env.opts.autoescape);
frame = frame.push();
var t_11 = runtime.fromIterator(runtime.contextOrFrameLookup(context, frame, "vf_cards"));
runtime.asyncEach(t_11, 1, function(card, t_9, t_10,next) {
frame.set("card", card);
frame.set("loop.index", t_9 + 1);
frame.set("loop.index0", t_9);
frame.set("loop.revindex", t_10 - t_9);
frame.set("loop.revindex0", t_10 - t_9 - 1);
frame.set("loop.first", t_9 === 0);
frame.set("loop.last", t_9 === t_10 - 1);
frame.set("loop.length", t_10);
env.getExtension("render")["run"](context,"@vf-card",{"context": card}, function(t_13,t_12) {
if(t_13) { cb(t_13); return; }
output += runtime.suppressValue(t_12, true && env.opts.autoescape);
next(t_9);
});
}, function(t_15,t_14) {
if(t_15) { cb(t_15); return; }
frame = frame.pop();
output += "  </div>\n</section>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
