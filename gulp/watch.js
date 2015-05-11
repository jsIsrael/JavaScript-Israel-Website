var gulp = require('gulp');
var browserSync = require('browser-sync');


module.exports = function(options){

  gulp.task('watch', function(){

    // watch html
    gulp.watch(options.src + "/**/*.js", function(event){
      browserSync.reload();
    });

    gulp.watch(options.src + "/**/*.scss", ['styles']);

    gulp.watch(options.src + "/*.html", browserSync.reload);

  })


}