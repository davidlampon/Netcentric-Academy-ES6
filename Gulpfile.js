// NODE PACKAGES
var gulp = require('gulp');
var lrserver = require('tiny-lr');
var livereload = require('gulp-livereload');
var connect = require('connect');
var babel = require('gulp-babel');

// VARIABLES
var WEB_PORT = 9000;
var lrs = lrserver();

// MODULE
var module = "001";

// LIVE RELOAD
gulp.task('lr-server', function() {
    lrs.listen(35729, function(err) {
        if (err) return console.log(err);
    });
});

// BABELIZE
gulp.task('babel', function(){
    return gulp
      .src('module' + module + '/es6/**/*.js')
      .pipe(babel())
      .pipe(gulp.dest('module' + module + '/es5'));
});

// WATCHERS
gulp.task('vigilante', ['lr-server'], function() {
    var browserFiles = ['module' + module + '/**/*.html', 'module' + module + '/es5/**/*.js'];

    gulp.watch(['module' + module + '/es6/**/*.js'], ['babel']);
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
    .use(connect.static('module' + module))
    .use(connect.static('bower_components'))
    .listen(WEB_PORT);
    console.log('Server listening on http://localhost:' + WEB_PORT);
});

// DEFAULT TASK
gulp.task('default', ['server']);
