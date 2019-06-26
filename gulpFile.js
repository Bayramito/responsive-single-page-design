const gulp = require('gulp');
const sass = require('gulp-sass');
const minifyCSS = require('gulp-csso');
const minifyImg = require('gulp-imagemin');
const minifyJS = require('gulp-uglify');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const del = require('del');
const runSequence = require('run-sequence');
const browserSync = require('browser-sync').create();

/*==========================================================================
  Browser Sync
==========================================================================*/
gulp.task('browser-sync', () => {
    browserSync.init({
        server: {
            baseDir: 'public'
        }
    });
});

/*==========================================================================
  Compile CSS
==========================================================================*/
gulp.task('css', () => {
    return gulp.src('src/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(minifyCSS())
        .pipe(autoprefixer())
        .pipe(concat('app.min.css'))
        .pipe(gulp.dest('public/css'))
        .pipe(browserSync.stream());
});

/*==========================================================================
  Compile JS
==========================================================================*/
gulp.task('js', () => {
    return gulp.src('src/js/**/*.js')
        .pipe(concat('app.min.js'))
        .pipe(minifyJS())
        .pipe(gulp.dest('public/js'))
        .pipe(browserSync.stream());
});


/*==========================================================================
  Compile Images
==========================================================================*/
gulp.task('img', () => {
    return gulp.src('src/img/*')
        .pipe(minifyImg())
        .pipe(gulp.dest('public/img'));
});

/*==========================================================================
  Delete Task
==========================================================================*/
gulp.task('delete', () => del(['public/css', 'public/js', 'public/img']));

/*==========================================================================
  Watcher
==========================================================================*/
gulp.task('watch', () => {
    gulp.watch('src/img/**/*', ['img']);
    gulp.watch('src/js/**/*.js', ['js']);
    gulp.watch('src/sass/**/*.scss', ['css']);
});

/*==========================================================================
  Run Sequence
==========================================================================*/
gulp.task('default', () => {
    runSequence(
        'delete',
        'css',
        'js',
        'img',
        'browser-sync',
        'watch'
    )
});