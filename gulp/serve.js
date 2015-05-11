var gulp = require('gulp');
var browserSync = require('browser-sync');


module.exports = function(options){

  gulp.task('serve', ['watch'], function(){

    var server = {
      baseDir: [options.tmp + '/serve', options.src],
      routes: {'/bower_components': 'bower_components'}
    }

    browserSync.instance = browserSync.init({
      startPath: '/',
      server: server,
      browser: 'default'
    });




  });


}