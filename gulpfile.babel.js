/**
 *
 *  Web Starter Kit
 *  Copyright 2015 Google Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */

'use strict';

// This gulpfile makes use of new JavaScript features.
// Babel handles this without us having to do anything. It just works.
// You can read more about the new JavaScript features here:
// https://babeljs.io/docs/learn-es2015/

import gulp from 'gulp';
import browserSync from 'browser-sync';
import gulpLoadPlugins from 'gulp-load-plugins';

const $ = gulpLoadPlugins();
const reload = browserSync.reload;

// Compile and automatically prefix stylesheets
gulp.task('styles', () => {
  const AUTOPREFIXER_BROWSERS = [
    'ie >= 10',
    'ie_mob >= 10',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 7',
    'opera >= 23',
    'ios >= 7',
    'android >= 4.4',
    'bb >= 10'
  ];

  // For best performance, don't add Sass partials to `gulp.src`
  return gulp.src([
    'scss/main.scss',
  ])
    .pipe($.sourcemaps.init())
    .pipe($.sass({
      precision: 10,
      includePaths: [
        './public/components/bootstrap-sass/assets/stylesheets',
      ]
    }).on('error', $.sass.logError))
    .pipe($.autoprefixer(AUTOPREFIXER_BROWSERS))
    // Concatenate and minify styles
    .pipe($.if('*.css', $.cssnano()))
    .pipe($.size({title: 'styles'}))
    .pipe($.sourcemaps.write('./'))
    .pipe(gulp.dest('public/css/dist'))
});

// Concatenate and minify JavaScript.
gulp.task('scripts', () =>
    gulp.src([
      // Note: Since we are not using useref in the scripts build pipeline,
      //       you need to explicitly list your scripts here in the right order
      //       to be correctly concatenated
      './public/js/main.js'
      // Other scripts
    ])
      .pipe($.sourcemaps.init())
      .pipe($.sourcemaps.write())
      .pipe($.concat('main.min.js'))
      .pipe($.uglify({preserveComments: 'some'}))
      // Output files
      .pipe($.size({title: 'scripts'}))
      .pipe($.sourcemaps.write('.'))
      .pipe(gulp.dest('public/js/dist'))
);

// Start app
gulp.task('nodemon', (cb) => {
  $.nodemon({
    scripts: './bin/www',
    ignore: [
      '.git',
      'node_modules/**/node_modules',
      'public',
      'scss',
      'views'
    ],
    ext: 'js json'
  })
  .on('start', cb)
  .on('error', (err) => {
    throw err;
  });
});

// Watch files for changes & reload
gulp.task('serve', ['scripts', 'styles', 'nodemon'], () => {
  browserSync({
    notify: false,
    // Customize the Browsersync console logging prefix
    logPrefix: 'WSK',
    // Allow scroll syncing across breakpoints
    scrollElementMapping: ['main', '.mdl-layout'],
    // Run as an https by uncommenting 'https: true'
    // Note: this uses an unsigned certificate which on first access
    //       will present a certificate warning in the browser.
    // https: true,
    // server: ['.tmp', 'app'],
    proxy: 'http://127.0.0.1:9000',
    port: 3000
  });

  gulp.watch(['public/css/**/*.css', '!public/css/dist/**/*.css'], reload);
  gulp.watch(['views/**/*.hbs'], reload);
  gulp.watch(['scss/**/*.{scss,css}'], ['styles', reload]);
  gulp.watch(['public/js/*.js'], ['scripts', reload]);
  gulp.watch(['public/images/**/*'], reload);
});

gulp.task('default', ['serve']);
