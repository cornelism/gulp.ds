var gulp = require('gulp');
var iconfont = require('gulp-iconfont');
var iconfontCss = require('gulp-iconfont-css');
var config = require('../config').iconfont;

gulp.task('iconfont', function(){
  gulp.src([config.src])
    .pipe(iconfontCss({
      path:'scss',
      fontName: config.fontName,
      targetPath: config.sass,
      fontPath: '../fonts/'
    }))
    .pipe(iconfont({
      fontName: config.fontName // required
    }))
    .pipe(gulp.dest(config.dest));
});