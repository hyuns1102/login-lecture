// 함수를 만들어서 콜백 시 사용가능하게 한다.
"use strict";

const hello = (req, res) => {
  res.render("home/index");
};

const login = (req, res) => {
  res.render("home/login");
};

// key : value 에서 value를 입력안한다면 key : key 로 받아진다.
// 밖에서 사용 가능하도록 한다.
module.exports = {
  hello,
  login,
};
