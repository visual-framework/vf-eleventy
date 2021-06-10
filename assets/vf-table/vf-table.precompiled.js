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
output += "<svg class=\"vf-icon-sprite vf-icon-sprite--tables\" display=\"none\">\n\t<defs>\n\t\t<g id=\"vf-table-sortable--up\">\n\t\t\t<path xmlns=\"http://www.w3.org/2000/svg\" d=\"M17.485,5.062,12.707.284a1.031,1.031,0,0,0-1.415,0L6.515,5.062a1,1,0,0,0,.707,1.707H10.25a.25.25,0,0,1,.25.25V22.492a1.5,1.5,0,1,0,3,0V7.019a.249.249,0,0,1,.25-.25h3.028a1,1,0,0,0,.707-1.707Z\"/>\n\t\t</g>\n\t\t<g id=\"vf-table-sortable--down\">\n\t\t\t<path xmlns=\"http://www.w3.org/2000/svg\" d=\"M17.7,17.838a1,1,0,0,0-.924-.617H13.75a.249.249,0,0,1-.25-.25V1.5a1.5,1.5,0,0,0-3,0V16.971a.25.25,0,0,1-.25.25H7.222a1,1,0,0,0-.707,1.707l4.777,4.778a1,1,0,0,0,1.415,0l4.778-4.778A1,1,0,0,0,17.7,17.838Z\"/>\n\t\t</g>\n\t\t<g id=\"vf-table-sortable\">\n\t\t\t<path xmlns=\"http://www.w3.org/2000/svg\" d=\"M9,19a1,1,0,0,0-.707,1.707l3,3a1,1,0,0,0,1.414,0l3-3A1,1,0,0,0,15,19H13.5a.25.25,0,0,1-.25-.25V5.249A.25.25,0,0,1,13.5,5H15a1,1,0,0,0,.707-1.707l-3-3a1,1,0,0,0-1.414,0l-3,3A1,1,0,0,0,9,5h1.5a.25.25,0,0,1,.25.25v13.5a.25.25,0,0,1-.25.25Z\"/>\n\t\t</g>\n\t</defs>\n</svg>\n\n<table class=\"vf-table";
if(runtime.contextOrFrameLookup(context, frame, "table_variant")) {
output += " ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "table_variant"), env.opts.autoescape);
;
}
if(runtime.contextOrFrameLookup(context, frame, "striped")) {
output += " vf-table--striped";
;
}
if(runtime.contextOrFrameLookup(context, frame, "sortable")) {
output += " vf-table--sortable";
;
}
if(runtime.contextOrFrameLookup(context, frame, "bordered")) {
output += " vf-table--bordered";
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
output += "    <tr class=\"vf-table__row\">";
if(runtime.contextOrFrameLookup(context, frame, "selectable")) {
output += "<th class=\"vf-table__heading\" scope=\"col\">\n          <input type=\"checkbox\" id=\"select-all\" class=\"vf-form__checkbox | vf-table__checkbox\">\n          <label for=\"select-all\" class=\"vf-form__label vf-table__label\">\n            <span class=\"vf-u-sr-only\">Select all rows</span>\n          </label>\n        </th>";
;
}
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
output += "      >";
if(runtime.contextOrFrameLookup(context, frame, "sortable")) {
output += "<button class=\"vf-button vf-button--sm vf-button--icon vf-table__button vf-table__button--sortable\">\n          ";
output += runtime.suppressValue(runtime.memberLookup((t_4),"title"), env.opts.autoescape);
output += "\n          <svg width=\"12\" height=\"22\" xmlns=\"http://www.w3.org/2000/svg\">\n            ";
output += "\n            <path id=\"vf-table--sortable-top-arrow\"d=\"M6 0l6 10H0z\"/>\n            <path id=\"vf-table--sortable-bottom-arrow\" d=\"M6 22L0 12h12z\"/>\n          </svg>\n        </button>\n";
;
}
else {
output += "        ";
output += runtime.suppressValue(runtime.memberLookup((t_4),"title"), env.opts.autoescape);
output += "\n";
;
}
output += "      </th>\n";
;
}
}
frame = frame.pop();
if(runtime.contextOrFrameLookup(context, frame, "inline_actions")) {
output += "<th class=\"vf-table__heading vf-table__heading--actions\">\n          Actions\n        </th>";
;
}
output += "</tr>\n  </thead>\n\n  <tbody class=\"vf-table__body\">";
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
output += "    <tr class=\"vf-table__row\n";
if(runtime.contextOrFrameLookup(context, frame, "selected")) {
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
if(runtime.memberLookup((t_12),"selected_row")) {
output += " vf-table__row--selected";
;
}
;
}
}
frame = frame.pop();
;
}
output += "\">";
if(runtime.contextOrFrameLookup(context, frame, "selectable")) {
output += "<th class=\"vf-table__cell vf-table__cell--selectable\" scope=\"row\">\n";
var t_13;
t_13 = runtime.contextOrFrameLookup(context, frame, "count") + 1;
frame.set("count", t_13, true);
if(frame.topLevel) {
context.setVariable("count", t_13);
}
if(frame.topLevel) {
context.addExport("count", t_13);
}
output += "            <input type=\"checkbox\" id=\"checkbox-";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "count"), env.opts.autoescape);
output += "\" class=\"vf-form__checkbox | vf-table__checkbox\"\n";
if(runtime.contextOrFrameLookup(context, frame, "selected")) {
frame = frame.push();
var t_16 = t_8;
if(t_16) {t_16 = runtime.fromIterator(t_16);
var t_15 = t_16.length;
for(var t_14=0; t_14 < t_16.length; t_14++) {
var t_17 = t_16[t_14];
frame.set("cell", t_17);
frame.set("loop.index", t_14 + 1);
frame.set("loop.index0", t_14);
frame.set("loop.revindex", t_15 - t_14);
frame.set("loop.revindex0", t_15 - t_14 - 1);
frame.set("loop.first", t_14 === 0);
frame.set("loop.last", t_14 === t_15 - 1);
frame.set("loop.length", t_15);
if(runtime.memberLookup((t_17),"selected_row")) {
output += " checked";
;
}
;
}
}
frame = frame.pop();
;
}
output += ">\n            <label for=\"checkbox-";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "count"), env.opts.autoescape);
output += "\" class=\"vf-form__label vf-table__label\">\n              <span class=\"vf-u-sr-only\">Form Label</span>\n            </label>\n        </th>";
;
}
frame = frame.push();
var t_20 = t_8;
if(t_20) {t_20 = runtime.fromIterator(t_20);
var t_19 = t_20.length;
for(var t_18=0; t_18 < t_20.length; t_18++) {
var t_21 = t_20[t_18];
frame.set("cell", t_21);
frame.set("loop.index", t_18 + 1);
frame.set("loop.index0", t_18);
frame.set("loop.revindex", t_19 - t_18);
frame.set("loop.revindex0", t_19 - t_18 - 1);
frame.set("loop.first", t_18 === 0);
frame.set("loop.last", t_18 === t_19 - 1);
frame.set("loop.length", t_19);
if(runtime.memberLookup((t_21),"selected_row")) {
;
}
else {
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"first") && runtime.contextOrFrameLookup(context, frame, "firstCellIsHeader") == true) {
output += "            <th class=\"vf-table__cell | vf-table__heading\" scope=\"row\"\n";
if(runtime.memberLookup((t_21),"colspans")) {
output += " colspan=\"";
output += runtime.suppressValue(runtime.memberLookup((t_21),"colspans"), env.opts.autoescape);
output += "\"";
;
}
if(runtime.memberLookup((t_21),"rowspans")) {
output += " rowspan=\"";
output += runtime.suppressValue(runtime.memberLookup((t_21),"rowspans"), env.opts.autoescape);
output += "\"";
;
}
output += "            >";
output += runtime.suppressValue(runtime.memberLookup((t_21),"text"), env.opts.autoescape);
output += "</th>";
;
}
else {
output += "<td class=\"vf-table__cell\"\n";
if(runtime.memberLookup((t_21),"colspans")) {
output += " colspan=\"";
output += runtime.suppressValue(runtime.memberLookup((t_21),"colspans"), env.opts.autoescape);
output += "\"";
;
}
if(runtime.memberLookup((t_21),"rowspans")) {
output += " rowspan=\"";
output += runtime.suppressValue(runtime.memberLookup((t_21),"rowspans"), env.opts.autoescape);
output += "\"";
;
}
output += "            >";
output += runtime.suppressValue(runtime.memberLookup((t_21),"text"), env.opts.autoescape);
output += "</td>\n";
;
}
;
}
;
}
}
frame = frame.pop();
if(runtime.contextOrFrameLookup(context, frame, "inline_actions")) {
output += "<td class=\"vf-table__cell vf-table__cell--actions\">";
frame = frame.push();
var t_24 = runtime.contextOrFrameLookup(context, frame, "inline_actions");
if(t_24) {t_24 = runtime.fromIterator(t_24);
var t_23 = t_24.length;
for(var t_22=0; t_22 < t_24.length; t_22++) {
var t_25 = t_24[t_22];
frame.set("action", t_25);
frame.set("loop.index", t_22 + 1);
frame.set("loop.index0", t_22);
frame.set("loop.revindex", t_23 - t_22);
frame.set("loop.revindex0", t_23 - t_22 - 1);
frame.set("loop.first", t_22 === 0);
frame.set("loop.last", t_22 === t_23 - 1);
frame.set("loop.length", t_23);
output += "          <button class=\"vf-button vf-button--sm vf-button--icon\">";
output += runtime.suppressValue(t_25, env.opts.autoescape);
output += "</button>";
;
}
}
frame = frame.pop();
output += "</td>";
;
}
output += "</tr>\n";
;
}
;
}
}
frame = frame.pop();
output += "  </tbody>";
if(runtime.contextOrFrameLookup(context, frame, "table_footer")) {
output += "  <tfoot class=\"vf-table__footer\">\n    <tr class=\"vf-table__row\">\n";
frame = frame.push();
var t_28 = runtime.contextOrFrameLookup(context, frame, "table_footer");
if(t_28) {t_28 = runtime.fromIterator(t_28);
var t_27 = t_28.length;
for(var t_26=0; t_26 < t_28.length; t_26++) {
var t_29 = t_28[t_26];
frame.set("cell", t_29);
frame.set("loop.index", t_26 + 1);
frame.set("loop.index0", t_26);
frame.set("loop.revindex", t_27 - t_26);
frame.set("loop.revindex0", t_27 - t_26 - 1);
frame.set("loop.first", t_26 === 0);
frame.set("loop.last", t_26 === t_27 - 1);
frame.set("loop.length", t_27);
output += "      <td class=\"vf-table__cell\"\n";
if(runtime.memberLookup((t_29),"colspans")) {
output += " colspan=\"";
output += runtime.suppressValue(runtime.memberLookup((t_29),"colspans"), env.opts.autoescape);
output += "\"";
;
}
if(runtime.memberLookup((t_29),"rowspans")) {
output += " rowspan=\"";
output += runtime.suppressValue(runtime.memberLookup((t_29),"rowspans"), env.opts.autoescape);
output += "\"";
;
}
output += "      >\n        ";
output += runtime.suppressValue(runtime.memberLookup((t_29),"text"), env.opts.autoescape);
output += "\n      </td>\n";
;
}
}
frame = frame.pop();
output += "    </tr>\n  </tfoot>";
;
}
output += "</table>\n\n";
if(runtime.contextOrFrameLookup(context, frame, "selected")) {
output += "<div class=\"vf-table__actions\">";
frame = frame.push();
var t_32 = runtime.contextOrFrameLookup(context, frame, "actions");
if(t_32) {t_32 = runtime.fromIterator(t_32);
var t_31 = t_32.length;
for(var t_30=0; t_30 < t_32.length; t_30++) {
var t_33 = t_32[t_30];
frame.set("action", t_33);
frame.set("loop.index", t_30 + 1);
frame.set("loop.index0", t_30);
frame.set("loop.revindex", t_31 - t_30);
frame.set("loop.revindex0", t_31 - t_30 - 1);
frame.set("loop.first", t_30 === 0);
frame.set("loop.last", t_30 === t_31 - 1);
frame.set("loop.length", t_31);
output += "  <button class=\"vf-button vf-button--sm vf-button--icon\">";
output += runtime.suppressValue(t_33, env.opts.autoescape);
output += "</button>";
;
}
}
frame = frame.pop();
output += "</div>\n";
;
}
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
