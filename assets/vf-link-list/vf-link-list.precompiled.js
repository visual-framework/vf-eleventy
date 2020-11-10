/**
 * Precompiled Nunjucks template: vf-link-list.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["vf-link-list"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
if(runtime.contextOrFrameLookup(context, frame, "context")) {
output += "\n";
var t_1;
t_1 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"title");
frame.set("title", t_1, true);
if(frame.topLevel) {
context.setVariable("title", t_1);
}
if(frame.topLevel) {
context.addExport("title", t_1);
}
var t_2;
t_2 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"list");
frame.set("list", t_2, true);
if(frame.topLevel) {
context.setVariable("list", t_2);
}
if(frame.topLevel) {
context.addExport("list", t_2);
}
var t_3;
t_3 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"title");
frame.set("title", t_3, true);
if(frame.topLevel) {
context.setVariable("title", t_3);
}
if(frame.topLevel) {
context.addExport("title", t_3);
}
var t_4;
t_4 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"svg");
frame.set("svg", t_4, true);
if(frame.topLevel) {
context.setVariable("svg", t_4);
}
if(frame.topLevel) {
context.addExport("svg", t_4);
}
var t_5;
t_5 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"component_modifier");
frame.set("component_modifier", t_5, true);
if(frame.topLevel) {
context.setVariable("component_modifier", t_5);
}
if(frame.topLevel) {
context.addExport("component_modifier", t_5);
}
var t_6;
t_6 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"list_modifier");
frame.set("list_modifier", t_6, true);
if(frame.topLevel) {
context.setVariable("list_modifier", t_6);
}
if(frame.topLevel) {
context.addExport("list_modifier", t_6);
}
output += "\n";
;
}
output += "\n\n<div class=\"vf-links";
if(runtime.contextOrFrameLookup(context, frame, "component_modifier")) {
output += " ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "component_modifier"), env.opts.autoescape);
;
}
output += "\">\n";
if(runtime.contextOrFrameLookup(context, frame, "title")) {
output += "  <h3 class=\"vf-links__heading\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "title"), env.opts.autoescape);
output += "</h3>\n";
;
}
output += "  <ul class=\"vf-links__list";
if(runtime.contextOrFrameLookup(context, frame, "list_modifier")) {
output += " vf-links__list--";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "list_modifier"), env.opts.autoescape);
;
}
output += " | vf-list\">\n";
frame = frame.push();
var t_9 = runtime.fromIterator(runtime.contextOrFrameLookup(context, frame, "list"));
runtime.asyncEach(t_9, 1, function(item, t_7, t_8,next) {
frame.set("item", item);
frame.set("loop.index", t_7 + 1);
frame.set("loop.index0", t_7);
frame.set("loop.revindex", t_8 - t_7);
frame.set("loop.revindex0", t_8 - t_7 - 1);
frame.set("loop.first", t_7 === 0);
frame.set("loop.last", t_7 === t_8 - 1);
frame.set("loop.length", t_8);
output += "    <li class=\"vf-list__item\">\n      <a class=\"vf-list__link\" href=\"";
output += runtime.suppressValue(runtime.memberLookup((item),"link_list_href"), env.opts.autoescape);
output += "\">\n";
if(runtime.memberLookup((item),"image")) {
if(runtime.memberLookup((item),"image") == "blank") {
output += "            <span><!-- no image --></span>\n";
;
}
else {
output += "            ";
output += runtime.suppressValue(runtime.memberLookup((item),"image"), env.opts.autoescape);
output += "\n";
;
}
;
}
output += "        ";
output += runtime.suppressValue(runtime.memberLookup((item),"text"), env.opts.autoescape);
output += "\n";
if(runtime.contextOrFrameLookup(context, frame, "svg")) {
output += "        <svg class=\"vf-icon vf-icon__arrow--down | vf-list__icon\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><title>arrow-button-down</title><path d=\"M.249,7.207,11.233,19.678h0a1.066,1.066,0,0,0,1.539,0L23.751,7.207a.987.987,0,0,0-.107-1.414l-1.85-1.557a1.028,1.028,0,0,0-1.438.111L12.191,13.8a.25.25,0,0,1-.379,0L3.644,4.346A1.021,1.021,0,0,0,2.948,4a1,1,0,0,0-.741.238L.356,5.793A.988.988,0,0,0,0,6.478.978.978,0,0,0,.249,7.207Z\"/></svg>\n";
;
}
output += "      </a>\n";
(function(cb) {if(runtime.memberLookup((item),"badge")) {
var t_10;
t_10 = "@vf-badge";
frame.set("badge", t_10, true);
if(frame.topLevel) {
context.setVariable("badge", t_10);
}
if(frame.topLevel) {
context.addExport("badge", t_10);
}
env.getExtension("render")["run"](context,runtime.contextOrFrameLookup(context, frame, "badge"),{"context": runtime.memberLookup((item),"badge")}, function(t_12,t_11) {
if(t_12) { cb(t_12); return; }
output += runtime.suppressValue(t_11, true && env.opts.autoescape);
cb()});
}
else {
cb()}
})(function(t_13) {
if(t_13) { cb(t_13); return; }if(runtime.memberLookup((item),"meta")) {
output += "        <p class=\"vf-links__meta\">";
output += runtime.suppressValue(runtime.memberLookup((item),"meta"), env.opts.autoescape);
output += "</p>\n";
;
}
output += "\n    </li>\n";
next(t_7);
});
}, function(t_15,t_14) {
if(t_15) { cb(t_15); return; }
frame = frame.pop();
output += "  </ul>\n</div>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
