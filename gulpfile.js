const gulp = require('gulp');
const gzip = require('gulp-gzip');

gulp.task('compress', function () {
    gulp
        .src(['./dist/**/*.js', './dist/**/*.css', './dist/**/*.ttf', './dist/**/*.eot'])
        .pipe(gzip())
        .pipe(gulp.dest('./dist'));
});