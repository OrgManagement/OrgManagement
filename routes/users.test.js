const index = require("./users");

const request = require("supertest");
const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use("/", index);

test("GET: Root route works", done => {
  request(app)
    .get("/")
    .expect(200, done);
});

test("POST: Root route works", done => {
    request(app)
      .post("/")
      .expect(200, done);
  });

test("testing route works", done => {
  request(app)
    .post("/test")
    .type("form")
    .send({ item: "hey" })
    .then(() => {
      request(app)
        .get("/test")
        .expect({ array: ["hey"] }, done);
    });
});