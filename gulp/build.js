var gulp = require('gulp');

module.exports = function(options){

  gulp.task('build', ['styles'], function(){

    gulp.src([options.src + '/**/*',
              '!' + options.src + '/**/*.scss',
              options.tmp + '/serve/**/*'])
      .pipe(gulp.dest(options.dist));
  });


}