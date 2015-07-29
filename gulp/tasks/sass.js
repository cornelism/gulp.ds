/*jslint node: true */
'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
var globbing = require('gulp-css-globbing');
var sourcemaps = require('gulp-sourcemaps');
var livereload = require('gulp-livereload');
var handleErrors = require('../util/handleErrors');
var config = require('../config').sass;

gulp.task('sass', ['images'], function () {
  gulp.src(config.src)
    .pipe(globbing({
      // Configure it to use SCSS files
      extensions: ['.scss']
    }))
    .pipe(sass.sync().on('error', sass.logError))

    .pipe(gulp.dest(config.dest))
    .pipe(livereload())
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write('./'));
});
