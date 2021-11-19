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
  // left for convenience for local watch additions
  gulp.watch(['./build/css/styles.css'], gulp.series('eleventy:reload'));
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
