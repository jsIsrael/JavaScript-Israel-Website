module.exports = function(gulp, plugins, config){

  gulp.task('deploy', ['build'], function(){
    gulp.src(config.dist + "/**/*")
      .pipe(plugins.ghPages({cname: "www.jsisrael.com"}));
  });

}