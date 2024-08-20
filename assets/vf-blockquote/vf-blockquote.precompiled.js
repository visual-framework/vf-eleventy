/**
 * Precompiled Nunjucks template: vf-blockquote.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["vf-blockquote"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
if(runtime.contextOrFrameLookup(context, frame, "context")) {
var t_1;
t_1 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"id");
frame.set("id", t_1, true);
if(frame.topLevel) {
context.setVariable("id", t_1);
}
if(frame.topLevel) {
context.addExport("id", t_1);
}
var t_2;
t_2 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"override_class");
frame.set("override_class", t_2, true);
if(frame.topLevel) {
context.setVariable("override_class", t_2);
}
if(frame.topLevel) {
context.addExport("override_class", t_2);
}
var t_3;
t_3 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"blockquote_text");
frame.set("blockquote_text", t_3, true);
if(frame.topLevel) {
context.setVariable("blockquote_text", t_3);
}
if(frame.topLevel) {
context.addExport("blockquote_text", t_3);
}
var t_4;
t_4 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"blockquote_author");
frame.set("blockquote_author", t_4, true);
if(frame.topLevel) {
context.setVariable("blockquote_author", t_4);
}
if(frame.topLevel) {
context.addExport("blockquote_author", t_4);
}
var t_5;
t_5 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"blockquote_author_href");
frame.set("blockquote_author_href", t_5, true);
if(frame.topLevel) {
context.setVariable("blockquote_author_href", t_5);
}
if(frame.topLevel) {
context.addExport("blockquote_author_href", t_5);
}
var t_6;
t_6 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"blockquote_author_details");
frame.set("blockquote_author_details", t_6, true);
if(frame.topLevel) {
context.setVariable("blockquote_author_details", t_6);
}
if(frame.topLevel) {
context.addExport("blockquote_author_details", t_6);
}
var t_7;
t_7 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"blockquote_author_imageurl");
frame.set("blockquote_author_imageurl", t_7, true);
if(frame.topLevel) {
context.setVariable("blockquote_author_imageurl", t_7);
}
if(frame.topLevel) {
context.addExport("blockquote_author_imageurl", t_7);
}
;
}
output += "\n<blockquote";
if(runtime.contextOrFrameLookup(context, frame, "id")) {
output += " id=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id"), env.opts.autoescape);
output += "\"";
;
}
output += " class=\"vf-blockquote vf-u-margin__left--800";
if(runtime.contextOrFrameLookup(context, frame, "override_class")) {
output += " | ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "override_class"), env.opts.autoescape);
;
}
output += "\">\n\n";
if((runtime.contextOrFrameLookup(context, frame, "blockquote_author_imageurl"))) {
output += "      <img class=\"vf-profile__image vf-u-margin__right--600\" src=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "blockquote_author_imageurl"), env.opts.autoescape);
output += "\" alt=\"\" loading=\"lazy\"/>\n";
;
}
output += "    <div>\n";
if((runtime.contextOrFrameLookup(context, frame, "blockquote_text")) || (runtime.contextOrFrameLookup(context, frame, "html")) || (runtime.contextOrFrameLookup(context, frame, "text"))) {
output += "        <div>";
output += runtime.suppressValue(((runtime.contextOrFrameLookup(context, frame, "html")) || (runtime.contextOrFrameLookup(context, frame, "blockquote_text"))?(runtime.contextOrFrameLookup(context, frame, "html")) || env.getFilter("safe").call(context, (runtime.contextOrFrameLookup(context, frame, "blockquote_text"))):runtime.contextOrFrameLookup(context, frame, "text")), env.opts.autoescape);
output += "</div>\n";
;
}
output += "\n      <footer class=\"vf-u-margin__top--600\">\n";
if(runtime.contextOrFrameLookup(context, frame, "blockquote_author_href")) {
output += "        <a href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "blockquote_author_href"), env.opts.autoescape);
output += "\" class=\"vf-blockquote_author__link\">\n          <div>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "blockquote_author"), env.opts.autoescape);
output += "</div>\n        </a>\n";
;
}
else {
output += "          <div>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "blockquote_author"), env.opts.autoescape);
output += "</div>\n";
;
}
if(runtime.contextOrFrameLookup(context, frame, "blockquote_author_details")) {
output += "        <div class=\"vf-text-body--2\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "blockquote_author_details"), env.opts.autoescape);
output += "</div>\n";
;
}
output += "      </footer>\n    </div>\n</blockquote>\n";
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
