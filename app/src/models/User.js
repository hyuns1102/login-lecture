"use strict";

const UserStorage = require("./UserStorage");
class User {
  constructor(body) {
    this.body = body;
  }

  login() {
    const { id, pwd } = UserStorage.getUsers("id", "pwd");
    console.log(id, pwd);
  }
}

module.exports = User;
