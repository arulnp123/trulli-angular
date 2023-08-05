import express from "express";
import bcrypt from 'bcryptjs';
import db from "../config/dbconn.js";

const router =  express.Router();

/// Register Start

router.post("/register", (req, res) => {

    const hashedPassword = bcrypt.hashSync(req.body.password, 8) // hash created previously created upon sign up
  
    const reg = "INSERT INTO users (first_name, `last_name`, email, password,ck_password,status,api_token,created_at) VALUES(?);";
  
    const values = [
      req.body.fName,
      req.body.lName,
      req.body.email,
      hashedPassword,
      req.body.conPassword,
      req.body.status,
      req.body.apiToken,
      req.body.createdDate,
    ];
  
    db.query(reg, [values], (err, data) => {
      if (err) {
        return res.json(err);
      }
      return res.json("Users Register successfully");
    });
  });
  
  
  // Register End
  
  
  
  // login Start
   
       
  router.post("/login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const hash = '$2a$08$RmHWzLp9syAIOcNVVquGCeFhwcYET73tTkySMm2Xt5..H.ODqPBiy';
  
    bcrypt.compareSync(password, hash, function(err, isMatch) {
      if (err) {
        throw err
      } else if (!isMatch) {
        console.log("Password doesn't match!")
      } else {
        console.log("Password matches!")
      }
    }) ;
  
    const user = "SELECT * FROM users WHERE email=?";
   
    db.query(user, [email], (err, data) => {
      if (err) {
        return res.json(err);
      }
      if(data.length!=0) {
  
       const hash = data[0].password;
   
       const ckpass =  bcrypt.compareSync( password, hash );
        if(!ckpass){
          return res.json('Password doesnot match!');
        }else{
          return res.json(data);
        } 
      } else {
         return res.json('Invalid Password');
      }
      
    });
  });
  
  
  // Login End


  export default router;