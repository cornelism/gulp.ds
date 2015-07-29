/*jslint node: true */
'use strict';
var gulp = require('gulp');
var iconfont = require('gulp-iconfont');
var iconfontCss = require('gulp-iconfont-css');
var del = require('del');
var config = require('../config').iconfont;
var runTimestamp = Math.round(Date.now() / 1000);

gulp.task('iconfont', function () {
  del([
    config.dest + '/' + config.fontName + '*',
    config.destBuild + '/' + config.fontName + '*'
  ]);
  gulp.src([config.src])
    .pipe(iconfontCss({
      path: 'scss',
      fontName: config.fontName + runTimestamp,
      targetPath: config.sass,
      fontPath: '../fonts/'
    }))
    .pipe(iconfont({
      fontName: config.fontName + runTimestamp, // required
      appendUnicode: true, // recommended option 
      timestamp: runTimestamp // recommended to get consistent builds when watching files
    }))
    .pipe(gulp.dest(config.dest));
});