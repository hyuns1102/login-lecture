//http 서버 만들기
// const http = require("http");
// const app = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
//   if (req.url === "/") {
//     res.end("여기는 루트 입니다.");
//   } else if (req.url === "/login") {
//     res.end("여기는 로그인 화면입니다.");
//   }
// });

// app.listen(3001, () => {
//   console.log("http로 가동된 서버입니다.");
// });

// express 서버 만들기
// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//   res.send("여기는 루트입니다.");
//   // 브라우저에서 루트 아래에 있는 요청이 들어오면 여기서 기능을 구현한다.
// });
// app.get("/login", (req, res) => {
//   res.send("여기는 로그인 화면입니다.");
//   // 브라우저에서 루트 아래에 있는 요청이 들어오면 여기서 기능을 구현한다.
// });
// app.listen(3000, function () {
//   console.log("server go");
//   // localhost:3000 서버 포트를 실행시켰을 때 console 메세지 출력
// });
