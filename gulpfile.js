const gulp = require('gulp');
const nunjucks = require('gulp-nunjucks');

gulp.task('nunjucks', function () {
  return gulp.src('spaghetti.html')
  .pipe(nunjucks.compile())
  .pipe(gulp.dest('dist'));
});

gulp.task('watch', function () {
  gulp.watch(['spaghetti.html', 'partials/*.html'], ['nunjucks']);
});

gulp.task('default', ['nunjucks', 'watch']);
