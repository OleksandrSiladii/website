'use strict';

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');
var cssnano = require('gulp-cssnano');
var browserSync = require('browser-sync').create();

var paths = {
    css: ['assets/css/**/*.css'],
    js: ['assets/js/*.js'],
    jsWatch: ['assets/js/scripts/**/*.js', 'assets/js/scripts/**/*.min.js'],
    scss: ['assets/scss/**/*.scss'],
};

gulp.task('scss', function () {
    return gulp.src(paths.scss)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('assets/css'))
        .pipe(browserSync.stream());
});

gulp.task('css:minify', function () {
    return gulp.src(paths.css)
        .pipe(cssnano())
        .pipe(postcss([autoprefixer({browsers: ['ie >= 8', 'last 4 versions']})]))
        .pipe(gulp.dest('assets/css'));
});

gulp.task('js', function () {
    return gulp.src(paths.jsWatch)
        .pipe(plumber())
        .pipe(concat('main.js'))
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(gulp.dest('assets/js'))
        .pipe(browserSync.stream());
});

gulp.task('js:minify', function () {
    return gulp.src(paths.js)
        .pipe(uglify())
        .pipe(gulp.dest('assets/js'));
});

gulp.task('serve', ['scss', 'js'], function () {
    browserSync.init({
        server: "./assets/",
        notify: false,
        open: true,
        cors: true,
        ui: false
    });

    gulp.watch(paths.scss, ['scss']);
    gulp.watch(paths.jsWatch, ['js']);

    gulp.watch("./assets/*.html").on("change", browserSync.reload);
});

gulp.task('build', ['css:minify', 'js:minify'], function () {
    return (
        gulp.src('assets/*.html').pipe(gulp.dest('production/')),
        gulp.src('assets/css/*.css').pipe(gulp.dest('production/css')),
        gulp.src('assets/js/libs/**/*').pipe(gulp.dest('production/js/libs')),
        gulp.src('assets/js/*.js').pipe(gulp.dest('production/js')),
        gulp.src('assets/fonts/**/*').pipe(gulp.dest('production/fonts')),
        gulp.src('assets/images/**/*.+(png|jpg|jpeg|gif|svg)').pipe(gulp.dest('production/images'))
    );
});
