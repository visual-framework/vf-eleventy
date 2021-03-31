/**
 * Precompiled Nunjucks template: vf-form__checkbox--stacked.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["vf-form__checkbox--stacked"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
if(runtime.contextOrFrameLookup(context, frame, "context")) {
var t_1;
t_1 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"dave");
frame.set("dave", t_1, true);
if(frame.topLevel) {
context.setVariable("dave", t_1);
}
if(frame.topLevel) {
context.addExport("dave", t_1);
}
;
}
output += "\n<fieldset class=\"vf-form__fieldset";
if(runtime.contextOrFrameLookup(context, frame, "inline")) {
output += " | vf-cluster vf-cluster--400";
;
}
else {
output += " | vf-stack vf-stack--400";
;
}
output += "\">\n\n";
if(runtime.contextOrFrameLookup(context, frame, "inline")) {
output += "<div class=\"vf-cluster__inner\">";
;
}
output += "\n";
var t_2;
t_2 = runtime.contextOrFrameLookup(context, frame, "item_01");
frame.set("context", t_2, true);
if(frame.topLevel) {
context.setVariable("context", t_2);
}
if(frame.topLevel) {
context.addExport("context", t_2);
}
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("@vf-form__checkbox", false, "vf-form__checkbox--stacked", false, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
callback(null,t_3);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
callback(null,t_5);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
var t_7;
t_7 = runtime.contextOrFrameLookup(context, frame, "item_02");
frame.set("context", t_7, true);
if(frame.topLevel) {
context.setVariable("context", t_7);
}
if(frame.topLevel) {
context.addExport("context", t_7);
}
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("@vf-form__checkbox", false, "vf-form__checkbox--stacked", false, function(t_9,t_8) {
if(t_9) { cb(t_9); return; }
callback(null,t_8);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_11,t_10) {
if(t_11) { cb(t_11); return; }
callback(null,t_10);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
var t_12;
t_12 = runtime.contextOrFrameLookup(context, frame, "item_03");
frame.set("context", t_12, true);
if(frame.topLevel) {
context.setVariable("context", t_12);
}
if(frame.topLevel) {
context.addExport("context", t_12);
}
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("@vf-form__checkbox", false, "vf-form__checkbox--stacked", false, function(t_14,t_13) {
if(t_14) { cb(t_14); return; }
callback(null,t_13);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_16,t_15) {
if(t_16) { cb(t_16); return; }
callback(null,t_15);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
var t_17;
t_17 = runtime.contextOrFrameLookup(context, frame, "item_04");
frame.set("context", t_17, true);
if(frame.topLevel) {
context.setVariable("context", t_17);
}
if(frame.topLevel) {
context.addExport("context", t_17);
}
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("@vf-form__checkbox", false, "vf-form__checkbox--stacked", false, function(t_19,t_18) {
if(t_19) { cb(t_19); return; }
callback(null,t_18);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_21,t_20) {
if(t_21) { cb(t_21); return; }
callback(null,t_20);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
var t_22;
t_22 = runtime.contextOrFrameLookup(context, frame, "item_05");
frame.set("context", t_22, true);
if(frame.topLevel) {
context.setVariable("context", t_22);
}
if(frame.topLevel) {
context.addExport("context", t_22);
}
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("@vf-form__checkbox", false, "vf-form__checkbox--stacked", false, function(t_24,t_23) {
if(t_24) { cb(t_24); return; }
callback(null,t_23);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_26,t_25) {
if(t_26) { cb(t_26); return; }
callback(null,t_25);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
var t_27;
t_27 = runtime.contextOrFrameLookup(context, frame, "item_06");
frame.set("context", t_27, true);
if(frame.topLevel) {
context.setVariable("context", t_27);
}
if(frame.topLevel) {
context.addExport("context", t_27);
}
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("@vf-form__checkbox", false, "vf-form__checkbox--stacked", false, function(t_29,t_28) {
if(t_29) { cb(t_29); return; }
callback(null,t_28);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_31,t_30) {
if(t_31) { cb(t_31); return; }
callback(null,t_30);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
if(runtime.contextOrFrameLookup(context, frame, "inline")) {
output += "</div>";
;
}
output += "</fieldset>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
