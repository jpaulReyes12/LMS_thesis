var gulp = require('gulp'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    sassy = require('gulp-sass'),
    plumber = require('gulp-plumber'),
    server = require('gulp-server-livereload');

gulp.task('webserver', function() {
  gulp.src('.')
    .pipe(server({
      livereload: true,
      directoryListing: true,
      open: true
    }));
});


//Compiles all scripts as one and minifies it
gulp.task('scripts', function(){
    return gulp.src(['js/*.js', 'js/**/*.js'])
        .pipe(plumber())
        .pipe(concat('main.js'))
				.pipe(gulp.dest('lib'))
				.pipe(rename('main.min.js'))
				.pipe(uglify())
        .pipe(gulp.dest('lib'));
});

//compile sass files
gulp.task('styles', function() {
  return gulp.src('style/sass/*.sass')
    .pipe(plumber())
    .pipe(sassy({outputStyle: 'nested'}))
    .pipe(gulp.dest('style'));
})

//watches JS files
gulp.task('watch', function() {
	gulp.watch(['js/*.js', 'js/**/*.js'], ['scripts']);
  gulp.watch('style/sass/*.sass', ['styles']);
});

gulp.task('default', ['scripts', 'styles', 'watch']);
