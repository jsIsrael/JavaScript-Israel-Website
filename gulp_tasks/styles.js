module.exports = function (gulp, plugins, config) {

  gulp.task('styles', function () {

    return gulp
      .src(config.src + "/styles/index.scss")
      .pipe(plugins.sourcemaps.init())
      .pipe(plugins.debug())
      .pipe(plugins.sass().on('error', plugins.sass.logError))
      .pipe(plugins.autoprefixer())
      .pipe(plugins.sourcemaps.write())
      .pipe(gulp.dest(config.tmp + "/serve/styles/"))
      .pipe(plugins.browserSync.reload({ stream: true}));

  });


}