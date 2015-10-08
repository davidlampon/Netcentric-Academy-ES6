// NODE PACKAGES
var gulp = require('gulp');
var lrserver = require('tiny-lr');
var livereload = require('gulp-livereload');
var connect = require('connect');
var plumber = require('gulp-plumber');
var babel = require('gulp-babel');

// VARIABLES
var WEB_PORT = 9000;
var lrs = lrserver();

// LIVE RELOAD
gulp.task('lr-server', function() {
    lrs.listen(35729, function(err) {
        if (err) return console.log(err);
    });
});

// BABELIZE
gulp.task('babel', function(){
    return gulp
      .src('exercises/es6/**/*.js')
      .pipe(plumber())
      .pipe(babel())
      .pipe(plumber.stop())
      .pipe(gulp.dest('exercises/es5'));
});

// WATCHERS
gulp.task('vigilante', ['lr-server'], function() {
    var browserFiles = ['exercises/**/*.html', 'exercises/es5/**/*.js'];

    gulp.watch(['exercises/es6/**/*.js'], ['babel']);
    gulp.watch(browserFiles, function() {
        console.log('Files changed. Reloading...');
        gulp.src(browserFiles)
        .pipe(livereload(lrs));
    });
});

// HTTP SERVER
gulp.task('server', ['babel', 'vigilante'], function() {
    connect()
    .use(require('connect-livereload')())
    .use(connect.static('exercises'))
    .use(connect.static('bower_components'))
    .listen(WEB_PORT);
    console.log('Server listening on http://localhost:' + WEB_PORT);
});

// DEFAULT TASK
gulp.task('default', ['server']);
