var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var babel = require('gulp-babel');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var eslint = require('gulp-eslint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');

gulp.task('js', function() {
  return gulp.src(['src/js/vendor/*.js', 'src/js/*.js'])
    .pipe(concat('bundle.js'))
    .pipe(babel({ blacklist: ['useStrict'] }))
    .pipe(gulp.dest('.'));
});

gulp.task('scss', function () {
  return gulp.src('src/css/*.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest('.'))
    .pipe(reload({ stream: true }));
});

gulp.task('js-dist', ['js'] ,function () {
  return gulp.src('bundle.js')
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest('.'));
});

gulp.task('css-dist', ['scss'] ,function () {
  return gulp.src('styles.css')
    .pipe(minifyCss())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('.'));
});

gulp.task('lint', function () {
  return gulp.src('src/js/*.js')
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('serve', ['scss', 'js'], function() {
  browserSync({
    server: {
      baseDir: './',
      index: 'index.html'
    }
  });

  gulp.watch('src/css/*.scss', ['scss']);
  gulp.watch('src/js/*.js', ['js']);
});

gulp.task('dist', ['js-dist', 'css-dist']);
