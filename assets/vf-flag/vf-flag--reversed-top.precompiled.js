/**
 * Precompiled Nunjucks template: vf-flag--reversed-top.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["vf-flag--reversed-top"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
if(runtime.contextOrFrameLookup(context, frame, "context")) {
var t_1;
t_1 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"top");
frame.set("top", t_1, true);
if(frame.topLevel) {
context.setVariable("top", t_1);
}
if(frame.topLevel) {
context.addExport("top", t_1);
}
var t_2;
t_2 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"middle");
frame.set("middle", t_2, true);
if(frame.topLevel) {
context.setVariable("middle", t_2);
}
if(frame.topLevel) {
context.addExport("middle", t_2);
}
var t_3;
t_3 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"bottom");
frame.set("bottom", t_3, true);
if(frame.topLevel) {
context.setVariable("bottom", t_3);
}
if(frame.topLevel) {
context.addExport("bottom", t_3);
}
var t_4;
t_4 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"reversed");
frame.set("reversed", t_4, true);
if(frame.topLevel) {
context.setVariable("reversed", t_4);
}
if(frame.topLevel) {
context.addExport("reversed", t_4);
}
var t_5;
t_5 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"spacing");
frame.set("spacing", t_5, true);
if(frame.topLevel) {
context.setVariable("spacing", t_5);
}
if(frame.topLevel) {
context.addExport("spacing", t_5);
}
var t_6;
t_6 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"example");
frame.set("example", t_6, true);
if(frame.topLevel) {
context.setVariable("example", t_6);
}
if(frame.topLevel) {
context.addExport("example", t_6);
}
;
}
output += "\n\n\n<div class=\"vf-flag";
if(runtime.contextOrFrameLookup(context, frame, "top")) {
output += " vf-flag--top";
;
}
if(runtime.contextOrFrameLookup(context, frame, "middle")) {
output += " vf-flag--middle";
;
}
if(runtime.contextOrFrameLookup(context, frame, "bottom")) {
output += " vf-flag--bottom";
;
}
if(runtime.contextOrFrameLookup(context, frame, "reversed")) {
output += " vf-flag--reversed";
;
}
if(runtime.contextOrFrameLookup(context, frame, "spacing")) {
output += " vf-flag--";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "spacing"), env.opts.autoescape);
;
}
output += "\">\n\n  <div class=\"vf-flag__body\">\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("vf_flag__body"))(env, context, frame, runtime, function(t_8,t_7) {
if(t_8) { cb(t_8); return; }
output += t_7;
if(runtime.contextOrFrameLookup(context, frame, "example") == true) {
output += "      <!-- this HTML is for example use only -->\n      <p class=\"vf-u-type__text-body--2 vf-u-margin--0\">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus esse accusamus quos cupiditate, totam dolorem aspernatur quia repellendus, veniam error, aliquid ut. Odio tempora maiores suscipit libero ea dolore quidem!</p>\n";
;
}
output += "  </div>\n\n  <div class=\"vf-flag__media\">\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("vf_flag__media"))(env, context, frame, runtime, function(t_10,t_9) {
if(t_10) { cb(t_10); return; }
output += t_9;
if(runtime.contextOrFrameLookup(context, frame, "example") == true) {
output += "      <!-- this HTML is for example use only -->\n      <img src=\"https://acxngcvroo.cloudimg.io/v7/https://www.embl.org/files/wp-content/uploads/CABANA_group02438.jpg?&width=300\" alt=\"A couple sat on a sofa looking at a laptop\">\n\n";
;
}
output += "  </div>\n\n</div>\n\n";
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
function b_vf_flag__body(env, context, frame, runtime, cb) {
var lineno = 20;
var colno = 7;
var output = "";
try {
var frame = frame.push(true);
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_vf_flag__media(env, context, frame, runtime, cb) {
var lineno = 28;
var colno = 7;
var output = "";
try {
var frame = frame.push(true);
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_vf_flag__body: b_vf_flag__body,
b_vf_flag__media: b_vf_flag__media,
root: root
};

})();
})();
