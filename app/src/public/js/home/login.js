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
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then(console.log);
}
loginBtn.addEventListener("click", login);
