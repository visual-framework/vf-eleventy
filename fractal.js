// @todo: pull in this build file from vf-core
//        mostly blocked by the need to be able to pass fractal.components.set('path',..)

/* Create a new Fractal instance and export it for use elsewhere if required */
const fractal = module.exports = require('@frctl/fractal').create();
const logger  = fractal.cli.console;
fractal.components.set('path', __dirname + '/src/components');

fractal.set('project.title', 'vfName');

/* Handlebars with custom helpers */
const hljs = require('highlight.js');
const nunj = require('@frctl/nunjucks')({
  env: {
    lstripBlocks: true,
    trimBlocks: true,
    autoescape: false
    // Nunjucks environment opts: https://mozilla.github.io/nunjucks/api.html#configure
  }
});

fractal.components.set('ext', '.njk'); // look for files with a .nunj file extension
fractal.components.engine(nunj); /* set as the default template engine for components */

/* configure components */
fractal.components.set('default.status', 'alpha');
fractal.components.set('default.preview', `@preview`);

fractal.components.set('statuses', {
  /* status definitions here */
  ready: {},
  alpha: {
    label: "alhpa",
    description: "Do not implement.",
    color: "#DC0A28",
    text: "#FFFFFF"
  },
  beta: {
    label: "beta",
    description: "Work in progress. Implement with caution.",
    color: "#E89300"
  },
  live: {
    label: "live",
    description: "Ready to implement.",
    color: "#19993B"
  },
  deprecated: {
    label: "deprecated",
    description: "Never use this again.",
    color: "#707372"
  }
});

// console.log('fractal.components loaded');
//
fractal.set('project.environment.local', 'true');
const fractalServer = fractal.web.server({
  // sync: true
});
// fractalServer.on('error', err => logger.error(err.message));
fractalServer.start().then(() => {
  logger.success(`Your Visual Framework component library is available at ${fractalServer.url}`);
  // logger.success(`Network URL: ${server.urls.sync.external}`);
});
