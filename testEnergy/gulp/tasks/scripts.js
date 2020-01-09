module.exports = function() {
  $.gulp.task("page:dev", () => {
    return $.gulp
      .src(["./src/static/js/libs.min.js", "./src/static/js/main.js",])
      .pipe($.gp.concat("main.min.js"))
      .pipe($.gulp.dest("./build/static/js/pages/"))
      .pipe(
        $.browserSync.reload({
          stream: true
        })
      );
  });
  $.gulp.task("libJ:dev", () => {
    return $.gulp
      .src("./src/static/js/libJ/*.js")
			.pipe($.gp.concat("libs.min.js"))
			.pipe($.gp.uglifyjs())
      .pipe($.gulp.dest("./src/static/js"));
  });
  $.gulp.task("libsJS:build", () => {
    return $.gulp
      .src("./src/static/js/**/*.js")
      .pipe($.gp.concat("libs.min.js"))
      .pipe($.gp.uglifyjs())
      .pipe($.gulp.dest("./build/static/js/"));
  });

  $.gulp.task("js:copy", () => {
    return $.gulp
      .src(["./src/static/js/main.js", "./src/static/js/libs.min.js"])
      .pipe($.gulp.dest("./build/static/js/"))
      .pipe(
        $.browserSync.reload({
          stream: true
        })
      );
  });
};
