var gulp = require('gulp'),
    webserver = require('gulp-webserver');

gulp.task('connect', function () {
    gulp.src('./')
    .pipe(webserver({
        livereload: true,
        directoryListring: true,
        open: true
    }));
});

gulp.task('default', ['connect']);

