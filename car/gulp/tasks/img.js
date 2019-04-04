module.exports = function() {
  $.gulp.task("img:dev", () => {
    return $.gulp
      .src([
        "./src/static/images/**/*.{png,jpg,gif}",
        "!./src/static/images/svg/*.svg"
      ])
      .pipe($.gulp.dest("./build/static/images/"));
  });

  $.gulp.task("img:build", () => {
    return $.gulp
      .src("./src/static/img/**/*.{png,jpg,gif}")
      .pipe(
        imagemin([
          imagemin.jpegtran({ progressive: true }),
          imagemin.optipng({ optimizationLevel: 5 })
        ])
      )
      .pipe($.gulp.dest("./build/static/images/"));
  });

  $.gulp.task("svg:copy", () => {
    return $.gulp
      .src("./src/static/images/svg/*.svg")
      .pipe($.gulp.dest("./build/static/images/svg/"));
  });
};
