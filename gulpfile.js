'use strict';

//Dependencies
var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var changed = require('gulp-changed');

//SCSS/CSS Gulp Compiler Stuff
var SCSS_SRC = './src/Assets/scss/**/*.scss'; //SOURCE
var SCSS_DEST = './src/Assets/css'; //DESTINATION

//Compile SCSS on the fly
gulp.task('compile_scss', function(){

  //SRC file
  gulp.src(SCSS_SRC)
  .pipe(sass().on('error', sass.logError)) //Start SASS
  .pipe(minifyCSS()) //Minify CSS
  .pipe(rename({ suffix: '.min' })) //ADD suffix to ouput
  .pipe(changed(SCSS_DEST))
  .pipe(gulp.dest(SCSS_DEST));//Show Destination
});


//Detect Changes In SCSS
gulp.task('watch_scss', function() {
  gulp.watch(SCSS_SRC, ['compile_scss']);//If SCSS changes, run compile_scss
});


//Run Tasks
gulp.task('default', ['watch_scss']);
