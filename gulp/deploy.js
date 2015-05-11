var gulp = require('gulp');
var ghPages = require('gulp-gh-pages-cname');

module.exports = function(options){

  gulp.task('deploy', ['build'], function(){
    gulp.src(options.dist + "/**/*")
      .pipe(ghPages({cname: "www.jsisrael.com"}));
  });


}