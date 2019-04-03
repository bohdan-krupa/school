let gulp        = require('gulp');
let	sass        = require('gulp-sass');
let exec        = require('child_process').exec;
let	browserSync = require('browser-sync').create();

let	path = {
	html: ['**/*.html', 'src/js/**/*.js'],
	sass: ['src/scss/**/*.scss']
};

gulp.task('sass', () => {
	return gulp.src(path.sass)
	// {outputStyle: 'compressed'}
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('src/css/'));
});

gulp.task('browser-sync', () => {
	browserSync.init({
		server: {
			baseDir: './'
		}
	});
});

gulp.task('reload', ['sass'], () => {
	browserSync.reload();
});

gulp.task('watch', ['sass'], () => {
	gulp.watch([path.html, path.sass], ['reload']);
});

gulp.task('git-update', () => {
	setInterval(() => {
		exec('git add .', (err, stdout, stderr) => {
			console.log(stdout, stderr);

			exec('git commit -m "update"', (err, stdout, stderr) => {
				console.log(stdout, stderr);

				exec('git push -u origin master', (err, stdout, stderr) => {
					console.log(stdout, stderr);
				});
			});
		});
	}, 300000)
})

gulp.task('default', ['browser-sync', 'watch', 'git-update']);