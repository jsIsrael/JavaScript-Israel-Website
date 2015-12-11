module.exports = function(gulp, plugins, config){

  gulp.task('watch', function(){

    // watch html
    gulp.watch(config.src + "/**/*.js", function(event){
      plugins.browserSync.reload();
    });

    gulp.watch(config.src + "/**/*.scss", ['styles']);

    gulp.watch(config.src + "/*.html", plugins.browserSync.reload);

  })

}