"use strict";

const gulp = require("gulp");
const webp = require("gulp-webp");

gulp.task("default", () =>
  gulp
    .src("src/*.jpg")
    .pipe(webp())
    .pipe(gulp.dest("dist"))
);
