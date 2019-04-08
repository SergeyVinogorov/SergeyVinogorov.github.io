module.exports = function() {
  $.gulp.task("watch", function() {
    $.gulp.watch("./src/pug/**/*.pug", $.gulp.series("pug"));
    $.gulp.watch("./src/static/sass/**/*.sass", $.gulp.series("styles:dev"));
    $.gulp.watch("./src/static/images/svg/*.svg", $.gulp.series("svg"));
    $.gulp.watch(
      "./src/static/js/page/main.js",
      $.gulp.series("page:dev", "js:copy")
    );
    $.gulp.watch(
      "./src/static/images/**/*.{png,jpg,gif}",
      $.gulp.series("img:dev")
    );
  });
};
