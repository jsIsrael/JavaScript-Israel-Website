var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'browser-sync', 'del'],
  rename: {
    'gulp-util': 'gutil',
    'gulp-gh-pages-cname': 'ghPages'
  }
});

var gulp_src = gulp.src;

gulp.src = function(){
  return gulp_src.apply(gulp, arguments)
    .pipe(plugins.plumber(function(error){
                     plugins.gutil.log(plugins.gutil.colors.red('Error (' + error.plugin + '): ' + error.message));
                     this.emit('end');
                   }))
}

//
//function errorHandler(title){
//  return function(err){
//    gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
//    this.emit('end');
//  }
//}

var config = {
  src: 'src',
  tmp: '.tmp',
  dist: 'dist',
  publish: '.publish'
  //errorHandler: errorHandler
}

require('gulp-autoload-tasks')(gulp, plugins, config);

