global.$ = {
  path: {
    task: require("./gulp/config/tasks.js")
  },
  gulp: require("gulp"),
  del: require("del"),
  fs: require("fs"),
  browserSync: require("browser-sync").create(),
  gp: require("gulp-load-plugins")()
};

$.path.task.forEach(function(taskPath) {
  require(taskPath)();
});

$.gulp.task(
  "dev",
  $.gulp.series(
    "clean",
    $.gulp.parallel(
      "styles:norm",
      "styles:dev",
      "pug",
      "page:dev",
      "js:copy",
      "svg",
      "img:dev",
      "fonts",
      "svg:copy"
    )
  )
);

$.gulp.task(
  "build",
  $.gulp.series(
    "clean",
    $.gulp.parallel(
      "styles:build",
      "pug",
      "libsJS:build",
      "js:copy",
      "svg",
      "img:build",
      "fonts",
      "svg:copy"
    )
  )
);

$.gulp.task("default", $.gulp.series("dev", $.gulp.parallel("watch", "serve")));
