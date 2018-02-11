// Libraries
const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');

// Source files
const sourceJs = [
	'./dev/bower_components/jquery/dist/jquery.min.js',
	'./dev/js/**.js'
];

// Generate styles.css
gulp.task('sass', function() {
	return gulp.src('./dev/styles/main.scss')
		.pipe(sass())
		.pipe(concat('styles.css'))
		.pipe(gulp.dest('./public/css'));
});

// Generate sripts.js
gulp.task('js', function() {
	return gulp.src(sourceJs)
		.pipe(concat('scripts.js'))
		.pipe(gulp.dest('./public/js'));
});

// Watch for changes to files
gulp.task('watch', function() {
    gulp.watch(["./dev/styles/*.scss"], ['sass']);
    gulp.watch(["./dev/js/*.js"], ['js']);
});

// Default task
gulp.task('default', ['sass', 'js', 'watch']);