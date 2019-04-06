//CREATED BY SHARKBYTEPROJECTS
const { src, dest, parallel, task } = require('gulp');
const rename = require('gulp-rename');
const fileroot = "optfiles/"
task ('test', () => {
  return src(fileroot + 'main.js')
    .pipe(concat('all.js'))
});