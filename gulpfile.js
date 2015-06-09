'use strict';

var gulp = require('gulp');
var qnUpload = require('gulp-qndn').upload;

gulp.task('default', function() {
  return gulp.src('public/**/*')
      .pipe(qnUpload({
        prefix: 'jsbin',
        qn: {
          accessKey: process.env.qnAK,
          secretKey: process.env.qnSK,
          bucket: process.env.qnBucketUIS,
          domain: process.env.qnDomainUIS
        }
      }));
});
