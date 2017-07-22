"use strict";

const gulp = require("gulp");
const glob = require("glob");
const babel = require("gulp-babel");
const babelify = require("babelify");
const browserify = require("browserify");
const source = require("vinyl-source-stream");
const buffer = require("vinyl-buffer");
const sourcemaps = require("gulp-sourcemaps");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const vueify = require("vueify");
const nodemon = require("gulp-nodemon");
const sass = require("gulp-sass");
const cleanCSS = require("gulp-clean-css");

gulp.task("sass:watch", function () {
    gulp.watch("./src/app/components/sass/**/*.scss", ["build:css"]);
});

gulp.task("build:css", function() {
    return gulp.src("src/app/components/sass/app.scss")
        .pipe(sourcemaps.init())
        .pipe(sass().on("error", sass.logError))
        .pipe(cleanCSS())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("public/css"));
});

gulp.task("build:js", function() {
    return gulp.src("src/**/*.js")
        .pipe(babel({
            presets: ["env"]
        }))
        .pipe(gulp.dest("dist"));
});

gulp.task("build:js:public", function() {
    return browserify("./src/app/code/main.js")
        .require("./node_modules/vue/dist/vue.js", {
            expose: "vue",
        })
        .transform(vueify)
        .transform(babelify, {
            sourceMaps: true,
            babelrc: false,
            presets: [
                require("babel-preset-es2015")
            ],
        }).bundle()
        .pipe(source("./public/js/app.js"))
        .pipe(buffer())
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("."));
});

gulp.task("build:templates", function() {
    return gulp.src("src/app/components/templates/index.html")
        .pipe(gulp.dest("public"));
});

gulp.task("build", ["build:templates", "build:css", "build:js:public", "build:js"]);

gulp.task("devserver", ["build", "sass:watch"], function () {
    return nodemon({
        script: "dist/server.js",
        watch: "src",
        tasks: ["build"]
    });
});
