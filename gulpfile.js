//CREATED BY SHARKBYTEPROJECTS
const { src, dest, parallel, task } = require('gulp');
const nodeunit = require('gulp-nodeunit');
const eslint = require('gulp-eslint');
const fileroot = "./"
task ('test', () => {
  return src(fileroot + 'main.js')
  .pipe(eslint())
});
task ('nodeunit', () => {
    return src(fileroot + 'testunit.js')
    .pipe(nodeunit({
        reporter: 'junit',
        reporterOptions: {
            output: 'test'
        }
    }))
  });