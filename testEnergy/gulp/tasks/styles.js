module.exports = function() {
  $.gulp.task("styles:build", () => {
    return $.gulp
      .src("./src/static/sass/style.scss")
      .pipe(
        $.gp
          .sass({ outputStyle: "expanded" })
          .on("error", $.gp.notify.onError())
      )
      .pipe($.gp.rename({ suffix: ".min", prefix: "" }))
      .pipe(
        $.gp.autoprefixer({
          browsers: ["last 3 version"]
        })
      )
      .pipe($.gp.csscomb())
      .pipe($.gp.csso())
      .pipe($.gulp.dest("./build/static/css/"));
  });

  $.gulp.task("styles:dev", () => {
    return $.gulp
      .src("./src/static/sass/style.scss")
      .pipe($.gp.sourcemaps.init())
      .pipe(
        $.gp
          .sass({ outputStyle: "expanded" })
          .on("error", $.gp.notify.onError())
      )
      .pipe($.gp.sourcemaps.write())
      .pipe(
        $.gp.autoprefixer({
          browsers: ["last 3 version"]
        })
      )
      .pipe($.gulp.dest("./build/static/css/"))
      .pipe(
        $.browserSync.reload({
          stream: true
        })
      );
  });
  $.gulp.task("styles:norm", () => {
    return $.gulp
      .src("./src/normalize.css")
      .pipe($.gulp.dest("./build/static/css/"));
  });
};
