module.exports = function(gulp, plugins, config){

  gulp.task('serve', ['watch'], function(){

    var server = {
      baseDir: [config.tmp + '/serve', config.src],
      routes: {'/bower_components': 'bower_components'}
    }

    plugins.browserSync.instance = plugins.browserSync.init({
      startPath: '/',
      server: server,
      browser: 'default'
    });

  });
}