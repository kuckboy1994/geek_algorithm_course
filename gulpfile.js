const { src, dest, series } = require("gulp");
const rename = require("gulp-rename");
const replace = require("gulp-replace");

const args = process.argv.slice(2);

function confirmParams(cb) {
  if (args[1] !== "--no") {
    throw new Error("参数错误");
  }

  cb();
}

function makeIntroduceFile() {
  const no = args[2];

  return src("./template/introduce.md")
    .pipe(rename(`${no}.md`))
    .pipe(dest("page"));
}

function makeJavascriptFile() {
  const no = args[2];

  return src("./template/emptyJavascript.js")
    .pipe(rename(`${no}.js`))
    .pipe(dest("source"));
}

function makeEntryFile() {
  const no = args[2];

  return src("./template/index.js").pipe(replace("NO", no)).pipe(dest("./"));
}

function outputInfo(cb) {
  const no = args[2];
  console.log(`${no}.md 文件创建成功`);
  console.log(`${no}.js 文件创建成功`);

  cb();
}

exports.make = series(
  confirmParams,
  makeIntroduceFile,
  makeJavascriptFile,
  makeEntryFile,
  outputInfo,
);
