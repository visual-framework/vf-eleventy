/**
 * Precompiled Nunjucks template: vf-content.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["vf-content"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<div class=\"vf-content\">\n  ";
output += runtime.suppressValue(env.getFilter("marked").call(context, "# EMBL communications strategy 2018-2020"), env.opts.autoescape);
output += "\n\n  <p class=\"vf-content__standfirst\">This <a href=\"#\">communications strategy</a> outlines EMBL’s vision, mission and goals. It is intended to support everyone who communicates on behalf of EMBL, within and outside of the organisation, in order to provide aligned messaging and help EMBL to achieve its goals. The strategy is supported by an operational plan for the Strategy and Communications team.</p>\n  <p class=\"vf-content__standfirst\">The plan reflects the priorities defined in the communications strategy and translates them into a set of deliverables and projects managed by the Strategy and Communications team. This documentation will be regularly reviewed and revised. Your feedback is welcome at any time: please contact EMBL’s Strategy and Communications team.</p>\n  <small><i>This document was last revised 7 March 2018</i></small>\n\n";
output += runtime.suppressValue(env.getExtension("markdown")["run"](context,function(cb) {
if(!cb) { cb = function(err) { if(err) { throw err; }}}
var t_1 = "";t_1 += "  ## Section 1: EMBL’s vision and mission\n\n  ### EMBL’s vision\n\n  Enabling scientists worldwide to discover the secrets of life\n\n  ### EMBL’s mission\n\n  1. Uncovering the molecular basis of life through research\n  1. Providing research infrastructure and services\n  1. Training and inspiring the next generation of scientists\n  1. Driving research, innovation and progress through technology development\n  1. Interactions with industry and technology transfer\n  1. Playing a leading role in the integration of life science research\n\n  ### Further examples of bullets\n\n  - A bulleted item\n    - A nested bulleted item\n    - A nested bulleted item\n  - A bulleted item\n  - A bulleted item\n  - A bulleted item\n  - A bulleted item\n\n";
cb(null, t_1);
;
return t_1;
}
,function(cb) {
if(!cb) { cb = function(err) { if(err) { throw err; }}}
var t_2 = "";t_2 += 4;
cb(null, t_2);
;
return t_2;
}
), true && env.opts.autoescape);
output += "\n  <table>\n    <thead>\n      <tr>\n        <th scope=\"col\">Event</th>\n        <th scope=\"col\">Date</th>\n        <th scope=\"col\">Type</th>\n        <th scope=\"col\">Location</th>\n      </tr>\n    </thead>\n\n    <tbody>\n      <tr>\n        <td>dave</td>\n        <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima accusamus a nostrum odit aliquid repudiandae architecto molestiae, dolores.</td>\n        <td>roger</td>\n        <td>London, U.K.</td>\n      </tr>\n      <tr>\n        <td>dave</td>\n        <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio fugit illo officia dignissimos amet.</td>\n        <td>roger</td>\n        <td>London, U.K.</td>\n      </tr>\n      <tr>\n        <td>dave</td>\n        <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</td>\n        <td>roger</td>\n        <td>London, U.K.</td>\n      </tr>\n    </tbody>\n  </table>\n\n  <h3>What is EMBL?</h3>\n  <p>EMBL is Europe’s flagship laboratory for the life sciences. We are an intergovernmental organisation established in 1974 and are supported by over 20 member states.</p>\n  <p>EMBL performs fundamental research in molecular biology, studying the story of life. We offer services to the scientific community; train the next generation of scientists and strive to integrate the life sciences across Europe.</p>\n  <figure class=\"vf-figure | vf-figure--float vf-figure--float-inline-end\">\n    <img class=\"vf-figure__image\" src=\"../../assets/vf-figure/assets/figure-example.png\" alt=\"hello alt text\" loading=\"lazy\">\n    <figcaption class=\"vf-figure__caption\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus quasi dolorem eos ratione voluptatum omnis, voluptates adipisci, soluta beatae quo, excepturi, quas id libero rem suscipit! Numquam repellendus consectetur, velit.</figcaption>\n  </figure>\n  <p>We are international, innovative and interdisciplinary. We are more than 1600 people, from over 80 countries, operating across six sites in Barcelona (Spain), Cambridge (UK), Grenoble (France), Hamburg (Germany), Heidelberg (Germany), and Rome (Italy). Our scientists work in independent groups and conduct research and offer services in all areas of molecular biology.</p>\n  <p>Our research drives the development of new technology and methods in the life sciences. We work to transfer this knowledge for the benefit of society.</p>\n\n  <h2>Section 2: EMBL’s goals</h2>\n\n  <h3>Goal 1: Advancing society</h3>\n  <p>The fundamental knowledge that we create, enable and share is immensely valuable to society. Life-science research and services help to address society’s grand challenges, from human health, agriculture, to the environment and beyond.</p>\n\n  <h4>Communications goals:</h4>\n  <p>Show the impact of our work in tackling society’s big challenges</p>\n\n  <h3>Goal 2: Enable excellent science to advance our understanding of life</h3>\n  <p>We support scientists worldwide with infrastructure, services, technologies, training and platforms for exchange to carry out the best possible research. We are driven by curiosity about life, the most exciting story in the universe. We believe that advancing humankind’s understanding of life is a noble goal in itself.</p>\n\n  <h4>Communications goals:</h4>\n  <ul>\n    <li>Develop and sustain support for EMBL from important stakeholders</li>\n    <li>Attract the best scientists, engineers, technicians and support staff</li>\n    <li>Inform scientists about training opportunities and services</li>\n  </ul>\n\n  <blockquote>\n    <p>We are a group of user experience specialists in an international scientific organisation</p><p>Our aim is to help teams design services to meet the needs of their users</p><p>We believe in openness , transparency, working collaboratively and iteratively, continuously learning and sharing knowledge throughout the organisation</p><p><cite>EMBl-EBI Web Development UX Team Mission</cite></p>\n  </blockquote>\n\n  <figure>\n    <img src=\"https://news.embl.de/wp-content/uploads/2019/11/Anastasia-Vlasiuk.jpg\" alt=\"Anastasia Vlasiuk in the lab\" loading=\"lazy\">\n    <figcaption>Anastasiia Vlasiuk, PhD student in the Asari group, recording the visual responses of an isolated retina. PHOTO: Marietta Schupp/EMBL</figcaption>\n  </figure>\n\n</div>\n";
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
