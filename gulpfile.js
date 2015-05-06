var gulp = require('gulp');
var wrench = require('wrench');

var options = {
  src: 'src',
  dist: 'dist'
}

wrench.readdirSyncRecursive('./gulp')
  .filter(function(file){
    return (/\.js$/i).test(file);
  })
  .map(function(file){
        require('./gulp/' + file)(options);
   });

