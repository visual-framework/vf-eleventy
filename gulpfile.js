const gulp  = require('gulp');
const rename = require('gulp-rename');

let fractalBuildMode = 'build';

// Some Gulp tasks live in their own files, for the sake of clarity.
require('require-dir')('./gulp-tasks');

// Tasks to build/run vf-core component system
require('./node_modules/\@visual-framework/vf-core/gulpfile.js');

// Eleventy config
process.argv.push('--config=eleventy.js');

// Watch folders for changess
gulp.task('watch', function() {
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
  global.vfComponentPath = __dirname + '/src/components'; // where our VF components live
  global.vfDocsPath      = __dirname + '/src/fractal/docs';
  global.vfOpenBrowser   = false; // if you want to open a browser tab for the component library
  global.fractal         = require('@visual-framework/vf-core/fractal.js').initialize(fractalBuildMode,fractalReadyCallback); // make fractal components are available gloablly

  function fractalReadyCallback(fractal) {
    global.fractal = fractal; // save fractal globally
    const eleventy = require('@11ty/eleventy/cmd.js');
    done();
  }
});

// Let's build this sucker.
gulp.task('build', gulp.series(
  'vf-clean',
  gulp.parallel('css','js','vf-css', 'vf-scripts','vf-component-assets'),
  'elventy-set-to-build',
  'eleventy'
));

// Build and watch things during dev
gulp.task('dev', gulp.series(
  'vf-clean',
  gulp.parallel('css','js','vf-css', 'vf-scripts','vf-component-assets'),
  'elventy-set-to-serve',
  'eleventy',
  'watch'
));
