"use strict";

const express = require("express");
const app = express();

// app setting
app.set("views", "./src/views");
app.set("view engine", "ejs"); // view engine을 ejs로 쓴다.

const home = require("./src/routes/home");
app.use(express.static(`${__dirname}/src/public`));
app.use("/", home);
// use -> 미들 웨어를 등록해주는 메서드  home에 있는 파일을 쓸 수 있게 해준다.

module.exports = app; //app을 밖에서 사용 가능하도록 내보내준다.
