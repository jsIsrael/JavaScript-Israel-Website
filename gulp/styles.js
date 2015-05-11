var gulp = require('gulp');
var browserSync = require('browser-sync');
var $ = require('gulp-load-plugins')();

module.exports = function (options) {

  gulp.task('styles', function () {

    return gulp
      .src(options.src + "/styles/index.scss")
      .pipe($.sourcemaps.init())
      .pipe($.debug())
      .pipe($.sass().on('error', $.sass.logError))
      .pipe($.autoprefixer())
      .pipe($.sourcemaps.write())
      .pipe(gulp.dest(options.tmp + "/serve/styles/"))
      .pipe(browserSync.reload({ stream: true}));

  });


}