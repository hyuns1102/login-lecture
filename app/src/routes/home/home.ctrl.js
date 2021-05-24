// 함수를 만들어서 콜백 시 사용가능하게 한다.
"use strict";

const UserStorage = require("../../models/UserStorage");
const output = {
  home: (req, res) => {
    res.render("home/index");
  },

  login: (req, res) => {
    res.render("home/login");
  },
};

const process = {
  login: (req, res) => {
    const user = new User(req.body);
    const response = user.login();
    return res.json(response);
    // const id = req.body.id,
    //   pwd = req.body.pwd;

    // const users = UserStorage.getUsers("id", "pwd", "name");

    // const response = {};
    // if (users.id.includes(id)) {
    //   const idx = users.id.indexOf(id);
    //   if (users.pwd[idx] === pwd) {
    //     response.success = true;
    //     return res.json(response);
    //   }
    // }

    // response.success = false;
    // response.msg = "로그인에 실패했습니다.";
    // return res.json(response);
  },
};
// key : value 에서 value를 입력안한다면 key : key 로 받아진다.
// 밖에서 사용 가능하도록 한다.
module.exports = {
  output,
  process,
};
