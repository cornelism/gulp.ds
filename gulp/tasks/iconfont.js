/*jslint node: true */
'use strict';
var gulp = require('gulp');
var iconfont = require('gulp-iconfont');
var iconfontCss = require('gulp-iconfont-css');
var config = require('../config').iconfont;
var runTimestamp = Math.round(Date.now() / 1000);

gulp.task('iconfont', function () {
  gulp.src([config.src])
    .pipe(iconfontCss({
      path: 'scss',
      fontName: config.fontName,
      targetPath: config.sass,
      fontPath: '../fonts/'
    }))
    .pipe(iconfont({
      fontName: config.fontName, // required
      appendUnicode: true, // recommended option 
      timestamp: runTimestamp // recommended to get consistent builds when watching files
    }))
    .pipe(gulp.dest(config.dest));
});