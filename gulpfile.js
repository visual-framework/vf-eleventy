const path = require('path');
const gulp = require('gulp');

// Pull in optional configuration from the package.json file, a la:
const {componentPath, componentDirectories, buildDestionation} = require('@visual-framework/vf-config');

// Tasks to build/run vf-core component system
require('./node_modules/\@visual-framework/vf-core/gulp-tasks/_gulp_rollup.js')(gulp, path, componentPath, componentDirectories, buildDestionation);
require('./node_modules/\@visual-framework/vf-extensions/gulp-tasks/_gulp_rollup.js')(gulp, path, componentPath, componentDirectories, buildDestionation);

// Optional support for creating components
// `gulp vf-component`
try {
  require(path.resolve(".", __dirname + "/node_modules/@visual-framework/vf-component-generator/gulp-tasks/vf-generator.js"))(gulp, path);
} catch (error) {
  console.log("🛠  vf-component generator not found. To generate components: yarn add vf-component-generator --dev")
  // console.error(error);
}

// Watch folders for changes
gulp.task('watch', function() {
  gulp.watch(['./src/components/**/*.scss', '!./src/components/**/package.variables.scss'], gulp.parallel('vf-css'));
  gulp.watch(['./src/components/**/*.js'], gulp.parallel('vf-scripts'));
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
gulp.task('eleventy', function(done) {
  let elev;
  process.argv.push('--config=eleventy.js'); // Eleventy config
  global.vfBuilderPath   = __dirname + '/build/vf-core-components';
  global.vfDocsPath      = __dirname + '/node_modules/\@visual-framework/vf-eleventy--extensions/fractal/docs';
  global.vfOpenBrowser   = false; // if you want to open a browser tab for the component library
  global.fractal         = require('@visual-framework/vf-core/fractal.js').initialize(fractalBuildMode,fractalReadyCallback); // make fractal components are available gloablly

  function fractalReadyCallback(fractal) {
    global.fractal = fractal; // save fractal globally
    let elevExtensions = require.resolve('@visual-framework/vf-eleventy--extensions/');
    elev = require(path.resolve(elevExtensions,'../11ty/eleventy-cmd.js'));

    // elev = require('./node_modules/\@visual-framework/vf-eleventy--extensions/11ty/cmd.js');
    console.log('Done building Fractal');
    buildEleventy();
  }

  function buildEleventy() {
    if (process.env.ELEVENTY_ENV == 'production') {
      elev.write().then(function() {
        console.log('Done building 11ty');
        done();
      });
    }
    if (process.env.ELEVENTY_ENV == 'development') {
      elev.watch().then(function() {
        elev.serve('3000');
        // console.log('Done building 11ty');
        done();
      });
    }
  }

});

// Eleventy doesn't always finish promptly, this ensures we exit gulp "cleanly"
gulp.task('manual-exit', function(done) {
  done()(process.exit());
});

// Let's build this sucker.
gulp.task('build', gulp.series(
  'vf-clean',
  gulp.parallel('vf-css','vf-scripts','vf-component-assets'),
  'vf-css:production', //optimise, prefix css
  'fractal:build',
  'fractal',
  'eleventy:init',
  'eleventy:build'
));

// Build and watch things during dev
gulp.task('dev', gulp.series(
  'vf-clean',
  gulp.parallel('vf-css','vf-scripts','vf-component-assets'),
  'fractal:development',
  'fractal',
  'eleventy:init',
  'eleventy:develop',
  gulp.parallel('watch','vf-watch')
));
