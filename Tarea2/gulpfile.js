const gulp = require('gulp');
const replace = require('gulp-replace');
const sass = require('gulp-sass')(require('sass'));
const cleanCss = require('gulp-clean-css');
const concat = require('gulp-concat');
const tsc = require('gulp-typescript');
const copy = require('gulp-copy');

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

gulp.task('scripts', () => {
  return gulp
    .src('src/scripts/**/*.ts')
    .pipe(
      tsc({
        noImplicitAny: true,
        target: 'es6',
        isolatedModules: true,
      })
    )
    .pipe(replace(/(from\s+['"])(\.[^'"]+)/g, '$1$2.js'))
    .pipe(gulp.dest('dist/scripts'));
});

gulp.task('assets', () => {
  return gulp.src('src/assets/**/*').pipe(copy('dist', { prefix: 1 }));
});

gulp.task('dev', gulp.series('styles:dev', 'html:dev'));

gulp.task('default', gulp.parallel('styles', 'html', 'scripts', 'assets'));
