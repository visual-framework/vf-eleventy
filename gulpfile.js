const gulp  = require('gulp');
const rename = require('gulp-rename');

// Gulp tasks live in their own files, for the sake of clarity.
require('require-dir')('./gulp-tasks');

// Watch folders for changess
gulp.task('watch', function() {
  gulp.watch('./src/scss/**/*.scss', gulp.parallel('css'));
  gulp.watch('./src/js/**/*.js', gulp.parallel('js'));
});

// Let's build this sucker.
gulp.task('build', gulp.parallel(
  'css',
  'js'
));

// Build and watch things during dev
gulp.task('dev', gulp.series(
  'build',
  'watch'
));

// Copy all vf HBS templates to ./src/site/_includes/components
// we'll also need to rewrite some contents
// - frctl you do `{{> '@vf-lede' vf-lede-text=vf-intro_lede}}`
// - 11ty: `{{> vf-lede vf-lede-text=vf-intro_lede}}` (edited)
gulp.task('vf-components', () => {
  return gulp
    .src(['node_modules/@visual-framework/**/*.njk'])
      .pipe(rename(function(path) {
        // remove the subdirectory
        // vf-heading/vf-heading.hbs => vf-heading.hbs
        path.dirname = path.dirname.replace(/vf-.*/g, '');
      }))
      .pipe(gulp.dest('./src/site/_includes/components'));
});
