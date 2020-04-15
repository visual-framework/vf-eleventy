/**
 * Precompiled Nunjucks template: vf-table.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["vf-table"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<table class=\"vf-table";
if(runtime.contextOrFrameLookup(context, frame, "table_variant")) {
output += " ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "table_variant"), env.opts.autoescape);
;
}
if(runtime.contextOrFrameLookup(context, frame, "tableLayoutFixed")) {
output += " vf-table--fixed";
;
}
output += "\">\n\n";
if(runtime.contextOrFrameLookup(context, frame, "table_caption")) {
output += "  <caption class=\"vf-table__caption\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "table_caption"), env.opts.autoescape);
output += "</caption>\n";
;
}
output += "\n  <thead class=\"vf-table__header\">\n";
if(runtime.contextOrFrameLookup(context, frame, "table_headings") == null) {
output += "    please add headings to table\n";
;
}
output += "    <tr class=\"vf-table__row\">\n";
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "table_headings");
if(t_3) {t_3 = runtime.fromIterator(t_3);
var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("cell", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "        <th class=\"vf-table__heading\" scope=\"col\"\n";
if(runtime.memberLookup((t_4),"colspans")) {
output += " colspan=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"colspans"), env.opts.autoescape);
output += "\"";
;
}
output += "        >";
output += runtime.suppressValue(runtime.memberLookup((t_4),"title"), env.opts.autoescape);
output += "</th>\n";
;
}
}
frame = frame.pop();
output += "    </tr>\n  </thead>\n\n  <tbody class=\"vf-table__body\">";
frame = frame.push();
var t_7 = runtime.contextOrFrameLookup(context, frame, "table_rows");
if(t_7) {t_7 = runtime.fromIterator(t_7);
var t_6 = t_7.length;
for(var t_5=0; t_5 < t_7.length; t_5++) {
var t_8 = t_7[t_5];
frame.set("row", t_8);
frame.set("loop.index", t_5 + 1);
frame.set("loop.index0", t_5);
frame.set("loop.revindex", t_6 - t_5);
frame.set("loop.revindex0", t_6 - t_5 - 1);
frame.set("loop.first", t_5 === 0);
frame.set("loop.last", t_5 === t_6 - 1);
frame.set("loop.length", t_6);
if(t_8) {
output += "    <tr class=\"vf-table__row\">";
frame = frame.push();
var t_11 = t_8;
if(t_11) {t_11 = runtime.fromIterator(t_11);
var t_10 = t_11.length;
for(var t_9=0; t_9 < t_11.length; t_9++) {
var t_12 = t_11[t_9];
frame.set("cell", t_12);
frame.set("loop.index", t_9 + 1);
frame.set("loop.index0", t_9);
frame.set("loop.revindex", t_10 - t_9);
frame.set("loop.revindex0", t_10 - t_9 - 1);
frame.set("loop.first", t_9 === 0);
frame.set("loop.last", t_9 === t_10 - 1);
frame.set("loop.length", t_10);
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"first") && runtime.contextOrFrameLookup(context, frame, "firstCellIsHeader") == true) {
output += "          <th class=\"vf-table__cell | vf-table__heading\" scope=\"row\"\n";
if(runtime.memberLookup((t_12),"colspans")) {
output += " colspan=\"";
output += runtime.suppressValue(runtime.memberLookup((t_12),"colspans"), env.opts.autoescape);
output += "\"";
;
}
if(runtime.memberLookup((t_12),"rowspans")) {
output += " rowspan=\"";
output += runtime.suppressValue(runtime.memberLookup((t_12),"rowspans"), env.opts.autoescape);
output += "\"";
;
}
output += "          >";
output += runtime.suppressValue(runtime.memberLookup((t_12),"text"), env.opts.autoescape);
output += "</th>";
;
}
else {
output += "<td class=\"vf-table__cell\"\n";
if(runtime.memberLookup((t_12),"colspans")) {
output += " colspan=\"";
output += runtime.suppressValue(runtime.memberLookup((t_12),"colspans"), env.opts.autoescape);
output += "\"";
;
}
if(runtime.memberLookup((t_12),"rowspans")) {
output += " rowspan=\"";
output += runtime.suppressValue(runtime.memberLookup((t_12),"rowspans"), env.opts.autoescape);
output += "\"";
;
}
output += "          >";
output += runtime.suppressValue(runtime.memberLookup((t_12),"text"), env.opts.autoescape);
output += "</td>\n";
;
}
;
}
}
frame = frame.pop();
output += "</tr>\n";
;
}
;
}
}
frame = frame.pop();
output += "  </tbody>\n\n</table>\n";
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
