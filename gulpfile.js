const gulp  = require('gulp');
const exec = require('child_process').exec
var   fractalBuildMode;

// -----------------------------------------------------------------------------
// Configuration
// -----------------------------------------------------------------------------

// Pull in some optional configuration from the package.json file, a la:
// "vfConfig": {
//   "vfName": "My Component Library",
//   "vfNameSpace": "myco-",
//   "vfComponentPath": "./src/components",
//   "vfComponentDirectories": [
//      "vf-core-components",
//      "../node_modules/your-optional-collection-of-dependencies"
//     NOTE: Don't forget to symlink: `cd components` `ln -s ../node_modules/your-optional-collection-of-dependencies`
//    ],
//   "vfBuildDestination": "./build",
//   "vfThemePath": "@frctl/mandelbrot"
// },
// all settings are optional
// todo: this could/should become a JS module
const fs = require('fs');
const path = require('path');
const config = JSON.parse(fs.readFileSync('./package.json'));
const vfCoreConfig = JSON.parse(fs.readFileSync(require.resolve('@visual-framework/vf-core/package.json')));
config.vfConfig = config.vfConfig || [];
global.vfName = config.vfConfig.vfName || "Visual Framework 2.0";
global.vfNamespace = config.vfConfig.vfNamespace || "vf-";
global.vfComponentPath = config.vfConfig.vfComponentPath || path.resolve('.', __dirname + '/components');
global.vfBuildDestination = config.vfConfig.vfBuildDestination || __dirname + '/temp/build-files';
global.vfThemePath = config.vfConfig.vfThemePath || './tools/vf-frctl-theme';
global.vfVersion = vfCoreConfig.version || 'not-specified';
const componentPath = path.resolve('.', global.vfComponentPath).replace(/\\/g, '/');
const componentDirectories = config.vfConfig.vfComponentDirectories || ['vf-core-components'];
const buildDestionation = path.resolve('.', global.vfBuildDestination).replace(/\\/g, '/');

// Tasks to build/run vf-core component system
require('./node_modules/\@visual-framework/vf-core/tools/gulp-tasks/_gulp_rollup.js')(gulp, path, componentPath, componentDirectories, buildDestionation);

// Watch folders for changess
gulp.task('watch', function() {
  gulp.watch(['./src/components/**/*.scss', '!./src/components/**/package.variables.scss'], gulp.parallel('vf-css'));
  gulp.watch(['./src/components/**/*.js'], gulp.parallel('vf-scripts'));
  console.log('to do: add a watch command');
});

gulp.task('set-to-development', function(done) {
  process.argv.push('--serve');
  process.env.ELEVENTY_ENV = 'development';
  fractalBuildMode = 'server';
  done();
});

gulp.task('set-to-static-build', function(done) {
  process.argv.push('--quiet');
  process.env.ELEVENTY_ENV = 'production';
  fractalBuildMode = 'dataobject'; // run fractal in server mode as there's no need for static html assets
  done();
});

// Run eleventy, but only after we wait for fractal to bootstrap
// @todo: consider if this could/should be two parallel gulp tasks
gulp.task('fractal', function(done) {
  global.vfBuilderPath   = __dirname + '/build/vf-core-components';
  global.vfDocsPath      = __dirname + '/node_modules/\@visual-framework/vf-eleventy--extensions/fractal/docs';
  global.vfOpenBrowser   = false; // if you want to open a browser tab for the component library
  global.fractal         = require('@visual-framework/vf-core/fractal.js').initialize(fractalBuildMode,fractalReadyCallback); // make fractal components are available gloablly

  function fractalReadyCallback(fractal) {
    // console.log('Done building Fractal');
    global.fractal = fractal; // save fractal globally
    done();
  }

});

gulp.task('eleventy', function(done) {

  exec('npx eleventy --config=eleventy.js', function (err, stdout, stderr) {
    console.log(stdout)
    console.log(stderr)
    done(err)
  });

});
// Eleventy doesn't always finish promptly, this ensures we exit gulp "cleanly"
gulp.task('browser-sync', function(done) {
  console.log('to do: add browsersync instance');
  done();
});

// Let's build this sucker.
gulp.task('build', gulp.series(
  'vf-clean',
  gulp.parallel('vf-css','vf-scripts','vf-component-assets'),
  'set-to-static-build',
  'fractal',
  'eleventy'
));

// Build and watch things during dev
gulp.task('dev', gulp.series(
  'vf-clean',
  gulp.parallel('vf-css','vf-scripts','vf-component-assets'),
  'set-to-development',
  'fractal',
  'eleventy',
  gulp.parallel('watch', 'vf-watch', 'browser-sync')
));
