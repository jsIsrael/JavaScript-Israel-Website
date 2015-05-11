var gulp = require('gulp');
var gutil = require('gulp-util');
var wrench = require('wrench');
var plumber = require('gulp-plumber');


var gulp_src = gulp.src;

gulp.src = function(){
  return gulp_src.apply(gulp, arguments)
    .pipe(plumber(function(error){
                     gutil.log(gutil.colors.red('Error (' + error.plugin + '): ' + error.message));
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

var options = {
  src: 'src',
  tmp: '.tmp',
  dist: 'dist'
  //errorHandler: errorHandler
}

wrench.readdirSyncRecursive('./gulp')
  .filter(function(file){
    return (/\.js$/i).test(file);
  })
  .map(function(file){
        require('./gulp/' + file)(options);
   });

