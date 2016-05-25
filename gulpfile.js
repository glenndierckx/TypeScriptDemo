var gulp = require("gulp"),
less = require("gulp-less"),
livereload = require("gulp-livereload"),
cleanCSS = require("gulp-clean-css");
var lessFiles = ["./less/**/*.less"];
gulp.task("less", function() {
	return gulp.src(lessFiles)
	.pipe(less())
	.pipe(cleanCSS())
	.pipe(gulp.dest("./public/stylesheets/"))
	.pipe(livereload());
});
gulp.task("default", ["less"], function() {
	livereload.listen();
	gulp.watch(lessFiles, ["less"])
});