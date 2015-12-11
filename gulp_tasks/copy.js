module.exports = function(gulp, plugins, config){

  gulp.task('copy', function(){
    return gulp
      .src([config.src + '/**/*',
            '!' + config.src + '/**/*.scss',
            config.tmp + '/serve/**/*'])
      .pipe(gulp.dest(config.dist));
  });

}