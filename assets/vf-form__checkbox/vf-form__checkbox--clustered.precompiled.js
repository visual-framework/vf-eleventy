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
if(runtime.contextOrFrameLookup(context, frame, "context")) {
var t_1;
t_1 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"checkbox_label");
frame.set("checkbox_label", t_1, true);
if(frame.topLevel) {
context.setVariable("checkbox_label", t_1);
}
if(frame.topLevel) {
context.addExport("checkbox_label", t_1);
}
var t_2;
t_2 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"checkbox_group");
frame.set("checkbox_group", t_2, true);
if(frame.topLevel) {
context.setVariable("checkbox_group", t_2);
}
if(frame.topLevel) {
context.addExport("checkbox_group", t_2);
}
var t_3;
t_3 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"checkbox_value");
frame.set("checkbox_value", t_3, true);
if(frame.topLevel) {
context.setVariable("checkbox_value", t_3);
}
if(frame.topLevel) {
context.addExport("checkbox_value", t_3);
}
output += "\n";
var t_4;
t_4 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"disabled");
frame.set("disabled", t_4, true);
if(frame.topLevel) {
context.setVariable("disabled", t_4);
}
if(frame.topLevel) {
context.addExport("disabled", t_4);
}
var t_5;
t_5 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"invalid");
frame.set("invalid", t_5, true);
if(frame.topLevel) {
context.setVariable("invalid", t_5);
}
if(frame.topLevel) {
context.addExport("invalid", t_5);
}
;
}
output += "\n<fieldset class=\"vf-form__fieldset | vf-stack vf-stack--400\">";
env.getExtension("render")["run"](context,"@vf-form__legend",{"context": runtime.contextOrFrameLookup(context, frame, "checkbox_legend")}, function(t_7,t_6) {
if(t_7) { cb(t_7); return; }
output += runtime.suppressValue(t_6, true && env.opts.autoescape);
if(runtime.contextOrFrameLookup(context, frame, "inline")) {
output += "<div class=\"vf-cluster vf-cluster--400\">";
;
}
if(runtime.contextOrFrameLookup(context, frame, "inline")) {
output += "<div class=\"vf-cluster__inner\">";
;
}
var t_8;
t_8 = runtime.contextOrFrameLookup(context, frame, "item_01");
frame.set("context", t_8, true);
if(frame.topLevel) {
context.setVariable("context", t_8);
}
if(frame.topLevel) {
context.addExport("context", t_8);
}
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("@vf-form__checkbox", false, "vf-form__checkbox--clustered", false, function(t_10,t_9) {
if(t_10) { cb(t_10); return; }
callback(null,t_9);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_12,t_11) {
if(t_12) { cb(t_12); return; }
callback(null,t_11);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
var t_13;
t_13 = runtime.contextOrFrameLookup(context, frame, "item_02");
frame.set("context", t_13, true);
if(frame.topLevel) {
context.setVariable("context", t_13);
}
if(frame.topLevel) {
context.addExport("context", t_13);
}
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("@vf-form__checkbox", false, "vf-form__checkbox--clustered", false, function(t_15,t_14) {
if(t_15) { cb(t_15); return; }
callback(null,t_14);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_17,t_16) {
if(t_17) { cb(t_17); return; }
callback(null,t_16);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
var t_18;
t_18 = runtime.contextOrFrameLookup(context, frame, "item_03");
frame.set("context", t_18, true);
if(frame.topLevel) {
context.setVariable("context", t_18);
}
if(frame.topLevel) {
context.addExport("context", t_18);
}
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("@vf-form__checkbox", false, "vf-form__checkbox--clustered", false, function(t_20,t_19) {
if(t_20) { cb(t_20); return; }
callback(null,t_19);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_22,t_21) {
if(t_22) { cb(t_22); return; }
callback(null,t_21);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
var t_23;
t_23 = runtime.contextOrFrameLookup(context, frame, "item_04");
frame.set("context", t_23, true);
if(frame.topLevel) {
context.setVariable("context", t_23);
}
if(frame.topLevel) {
context.addExport("context", t_23);
}
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("@vf-form__checkbox", false, "vf-form__checkbox--clustered", false, function(t_25,t_24) {
if(t_25) { cb(t_25); return; }
callback(null,t_24);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_27,t_26) {
if(t_27) { cb(t_27); return; }
callback(null,t_26);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
var t_28;
t_28 = runtime.contextOrFrameLookup(context, frame, "item_05");
frame.set("context", t_28, true);
if(frame.topLevel) {
context.setVariable("context", t_28);
}
if(frame.topLevel) {
context.addExport("context", t_28);
}
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("@vf-form__checkbox", false, "vf-form__checkbox--clustered", false, function(t_30,t_29) {
if(t_30) { cb(t_30); return; }
callback(null,t_29);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_32,t_31) {
if(t_32) { cb(t_32); return; }
callback(null,t_31);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
var t_33;
t_33 = runtime.contextOrFrameLookup(context, frame, "item_06");
frame.set("context", t_33, true);
if(frame.topLevel) {
context.setVariable("context", t_33);
}
if(frame.topLevel) {
context.addExport("context", t_33);
}
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("@vf-form__checkbox", false, "vf-form__checkbox--clustered", false, function(t_35,t_34) {
if(t_35) { cb(t_35); return; }
callback(null,t_34);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_37,t_36) {
if(t_37) { cb(t_37); return; }
callback(null,t_36);});
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
})})})})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
