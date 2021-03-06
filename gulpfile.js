const gulp = require('gulp');
const alias = require('mycrypto-path-alias-resolver/gulp');

gulp.task('default', () => {
  return gulp
    .src(['./src/**/*.ts', '!./src/**/*.spec.ts'])
    .pipe(alias('.', { '@src': './src' }))
    .pipe(gulp.dest('./dist/lib'));
});
