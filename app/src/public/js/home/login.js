"use strict";

const id = document.querySelector("#id"),
  pwd = document.querySelector("#pwd"),
  loginBtn = document.querySelector("button");

function login() {
  const req = {
    id: id.value,
    pwd: pwd.value,
  };

  fetch("/login", {
    method: "POST", //restful API? -> 메서드 이용
    header: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req), // 데이터
  });
}

loginBtn.addEventListener("click", login);
