"user strict";

class UserStorage {
  static #users = {
    id: ["hyunsoo", "rlagustn", "gustn"],
    pwd: ["1234", "5678", "9012"],
    name: ["hi", "hello", "bye"],
  };
  // 외부에서 불러올 수 없도록 은닉화 해야한다.

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }
}

module.exports = UserStorage;
