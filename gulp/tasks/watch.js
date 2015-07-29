/*jslint node: true */
'use strict';
var gulp = require('gulp');
var livereload = require('gulp-livereload');
var config = require('../config');

gulp.task('watch', ['setWatch'], function () {
  livereload.listen();
  gulp.watch(config.sass.src, ['sass']);
  gulp.watch(config.images.src, ['images']);
  gulp.watch(config.iconfont.src, ['iconfont']);
  gulp.watch(config.fonts.src, ['fonts']);
  gulp.watch(config.browserify.src, ['browserify']);
});
