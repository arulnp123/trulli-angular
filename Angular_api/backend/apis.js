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


//services

app.get("/services", function(req, res) {
  console.log(">>>>services started>>>>");
  const q = "SELECT * FROM services";
  db.query(q, function (err, data) {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  })
})

//specialityList

app.get("/specialityList", function(req, res) {
  console.log(">>>>specialityList started>>>>");
  const q = "SELECT * FROM `specialityList`";
  db.query(q, function (err, data) {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  })
})

//appointments

app.get("/appointments", function(req, res) {
  console.log(">>>>appointments started>>>>");
  const q = "SELECT * FROM `appointments`";
  db.query(q, function (err, data) {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  })
})


//specialityList

app.get("/appointments", function(req, res) {
  console.log(">>>>appointments started>>>>");
  const q = "SELECT * FROM `appointments`";
  db.query(q, function (err, data) {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  })
})

//reviews

app.get("/reviews", function(req, res) {
  console.log(">>>>reviews started>>>>");
  const q = "SELECT * FROM `reviews`";
  db.query(q, function (err, data) {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  })
})

//comments

app.get("/comments", function(req, res) {
  console.log(">>>>comments started>>>>");
  const q = "SELECT * FROM `comments`";
  db.query(q, function (err, data) {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  })
})

//plans

app.get("/plans", function(req, res) {
  console.log(">>>>plans started>>>>");
  const q = "SELECT * FROM `plans`";
  db.query(q, function (err, data) {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  })
})

//available_days

app.get("/available_days", function(req, res) {
  console.log(">>>>available_days started>>>>");
  const q = "SELECT * FROM `available_days`";
  db.query(q, function (err, data) {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  })
})

//transactions

app.get("/transactions", function(req, res) {
  console.log(">>>>transactions started>>>>");
  const q = "SELECT * FROM `transactions`";
  db.query(q, function (err, data) {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  })
})

//notifications

app.get("/notifications", function(req, res) {
  console.log(">>>>notifications started>>>>");
  const q = "SELECT * FROM `notifications`";
  db.query(q, function (err, data) {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  })
})

//categories

app.get("/categories", function(req, res) {
  console.log(">>>>categories started>>>>");
  const q = "SELECT * FROM `categories`";
  db.query(q, function (err, data) {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  })
})

//sub_categories

app.get("/sub_categories", function(req, res) {
  console.log(">>>>sub_categories started>>>>");
  const q = "SELECT * FROM `sub_categories`";
  db.query(q, function (err, data) {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  })
})

//all_reports

app.get("/all_reports", function(req, res) {
  console.log(">>>>all_reports started>>>>");
  const q = "SELECT * FROM `all_reports`";
  db.query(q, function (err, data) {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  })
})

//pending_reports

app.get("/pending_reports", function(req, res) {
  console.log(">>>>pending_reports started>>>>");
  const q = "SELECT * FROM `pending_reports`";
  db.query(q, function (err, data) {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  })
})

//inprogress_reports

app.get("/inprogress_reports", function(req, res) {
  console.log(">>>>inprogress_reports started>>>>");
  const q = "SELECT * FROM `inprogress_reports`";
  db.query(q, function (err, data) {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  })
})

//completed_reports

app.get("/completed_reports", function(req, res) {
  console.log(">>>>completed_reports started>>>>");
  const q = "SELECT * FROM `completed_reports`";
  db.query(q, function (err, data) {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  })
})

//rejected_reports

app.get("/rejected_reports", function(req, res) {
  console.log(">>>>rejected_reports started>>>>");
  const q = "SELECT * FROM `rejected_reports`";
  db.query(q, function (err, data) {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  })
})

//canceled_reports

app.get("/canceled_reports", function(req, res) {
  console.log(">>>>canceled_reports started>>>>");
  const q = "SELECT * FROM `canceled_reports`";
  db.query(q, function (err, data) {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  })
})

//ratings

app.get("/ratings", function(req, res) {
  console.log(">>>>ratings started>>>>");
  const q = "SELECT * FROM `ratings`";
  db.query(q, function (err, data) {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  })
})

//wallet_report

app.get("/wallet_report", function(req, res) {
  console.log(">>>>wallet_report started>>>>");
  const q = "SELECT * FROM `wallet_report`";
  db.query(q, function (err, data) {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  })
})

//wallet_history

app.get("/wallet_history", function(req, res) {
  console.log(">>>>wallet_history started>>>>");
  const q = "SELECT * FROM `wallet_history`";
  db.query(q, function (err, data) {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  })
})

//subscriptions

app.get("/subscriptions", function(req, res) {
  console.log(">>>>subscriptions started>>>>");
  const q = "SELECT * FROM `subscriptions`";
  db.query(q, function (err, data) {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  })
})

//subscriptions

app.get("/subscriptions", function(req, res) {
  console.log(">>>>subscriptions started>>>>");
  const q = "SELECT * FROM `subscriptions`";
  db.query(q, function (err, data) {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  })
})

//users

app.get("/users", function(req, res) {
  console.log(">>>>users started>>>>");
  const q = "SELECT * FROM `users`";
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

