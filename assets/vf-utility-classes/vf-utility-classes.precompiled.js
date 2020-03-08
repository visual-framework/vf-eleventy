/**
 * Precompiled Nunjucks template: vf-utility-classes.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["vf-utility-classes"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "\n<div class=\"vf-content\">\n\n";
output += runtime.suppressValue(env.getExtension("markdown")["run"](context,function(cb) {
if(!cb) { cb = function(err) { if(err) { throw err; }}}
var t_1 = "";t_1 += "\n### Et al.\n\n- `.vf-u-text--et-al` for use in publications lists and similar\n\n<span class=\"vf-u-text--et-al\">Jon Smith, Jane Johnson, </span>\n\n### Screenreader text\n\n- `.vf-u-sr-only` some things should only be shown to screen readers\n\n<span class=\"vf-u-sr-only\">Like this text</span>\n\n### No wrap\n\n- `.vf-u-text--nowrap` keep text together, as much as possible\n\nI'm some words that can break awkwardly but keep the <span class=\"vf-u-text--nowrap\">Company Name</span> together.\n\n### Break text\n\n- `.vf-u-text--break` break long strings of text\n\nHere's some long text that would otherwise run off the side of the page <span class=\"vf-u-text--break\">evock2OTIhUP5N9ZgsNCzgYrfFuKd3ktVLTYnVTfX1NPpzjxmYC0RwLiOxwqi7n7VLWgRFUiTa7UK77exxWkpbJwLoERCAU5L0Z8ebvYpjKCtCboKgAxYx4CxmlsP3U66rabF3nxA6sNDhZnYWW6zr1QfR7J7nzKhQG9P2oSnOFNoK7xPr6hgxpePl3Jq9Ml2n5eAeV6evock2OTIhUP5N9ZgsNCzgYrfFuKd3ktVLTYnVTfX1NPpzjxmYC0RwLiOxwqi7n7VLWgRFUiTa7UK77exxWkpbJwLoERCAU5L0Z8ebvYpjKCtCboKgAxYx4CxmlsP3U66rabF3nxA6sNDhZnYWW6zr1QfR7J7nzKhQG9P2oSnOFNoK7xPr6hgxpePl3Jq9Ml2n5eAeV6</span>.\n\n### Text-colours\n\nSame colour options as background colours, with a prefix of\n";
cb(null, t_1);
;
return t_1;
}
,function(cb) {
if(!cb) { cb = function(err) { if(err) { throw err; }}}
var t_2 = "";t_2 += 2;
cb(null, t_2);
;
return t_2;
}
), true && env.opts.autoescape);
output += "\n";
output += runtime.suppressValue(env.getExtension("codeblock")["run"](context,"css",function(cb) {
if(!cb) { cb = function(err) { if(err) { throw err; }}}
var t_3 = "";t_3 += ".vf-u-text-color--\n";
cb(null, t_3);
;
return t_3;
}
,null), true && env.opts.autoescape);
output += "\n";
output += runtime.suppressValue(env.getExtension("markdown")["run"](context,function(cb) {
if(!cb) { cb = function(err) { if(err) { throw err; }}}
var t_4 = "";t_4 += "### Text and heading sizes\n\n- Text: From 1 to 6, with 1 being the largest.\n- Button: From 1 to 2, with 1 being the largest.\n- Heading: From 1 to 5, with 1 being the largest.\n\n";
cb(null, t_4);
;
return t_4;
}
,function(cb) {
if(!cb) { cb = function(err) { if(err) { throw err; }}}
var t_5 = "";t_5 += 2;
cb(null, t_5);
;
return t_5;
}
), true && env.opts.autoescape);
output += "\n";
output += runtime.suppressValue(env.getExtension("codeblock")["run"](context,"css",function(cb) {
if(!cb) { cb = function(err) { if(err) { throw err; }}}
var t_6 = "";t_6 += ".vf-u-type__text-body--1\n.vf-u-type__text-body--6\n\n.vf-u-type__text-button--1\n.vf-u-type__text-button--2\n\n.vf-u-type__text-heading--1\n.vf-u-type__text-heading--5\n";
cb(null, t_6);
;
return t_6;
}
,null), true && env.opts.autoescape);
output += "\n";
output += runtime.suppressValue(env.getExtension("markdown")["run"](context,function(cb) {
if(!cb) { cb = function(err) { if(err) { throw err; }}}
var t_7 = "";t_7 += "### Grid layout\n";
cb(null, t_7);
;
return t_7;
}
,function(cb) {
if(!cb) { cb = function(err) { if(err) { throw err; }}}
var t_8 = "";t_8 += 2;
cb(null, t_8);
;
return t_8;
}
), true && env.opts.autoescape);
output += "\n";
output += runtime.suppressValue(env.getExtension("codeblock")["run"](context,"css",function(cb) {
if(!cb) { cb = function(err) { if(err) { throw err; }}}
var t_9 = "";t_9 += ".vf-u-grid--reset {\n  grid-column: 1 / -1;\n}\n";
cb(null, t_9);
;
return t_9;
}
,null), true && env.opts.autoescape);
output += "\n";
output += runtime.suppressValue(env.getExtension("markdown")["run"](context,function(cb) {
if(!cb) { cb = function(err) { if(err) { throw err; }}}
var t_10 = "";t_10 += "### Visibility\n";
cb(null, t_10);
;
return t_10;
}
,function(cb) {
if(!cb) { cb = function(err) { if(err) { throw err; }}}
var t_11 = "";t_11 += 2;
cb(null, t_11);
;
return t_11;
}
), true && env.opts.autoescape);
output += "\n";
output += runtime.suppressValue(env.getExtension("codeblock")["run"](context,"css",function(cb) {
if(!cb) { cb = function(err) { if(err) { throw err; }}}
var t_12 = "";t_12 += ".vf-u-display-none {\n  display: none;\n}\n";
cb(null, t_12);
;
return t_12;
}
,null), true && env.opts.autoescape);
output += "\n";
output += runtime.suppressValue(env.getExtension("markdown")["run"](context,function(cb) {
if(!cb) { cb = function(err) { if(err) { throw err; }}}
var t_13 = "";t_13 += "### Margins\n\nIn t-shirt sizes from `0`,`xs`, `sm`, `md`, `lg`, `xl`, `xl`, `xxl`\n";
cb(null, t_13);
;
return t_13;
}
,function(cb) {
if(!cb) { cb = function(err) { if(err) { throw err; }}}
var t_14 = "";t_14 += 2;
cb(null, t_14);
;
return t_14;
}
), true && env.opts.autoescape);
output += "\n";
output += runtime.suppressValue(env.getExtension("codeblock")["run"](context,"css",function(cb) {
if(!cb) { cb = function(err) { if(err) { throw err; }}}
var t_15 = "";t_15 += ".vf-u-margin--0\n.vf-u-margin--xs\n.vf-u-margin--sm\n.vf-u-margin--md\n.vf-u-margin--lg\n.vf-u-margin--xl\n.vf-u-margin--xxl\n\n.vf-u-margin__bottom--0\n.vf-u-margin__bottom--..\n.vf-u-margin__bottom--xxl\n\n.vf-u-margin__top--0\n.vf-u-margin__top--..\n.vf-u-margin__top--xxl\n\n.vf-u-margin__left--0\n.vf-u-margin__left--..\n.vf-u-margin__left--xxl\n\n.vf-u-margin__right--0\n.vf-u-margin__right--..\n.vf-u-margin__right--xxl\n\n";
cb(null, t_15);
;
return t_15;
}
,null), true && env.opts.autoescape);
output += "\n";
output += runtime.suppressValue(env.getExtension("markdown")["run"](context,function(cb) {
if(!cb) { cb = function(err) { if(err) { throw err; }}}
var t_16 = "";t_16 += "### Padding\n\nIn t-shirt sizes from `0`,`xs`, `sm`, `md`, `lg`, `xl`, `xl`, `xxl`\n";
cb(null, t_16);
;
return t_16;
}
,function(cb) {
if(!cb) { cb = function(err) { if(err) { throw err; }}}
var t_17 = "";t_17 += 2;
cb(null, t_17);
;
return t_17;
}
), true && env.opts.autoescape);
output += "\n";
output += runtime.suppressValue(env.getExtension("codeblock")["run"](context,"css",function(cb) {
if(!cb) { cb = function(err) { if(err) { throw err; }}}
var t_18 = "";t_18 += ".vf-u-padding--0\n.vf-u-padding--xs\n.vf-u-padding--sm\n.vf-u-padding--md\n.vf-u-padding--lg\n.vf-u-padding--xl\n.vf-u-padding--xxl\n\n.vf-u-padding__bottom--0\n.vf-u-padding__bottom--..\n.vf-u-padding__bottom--xxl\n\n.vf-u-padding__top--0\n.vf-u-padding__top--..\n.vf-u-padding__top--xxl\n\n.vf-u-padding__left--0\n.vf-u-padding__left--..\n.vf-u-padding__left--xxl\n\n.vf-u-padding__right--0\n.vf-u-padding__right--..\n.vf-u-padding__right--xxl\n\n";
cb(null, t_18);
;
return t_18;
}
,null), true && env.opts.autoescape);
output += "\n<p>Todo: This should be autogenerated from the Sass, but to best do that we might look at some sort of\ncss documentation tool.</p>\n\n</div>\n";
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
