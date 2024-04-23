const path = require('path')
const gulp = require('gulp')
const clean = require('gulp-clean')
const connect = require('gulp-connect')
const os = require('os')
const open = require('gulp-open')
const pug = require('gulp-pug')
const less = require('gulp-less')
const LessAutoPrefix = require('less-plugin-autoprefix')
const autoprefixer = new LessAutoPrefix({ browsers: ['last 2 versions'] })
const cssmin = require('gulp-cssmin')
const rename = require('gulp-rename')
const sourcemaps = require('gulp-sourcemaps')
const run = require('gulp-run')

/* ==================== 清理相关 gulp 任务 ==================== */
const cleanHtml = () => {
  return gulp
    .src('./docs/**/*.html', {
      allowEmpty: true
    })
    .pipe(clean())
}

const cleanStyle = () => {
  return gulp
    .src('./docs/css/*.css', {
      allowEmpty: true
    })
    .pipe(clean())
}

const cleanScript = () => {
  return gulp
    .src('./docs/js/**.js', {
      allowEmpty: true
    })
    .pipe(clean())
}

const cleanDocs = gulp.parallel(cleanHtml, cleanStyle, cleanScript)

/* ==================== 代码规范校验相关的 gulp 任务 ==================== */
const lint = () => {
  return run('npm run lint:fix').exec()
}

const check = () => {
  return run('npm run prettier:write').exec()
}

const test = gulp.series(lint, check)

/* ==================== 编译代码的 gulp 任务 ==================== */
const buildApiPug = () => {
  return gulp
    .src(['api/pug/index.pug'])
    .pipe(
      pug({
        verbose: true
      })
    )
    .pipe(gulp.dest('docs'))
}

const buildStyle = () => {
  return gulp
    .src(['./api/less/docs.less'])
    .pipe(sourcemaps.init())
    .pipe(
      less({
        paths: [path.join(__dirname, 'less', 'includes')],
        plugins: [autoprefixer]
      })
    )
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./docs/css'))
}

const minifyStyle = () => {
  return gulp
    .src('./docs/**/docs.css')
    .pipe(sourcemaps.init())
    .pipe(cssmin())
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./docs'))
}

const buildApiStyle = gulp.series(buildStyle, minifyStyle)

const buildApiScript = () => {
  return run('npm run build:api:script').exec()
}

const buildApi = gulp.series(
  cleanDocs,
  buildApiPug,
  buildApiStyle,
  buildApiScript
)

const build = gulp.series(test, cleanDocs, buildApi)

/* ==================== 文档查看相关的 gulp 任务 ==================== */
const openDocs = () => {
  let browser
  if (os.platform() === 'darwin') {
    browser = os.platform() === 'linux' ? 'google-chrome' : 'google chrome'
  } else {
    browser = os.platform() === 'linux' ? 'google-chrome' : 'chrome'
  }
  return gulp.src('docs/index.html').pipe(
    open({
      app: browser,
      uri: 'http://localhost:10481'
    })
  )
}

const connectDocs = () => {
  return connect.server({
    root: 'docs',
    port: 10481,
    livereload: true
  })
}

const start = gulp.series(build, connectDocs, openDocs)

// 导出公共方法
module.exports.start = start
module.exports.clean = cleanDocs
module.exports.buildApi = buildApi
module.exports.buildApiStyle = buildApiStyle
module.exports.buildApiPug = buildApiPug
module.exports.build = build
module.exports.lint = lint
module.exports.check = check
