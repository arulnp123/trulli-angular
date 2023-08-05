import mysql from "mysql";


const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "react_sample",
  });

  
  export default db;