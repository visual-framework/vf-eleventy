const gulp  = require('gulp');

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
config.vfConfig = config.vfConfig || [];
global.vfName = config.vfConfig.vfName || "Visual Framework 2.0";
global.vfNamespace = config.vfConfig.vfNamespace || "vf-";
global.vfComponentPath = config.vfConfig.vfComponentPath || path.resolve('.', __dirname + '/components');
global.vfBuildDestination = config.vfConfig.vfBuildDestination || __dirname + '/temp/build-files';
global.vfThemePath = config.vfConfig.vfThemePath || './tools/vf-frctl-theme';
global.vfVersion = config.version || 'not-specified';
const componentPath = path.resolve('.', global.vfComponentPath).replace(/\\/g, '/');
const componentDirectories = config.vfConfig.vfComponentDirectories || ['vf-core-components'];
const buildDestionation = path.resolve('.', global.vfBuildDestination).replace(/\\/g, '/');

// Some Gulp tasks live in their own files, for the sake of clarity.
require('require-dir')('./gulp-tasks');

// HACK: in vf-core@beta.2 a bug was introduced where it would erronously try to generate a version from the component template, this works around it by renaming the file
// this can be removed once beta.3 is released

// part 1: unset hack on init
let hackComponentGeneratorPath = './node_modules/@visual-framework/vf-core/tools/component-generator/templates/';
fs.rename(hackComponentGeneratorPath+'_ignored.json', hackComponentGeneratorPath+'_package.json', function (err) {
  if (err) { /* file has already been moved */ }
});

// part 2. use hack when requested
gulp.task('component-bug-hack', function(done) {
  let hackComponentGeneratorPath = './node_modules/@visual-framework/vf-core/tools/component-generator/templates/';
  fs.rename(hackComponentGeneratorPath+'_package.json', hackComponentGeneratorPath+'_ignored.json', function (err) {
    if (err) { /* file has already been moved */ }
  });
  done();
});

// Tasks to build/run vf-core component system
require('./node_modules/\@visual-framework/vf-core/tools/gulp-tasks/_gulp_rollup.js')(gulp, path, componentPath, componentDirectories, buildDestionation);

// Eleventy config
process.argv.push('--config=eleventy.js');

// Watch folders for changess
gulp.task('watch', function() {
  gulp.watch(['./src/components/**/*.scss'], gulp.parallel('vf-css'));
  gulp.watch(['./src/components/**/*.js'], gulp.parallel('vf-scripts'));
  gulp.watch(['./src/scss/**/*.scss','./src/scss/*.scss'], gulp.parallel('css'));
  gulp.watch(['./src/js/**/*.js','./src/js/*.js'], gulp.parallel('js'));
});

gulp.task('elventy-set-to-serve', function(done) {
  // Since we're not using the 11ty command line directly, we need to set the
  // `--serve` param manually
  process.argv.push('--serve');
  process.env.ELEVENTY_ENV = 'development';
  fractalBuildMode = 'server';
  done();
});

gulp.task('elventy-set-to-build', function(done) {
  // Since we're not using the 11ty command line directly, we need to set the
  // `--serve` param manually
  process.argv.push('--quiet');
  process.env.ELEVENTY_ENV = 'production';
  done();
});

// Run eleventy, but only after we wait for fractal to bootstrap
// @todo: consider if this could/should be two parallel gulp tasks
gulp.task('eleventy', function(done) {
  global.vfBuilderPath   = __dirname + '/build/vf-core-components';
  global.vfDocsPath      = __dirname + '/node_modules/\@visual-framework/vf-eleventy--extensions/fractal/docs';
  global.vfOpenBrowser   = false; // if you want to open a browser tab for the component library
  global.fractal         = require('@visual-framework/vf-core/fractal.js').initialize(fractalBuildMode,fractalReadyCallback); // make fractal components are available gloablly

  function fractalReadyCallback(fractal) {
    global.fractal = fractal; // save fractal globally
    global.eleventy = require('@11ty/eleventy/cmd.js');
    done();
  }
});

// Let's build this sucker.
let fractalBuildMode = 'build';
gulp.task('build', gulp.series(
  'component-bug-hack',
  'vf-clean',
  gulp.parallel('css','js','vf-css','vf-scripts','vf-component-assets'),
  'elventy-set-to-build',
  'eleventy'
));

// Build and watch things during dev
gulp.task('dev', gulp.series(
  'component-bug-hack',
  'vf-clean',
  gulp.parallel('css','js','vf-css','vf-scripts','vf-component-assets'),
  'elventy-set-to-serve',
  'eleventy',
  'watch'
));
