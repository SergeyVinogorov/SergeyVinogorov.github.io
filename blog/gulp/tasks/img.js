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
      .src("./src/static/images/**/*.{png,jpg,gif}")
      .pipe(
        $.gp.imagemin([
          $.gp.imagemin.jpegtran({ progressive: true }),
          $.gp.imagemin.optipng({ optimizationLevel: 5 })
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
