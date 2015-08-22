var gulp = require('gulp'),
    livereload = require('gulp-livereload');

gulp.task('reload', function () {
    gulp.src('*.*')
    .pipe(livereload());
});

gulp.task('watch', function () {
    livereload.listen();

    gulp.watch('**/*.css', function (file) {
        livereload.changed(file);
    });

    gulp.watch('**/*.md', function (file) {
        livereload.changed(file);
    });

    gulp.watch('**/*.html', function (file) {
        livereload.changed(file);
    });
});

