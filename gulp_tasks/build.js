module.exports = function(gulp, plugins, config){

  gulp.task('build', function(cb){
    plugins.sequence('clean', 'copy')(cb);
  } );

}