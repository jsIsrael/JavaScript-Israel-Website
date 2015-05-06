var gulp = require('gulp');

module.exports = function(options){

  gulp.task('build', function(){

    gulp.src([options.src + "/**/*.*"])
      .pipe(gulp.dest(options.dist));
  });


}