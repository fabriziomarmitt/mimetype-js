var gulp = require('gulp');
var concat = require('gulp-concat');
var coffee = require('gulp-coffee');

gulp.task('default', ['coffee'], function(callback){
  return true;
});

gulp.task('coffee', function () {
    return gulp.src('./src/coffee/**/*.coffee')
      .pipe(coffee({ bare: true }))
      .pipe(concat('mimetype.js'))
      .pipe(gulp.dest("./"));
});

gulp.task('watch', function() {
  gulp.watch(['./src/**/*.coffee', paths.coffee], ['coffee']);
});
