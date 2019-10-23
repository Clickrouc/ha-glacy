var gulp = require('gulp'),
    browserSync = require('browser-sync').create();

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./build"
        }
    });
    browserSync.watch('', browserSync.reload);
});

gulp.task('default', gulp.series(
  'serve'
));
