'use strict';

var gulp = require('gulp');
var upYunDest = require('gulp-upyun').upyunDest;
console.log(process.env.upYunJSbin);

gulp.task('default', function() {

  gulp.src('public/**/*')
      .pipe(upYunDest(process.env.upYunJSbin, {
        username: process.env.upYunUser,
        password: process.env.upYunPwd,
        verbose: true,
        mkdir: true
      }));
});