module.exports = function(gulp, plugins, config){

  gulp.task('clean', function(cb){
    plugins.del([
      config.tmp,
      config.dist,
      config.publish
    ], cb);
  });

}