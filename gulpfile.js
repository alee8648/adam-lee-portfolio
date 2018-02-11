// Libraries
const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const handlebars = require('gulp-compile-handlebars');

// Source files
const sourceJs = [
	'./dev/bower_components/jquery/dist/jquery.min.js',
	'./dev/js/**.js'
];
const sourceSass = [
	'./dev/styles/main.scss'
];
const content = require('./dev/content/content.js');

// Generate styles.css
gulp.task('sass', function() {
	return gulp.src(sourceSass)
		.pipe(sass())
		.pipe(concat('styles.css'))
		.pipe(gulp.dest('./public/css'));
});

// Generate scripts.js
gulp.task('js', function() {
	return gulp.src(sourceJs)
		.pipe(concat('scripts.js'))
		.pipe(gulp.dest('./public/js'));
});

// Generate template files using handlebars
gulp.task('templates', function() {
    const options = {
        batch : ['./dev/templates/partials']

    };
 
    return gulp.src('./dev/templates/index.handlebars')
        .pipe(handlebars(content, options))
        .pipe(rename('index.html'))
        .pipe(gulp.dest('./public'));
});

// Watch for changes to files
gulp.task('watch', function() {
    gulp.watch(["./dev/styles/*.scss"], ['sass']);
    gulp.watch(["./dev/js/*.js"], ['js']);
    gulp.watch(["./dev/templates/**/*.handlebars"], ['templates']);
});

// Default task
gulp.task('default', ['sass', 'js', 'templates', 'watch']);