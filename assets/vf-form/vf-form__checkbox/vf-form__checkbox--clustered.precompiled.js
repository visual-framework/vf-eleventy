/**
 * Precompiled Nunjucks template: vf-form__checkbox--clustered.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["vf-form__checkbox--clustered"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<fieldset class=\"vf-form__fieldset";
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
var t_1;
t_1 = runtime.contextOrFrameLookup(context, frame, "item_01");
frame.set("context", t_1, true);
if(frame.topLevel) {
context.setVariable("context", t_1);
}
if(frame.topLevel) {
context.addExport("context", t_1);
}
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("@vf-form__checkbox", false, "vf-form__checkbox--clustered", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
callback(null,t_2);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
callback(null,t_4);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
var t_6;
t_6 = runtime.contextOrFrameLookup(context, frame, "item_02");
frame.set("context", t_6, true);
if(frame.topLevel) {
context.setVariable("context", t_6);
}
if(frame.topLevel) {
context.addExport("context", t_6);
}
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("@vf-form__checkbox", false, "vf-form__checkbox--clustered", false, function(t_8,t_7) {
if(t_8) { cb(t_8); return; }
callback(null,t_7);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_10,t_9) {
if(t_10) { cb(t_10); return; }
callback(null,t_9);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
var t_11;
t_11 = runtime.contextOrFrameLookup(context, frame, "item_03");
frame.set("context", t_11, true);
if(frame.topLevel) {
context.setVariable("context", t_11);
}
if(frame.topLevel) {
context.addExport("context", t_11);
}
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("@vf-form__checkbox", false, "vf-form__checkbox--clustered", false, function(t_13,t_12) {
if(t_13) { cb(t_13); return; }
callback(null,t_12);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_15,t_14) {
if(t_15) { cb(t_15); return; }
callback(null,t_14);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
var t_16;
t_16 = runtime.contextOrFrameLookup(context, frame, "item_04");
frame.set("context", t_16, true);
if(frame.topLevel) {
context.setVariable("context", t_16);
}
if(frame.topLevel) {
context.addExport("context", t_16);
}
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("@vf-form__checkbox", false, "vf-form__checkbox--clustered", false, function(t_18,t_17) {
if(t_18) { cb(t_18); return; }
callback(null,t_17);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_20,t_19) {
if(t_20) { cb(t_20); return; }
callback(null,t_19);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
var t_21;
t_21 = runtime.contextOrFrameLookup(context, frame, "item_05");
frame.set("context", t_21, true);
if(frame.topLevel) {
context.setVariable("context", t_21);
}
if(frame.topLevel) {
context.addExport("context", t_21);
}
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("@vf-form__checkbox", false, "vf-form__checkbox--clustered", false, function(t_23,t_22) {
if(t_23) { cb(t_23); return; }
callback(null,t_22);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_25,t_24) {
if(t_25) { cb(t_25); return; }
callback(null,t_24);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
var t_26;
t_26 = runtime.contextOrFrameLookup(context, frame, "item_06");
frame.set("context", t_26, true);
if(frame.topLevel) {
context.setVariable("context", t_26);
}
if(frame.topLevel) {
context.addExport("context", t_26);
}
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("@vf-form__checkbox", false, "vf-form__checkbox--clustered", false, function(t_28,t_27) {
if(t_28) { cb(t_28); return; }
callback(null,t_27);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_30,t_29) {
if(t_30) { cb(t_30); return; }
callback(null,t_29);});
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
output += "</fieldset>\n\n\n";
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
