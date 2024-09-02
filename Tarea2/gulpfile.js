const gulp = require('gulp');
const replace = require('gulp-replace');
const sass = require('gulp-sass')(require('sass'));
const cleanCss = require('gulp-clean-css');
const concat = require('gulp-concat');

gulp.task('html:dev', () => {
  return gulp.src('src/*.html').pipe(gulp.dest('dist'));
});

gulp.task('html', () => {
  return gulp
    .src('src/*.html')
    .pipe(replace('styles.css', 'styles.min.css'))
    .pipe(gulp.dest('dist'));
});

gulp.task('styles', () => {
  return gulp
    .src('src/sass/**/*.scss')
    .pipe(sass())
    .pipe(cleanCss())
    .pipe(concat('styles.min.css'))
    .pipe(gulp.dest('dist/styles'));
});

gulp.task('styles:dev', () => {
  return gulp
    .src('src/sass/**/*.scss')
    .pipe(sass())
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('dist/styles'));
});

gulp.task('dev', gulp.series('styles:dev', 'html:dev'));

gulp.task('default', gulp.parallel('styles', 'html'));
