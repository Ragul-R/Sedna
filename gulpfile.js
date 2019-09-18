var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var autoPrefixer = require('gulp-autoprefixer');

//Compile sass
function scss(){
    return gulp.src('./scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream());
}

function minify(){
    return gulp.src('./css/main.css')
        .pipe(autoPrefixer({
            cascade: false
        }))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('./css'));
}

function watch(){
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./scss/**/*.scss', scss);
    gulp.watch('./css/*.css',minify);
    gulp.watch('./index.html').on('change',browserSync.reload);
    gulp.watch('./js/*.js').on('change',browserSync.reload);
}


exports.scss = scss;
exports.minify = minify;
exports.watch = watch;
