/**
 * Precompiled Nunjucks template: vf-list.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["vf-list"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += runtime.suppressValue(env.getExtension("spaceless")["run"](context,function(cb) {
if(!cb) { cb = function(err) { if(err) { throw err; }}}
var t_1 = "";if(runtime.contextOrFrameLookup(context, frame, "context")) {
var t_2;
t_2 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"id");
frame.set("id", t_2, true);
if(frame.topLevel) {
context.setVariable("id", t_2);
}
if(frame.topLevel) {
context.addExport("id", t_2);
}
var t_3;
t_3 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"list_type");
frame.set("list_type", t_3, true);
if(frame.topLevel) {
context.setVariable("list_type", t_3);
}
if(frame.topLevel) {
context.addExport("list_type", t_3);
}
var t_4;
t_4 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"list");
frame.set("list", t_4, true);
if(frame.topLevel) {
context.setVariable("list", t_4);
}
if(frame.topLevel) {
context.addExport("list", t_4);
}
var t_5;
t_5 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"definitions");
frame.set("definitions", t_5, true);
if(frame.topLevel) {
context.setVariable("definitions", t_5);
}
if(frame.topLevel) {
context.addExport("definitions", t_5);
}
var t_6;
t_6 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"override_class");
frame.set("override_class", t_6, true);
if(frame.topLevel) {
context.setVariable("override_class", t_6);
}
if(frame.topLevel) {
context.addExport("override_class", t_6);
}
;
}
if(runtime.contextOrFrameLookup(context, frame, "list_type") == "definition") {
var t_7;
t_7 = "dl";
frame.set("parent_tag", t_7, true);
if(frame.topLevel) {
context.setVariable("parent_tag", t_7);
}
if(frame.topLevel) {
context.addExport("parent_tag", t_7);
}
var t_8;
t_8 = "dt";
frame.set("child_tag", t_8, true);
if(frame.topLevel) {
context.setVariable("child_tag", t_8);
}
if(frame.topLevel) {
context.addExport("child_tag", t_8);
}
;
}
else {
if(runtime.contextOrFrameLookup(context, frame, "list_type") == "ordered") {
var t_9;
t_9 = "ol";
frame.set("parent_tag", t_9, true);
if(frame.topLevel) {
context.setVariable("parent_tag", t_9);
}
if(frame.topLevel) {
context.addExport("parent_tag", t_9);
}
var t_10;
t_10 = "li";
frame.set("child_tag", t_10, true);
if(frame.topLevel) {
context.setVariable("child_tag", t_10);
}
if(frame.topLevel) {
context.addExport("child_tag", t_10);
}
;
}
else {
var t_11;
t_11 = "ul";
frame.set("parent_tag", t_11, true);
if(frame.topLevel) {
context.setVariable("parent_tag", t_11);
}
if(frame.topLevel) {
context.addExport("parent_tag", t_11);
}
var t_12;
t_12 = "li";
frame.set("child_tag", t_12, true);
if(frame.topLevel) {
context.setVariable("child_tag", t_12);
}
if(frame.topLevel) {
context.addExport("child_tag", t_12);
}
;
}
;
}
t_1 += "\n<";
t_1 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "parent_tag"), env.opts.autoescape);
t_1 += "\n";
if(runtime.contextOrFrameLookup(context, frame, "id")) {
t_1 += " id=\"";
t_1 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id"), env.opts.autoescape);
t_1 += "\"";
;
}
t_1 += "\nclass=\"vf-list";
if(runtime.contextOrFrameLookup(context, frame, "list_type")) {
t_1 += " vf-list--";
t_1 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "list_type"), env.opts.autoescape);
;
}
if(runtime.contextOrFrameLookup(context, frame, "override_class")) {
t_1 += " | ";
t_1 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "override_class"), env.opts.autoescape);
;
}
t_1 += "\">\n";
frame = frame.push();
var t_15 = runtime.contextOrFrameLookup(context, frame, "list");
if(t_15) {t_15 = runtime.fromIterator(t_15);
var t_14 = t_15.length;
for(var t_13=0; t_13 < t_15.length; t_13++) {
var t_16 = t_15[t_13];
frame.set("item", t_16);
frame.set("loop.index", t_13 + 1);
frame.set("loop.index0", t_13);
frame.set("loop.revindex", t_14 - t_13);
frame.set("loop.revindex0", t_14 - t_13 - 1);
frame.set("loop.first", t_13 === 0);
frame.set("loop.last", t_13 === t_14 - 1);
frame.set("loop.length", t_14);
if(runtime.memberLookup((t_16),"term")) {
t_1 += "    <";
t_1 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "child_tag"), env.opts.autoescape);
t_1 += " class=\"vf-list__item vf-list--definition__term\">\n    ";
t_1 += runtime.suppressValue(runtime.memberLookup((t_16),"term"), env.opts.autoescape);
t_1 += "\n    </";
t_1 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "child_tag"), env.opts.autoescape);
t_1 += ">\n    <dd class=\"vf-list__item vf-list--definition__details\">\n    ";
t_1 += runtime.suppressValue(runtime.memberLookup((t_16),"definition"), env.opts.autoescape);
t_1 += "\n    </dd>\n";
;
}
else {
t_1 += "    <";
t_1 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "child_tag"), env.opts.autoescape);
t_1 += " class=\"vf-list__item ";
t_1 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "child_tag_class"), env.opts.autoescape);
t_1 += "\">\n      ";
t_1 += runtime.suppressValue(t_16, env.opts.autoescape);
t_1 += "\n    </";
t_1 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "child_tag"), env.opts.autoescape);
t_1 += ">\n";
;
}
t_1 += "\n";
;
}
}
frame = frame.pop();
t_1 += "</";
t_1 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "parent_tag"), env.opts.autoescape);
t_1 += ">\n";
cb(null, t_1);
;
return t_1;
}
,null), true && env.opts.autoescape);
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
