'use strict';

let gulp = require('gulp')
let babelify = require('babelify')
let browserify = require('browserify')
let buffer = require('vinyl-buffer')
let riotify = require('riotify')
let source = require('vinyl-source-stream')
let uglify = require('gulp-uglify')

// external libs
let VENDORS = [
    'riot',
    'moment'
];

gulp.task('app', () =>
    browserify({
        entries: ['src/app.js']
    })
    .external(VENDORS)
    .transform([riotify, {
        compact: true,
        type: 'babel'
    }])
    .transform(babelify) // @use babel presets from package.json
    .bundle()
    .pipe(source('app.min.js'))
    .pipe(buffer())
    .pipe(uglify({
        compress: {
            drop_console: true
        }
    }))
    .pipe(gulp.dest('dist/'))
)
