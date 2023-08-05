import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

var fs = require('fs');
var http = require('http');
var https = require('https');

const bodyParser=require('body-parser'); 
// parse application/json 
  app.use(bodyParser.json());  
  // parse application/x-www-form-urlencoded
   app.use(bodyParser.urlencoded({ extended: false })); 

var options = {
  key: fs.readFileSync('test/fixtures/keys/agent2-key.pem'),
  cert: fs.readFileSync('test/fixtures/keys/agent2-cert.pem')
};
// your express configuration here

var httpServer = http.createServer(app);
var httpsServer = https.createServer(options, app);

httpServer.listen(8080);
console.log("<<<<<<<server started 8080>>>>>>" )
httpsServer.listen(8443);
console.log("<<<<<<<server started 8443>>>>>>" )


// app.createServer(options, function (req, res) {
//   res.writeHead(200);
//   res.end("hello world\n");
// }).listen(8000);

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "angulartruli",
});

//Allowing X-domain request
// var allowCrossDomain = function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Cache-Control");

  // intercept OPTIONS method
//   if ('OPTIONS' == req.method) {
//     res.send(200);
//   }
//   else {
//     next();
//   }
// };
// app.use(allowCrossDomain);

//var express = require('express')
//var cors = require('cors')
//var app = express()
 

app.use(cors())

// app.get("/", (req, res) => {
//   res.json("hello world");
// });

app.get("/services", function(req, res) {
  console.log(">>>>services started>>>>");
  const q = "SELECT * FROM `services`";
  db.query(q, function (err, data) {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  })
})

app.post("/register", (req, res) => {
  const q = "INSERT INTO register (email, phone_no, password) VALUES(?);";
  /*console.log("req.email ::: ",req.email);
  console.log("req.body.email::: " , req.body.email);
  console.log("req.body::: " , req.body);
  console.log("req::: " , req);
  */
  const values = [
    req.body.email,
    req.body.phone_no,
    req.body.password,
  ];

  db.query(q, [values], (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json("User registered successfully");
  });
});

app.delete("/register:email", (req, res) => {
  const email = req.params.email;
  const q = "DELETE FROM register WHERE email=?";
  db.query(q, [email], (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json("User deleted successfully");
  });
});

app.put("/register:email", (req, res) => {
  const bookId = req.params.email;
  const q = "UPDATE users SET phone_no=?, password=? WHERE email=?";

  const values = [
    req.body.phone_no,
    req.body.password,
    email,
  ];
  db.query(q, [...values, email], (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json("User updated successfully");
  });
});


// ./src/index.js
// importing the dependencies

