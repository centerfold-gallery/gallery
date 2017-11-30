var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var compass = require('gulp-compass');
var autoprefixer = require('gulp-autoprefixer');
var livereload = require('gulp-livereload');

gulp.task('compass', function() {
  gulp.src('./stylesheets/*.scss')
    .pipe(compass({
      config_file: './config.rb',
      css: 'stylesheets/css',
      sass: 'stylesheets/sass'
    }))
    .pipe(gulp.dest('./stylesheets/'));
});

gulp.task('html',function(){
    return gulp.src('views/**/*.html')
    .pipe(livereload());
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('./stylesheets/**/*.scss', ['compass']);
    gulp.watch('views/**/*.html', ['html']);
});

gulp.task('server',function(){
    nodemon({
        'script': 'index.js'
    });
});

gulp.task('serve', ['server','watch']);
