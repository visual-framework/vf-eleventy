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
output += "<section class=\"vf-card-container";
if(runtime.contextOrFrameLookup(context, frame, "modifier")) {
output += " | ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "modifier"), env.opts.autoescape);
;
}
output += "\">\n  <div class=\"vf-card-container__inner\">\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("@vf-section-header", false, "vf-card-container", false, function(t_2,t_1) {
if(t_2) { cb(t_2); return; }
callback(null,t_1);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
callback(null,t_3);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
frame = frame.push();
var t_7 = runtime.fromIterator(runtime.contextOrFrameLookup(context, frame, "vf_cards"));
runtime.asyncEach(t_7, 1, function(card, t_5, t_6,next) {
frame.set("card", card);
frame.set("loop.index", t_5 + 1);
frame.set("loop.index0", t_5);
frame.set("loop.revindex", t_6 - t_5);
frame.set("loop.revindex0", t_6 - t_5 - 1);
frame.set("loop.first", t_5 === 0);
frame.set("loop.last", t_5 === t_6 - 1);
frame.set("loop.length", t_6);
output += "       ";
output += "\n";
var t_8;
t_8 = "@vf-card--" + runtime.memberLookup((card),"card_type");
frame.set("card_type", t_8, true);
if(frame.topLevel) {
context.setVariable("card_type", t_8);
}
if(frame.topLevel) {
context.addExport("card_type", t_8);
}
env.getExtension("render")["run"](context,runtime.contextOrFrameLookup(context, frame, "card_type"),{"context": card}, function(t_10,t_9) {
if(t_10) { cb(t_10); return; }
output += runtime.suppressValue(t_9, true && env.opts.autoescape);
next(t_5);
});
}, function(t_12,t_11) {
if(t_12) { cb(t_12); return; }
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
