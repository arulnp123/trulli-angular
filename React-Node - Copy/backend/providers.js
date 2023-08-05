import express from "express";
import bcrypt from 'bcryptjs';
import db from "../config/dbconn.js";

const router =  express.Router();

/// Register Start

router.post("/providers_services", (req, res) => {

   /// const hashedPassword = bcrypt.hashSync(req.body.password, 8) // hash created previously created upon sign up
  
    const reg = "SELECT * FROM `services` WHERE 1;";
  
    // const values = [
    //   req.body.fName,
    //   req.body.lName,
    //   req.body.email,
    //   hashedPassword,
    //   req.body.conPassword,
    //   req.body.status,
    //   req.body.apiToken,
    //   req.body.createdDate,
    // ];


    const values = [
        req.body.id,
        req.body.service_img,
        req.body.user_img,
        req.body.service_name,
        req.body.user_name,
        req.body.name,
        req.body.country,
        req.body.amount,
        req.body.mobile,
        req.body.date,
        req.body.status,
      ];
    
      
    db.query(reg, [values], (err, data) => {
      if (err) {
        return res.json(err);
      }
      return res.json("Users Register successfully");
    });
  });



  router.post("/register", (req, res) => {

    /// const hashedPassword = bcrypt.hashSync(req.body.password, 8) // hash created previously created upon sign up
   
     const reg = "SELECT * FROM `specialityList` WHERE 1;";
 
     const values = [
         req.body.id,
         req.body.key,
         req.body.speciality,
         req.body.date,
         req.body.img,
         req.body.ratings,
         req.body.checked,
        
       ];
       
     db.query(reg, [values], (err, data) => {
       if (err) {
         return res.json(err);
       }
       return res.json("Users Register successfully");
     });
   });
  
   router.post("/register", (req, res) => {

    /// const hashedPassword = bcrypt.hashSync(req.body.password, 8) // hash created previously created upon sign up
   
     const reg = "SELECT * FROM `appointments` WHERE 1;";
 
     const values = [
         req.body.id,
         req.body.service_name,
         req.body.img,
         req.body.provider_name,
         req.body.provider_img,
         req.body.user_id,
         req.body.booking_date,
         req.body.booking_time,
         req.body.phone,
         req.body.location,
         req.body.status,
         req.body.amount, 
         req.body.option1, 
         req.body.option2, 
         req.body.option2, 
       
        
       ];
    
       
     db.query(reg, [values], (err, data) => {
       if (err) {
         return res.json(err);
       }
       return res.json("Users Register successfully");
     });
   });
  
   router.post("/register", (req, res) => {

    /// const hashedPassword = bcrypt.hashSync(req.body.password, 8) // hash created previously created upon sign up
   
     const reg = "SELECT * FROM `appointments` WHERE 1;";
 
     const values = [
         req.body.id,
         req.body.service_name,
         req.body.img,
         req.body.provider_name,
         req.body.provider_img,
         req.body.user_id,
         req.body.booking_date,
         req.body.booking_time,
         req.body.phone,
         req.body.location,
         req.body.status,
         req.body.amount, 
         req.body.option1, 
         req.body.option2, 
         req.body.option2, 
       ];
     db.query(reg, [values], (err, data) => {
       if (err) {
         return res.json(err);
       }
       return res.json("Users Register successfully");
     });
   });
  // Register End
  
  router.post("/register", (req, res) => {

    /// const hashedPassword = bcrypt.hashSync(req.body.password, 8) // hash created previously created upon sign up
   
     const reg = "SELECT * FROM `reviews` WHERE 1;";
 
     const values = [
         req.body.id,
         req.body.service_img,
         req.body.user_img,
         req.body.user_name,
         req.body.ratings,
         req.body.description,
         req.body.date,
         req.body.commands,
        
       ];
       
     db.query(reg, [values], (err, data) => {
       if (err) {
         return res.json(err);
       }
       return res.json("Users Register successfully");
     });
   });

   router.post("/register", (req, res) => {

    /// const hashedPassword = bcrypt.hashSync(req.body.password, 8) // hash created previously created upon sign up
   
     const reg = "SELECT * FROM `comments` WHERE 1;";
 
     const values = [
         req.body.name,
         req.body.email,
         req.body.comment,
       ];
       
     db.query(reg, [values], (err, data) => {
       if (err) {
         return res.json(err);
       }
       return res.json("Users Register successfully");
     });
   });

   router.post("/register", (req, res) => {

    /// const hashedPassword = bcrypt.hashSync(req.body.password, 8) // hash created previously created upon sign up
   
     const reg = "SELECT * FROM `plans` WHERE 1;";
 
     const values = [
         req.body.id,
         req.body.name,
         req.body.price,
         req.body.duration,
         req.body.expiry,
         req.body.start_date,
         req.body.end_date,
         req.body.status,
        
       ];
     db.query(reg, [values], (err, data) => {
       if (err) {
         return res.json(err);
       }
       return res.json("Users Register successfully");
     });
   });


   router.post("/register", (req, res) => {

    /// const hashedPassword = bcrypt.hashSync(req.body.password, 8) // hash created previously created upon sign up
   
     const reg = "SELECT * FROM `available_days` WHERE 1;";
 
     const values = [
         req.body.id,
         req.body.day,
       ];
     
     db.query(reg, [values], (err, data) => {
       if (err) {
         return res.json(err);
       }
       return res.json("Users Register successfully");
     });
   });

   router.post("/register", (req, res) => {

    /// const hashedPassword = bcrypt.hashSync(req.body.password, 8) // hash created previously created upon sign up
   
     const reg = "SELECT * FROM `transactions` WHERE 1;";
 
     const values = [
         req.body.id,
         req.body.user_id,
         req.body.date,
         req.body.wallet,
         req.body.credit,
         req.body.tax_amount,
         req.body.debit,
         req.body.available,
         req.body.reason,
         req.body.status,
        
       ];
     db.query(reg, [values], (err, data) => {
       if (err) {
         return res.json(err);
       }
       return res.json("Users Register successfully");
     });
   });


   router.post("/register", (req, res) => {

    /// const hashedPassword = bcrypt.hashSync(req.body.password, 8) // hash created previously created upon sign up
   
     const reg = "SELECT * FROM `notifications` WHERE 1;";
 
     const values = [
         req.body.id,
         req.body.text,
         req.body.date,
         req.body.img,
        
       ];
      
     db.query(reg, [values], (err, data) => {
       if (err) {
         return res.json(err);
       }
       return res.json("Users Register successfully");
     });
   });


   router.post("/register", (req, res) => {

    /// const hashedPassword = bcrypt.hashSync(req.body.password, 8) // hash created previously created upon sign up
   
     const reg = "SELECT * FROM `categories` WHERE 1;";
 
     const values = [
         req.body.id,
         req.body.name,
         req.body.img,
         req.body.date,
        
       ];
      
     db.query(reg, [values], (err, data) => {
       if (err) {
         return res.json(err);
       }
       return res.json("Users Register successfully");
     });
   });


   router.post("/register", (req, res) => {

    /// const hashedPassword = bcrypt.hashSync(req.body.password, 8) // hash created previously created upon sign up
   
     const reg = "SELECT * FROM `sub_categories` WHERE 1;";
 
     const values = [
         req.body.id,
         req.body.name,
         req.body.cat_id,
         req.body.img,
         req.body.date,
        
       ];
      
     db.query(reg, [values], (err, data) => {
       if (err) {
         return res.json(err);
       }
       return res.json("Users Register successfully");
     });
   });

   router.post("/register", (req, res) => {

    /// const hashedPassword = bcrypt.hashSync(req.body.password, 8) // hash created previously created upon sign up
   
     const reg = "SELECT * FROM `all_reports` WHERE 1;";
 
     const values = [
         req.body.id,
         req.body.date,
         req.body.user_name,
         req.body.user_img,
         req.body.provider_name,
         req.body.provider_img,
         req.body.service,
         req.body.amount,
         req.body.updated,
        
       ];
     db.query(reg, [values], (err, data) => {
       if (err) {
         return res.json(err);
       }
       return res.json("Users Register successfully");
     });
   });


   router.post("/register", (req, res) => {

    /// const hashedPassword = bcrypt.hashSync(req.body.password, 8) // hash created previously created upon sign up
   
     const reg = "SELECT * FROM `pending_reports` WHERE 1;";
 
     const values = [
         req.body.id,
         req.body.date,
         req.body.user_name,
         req.body.user_img,
         req.body.provider_name,
         req.body.provider_img,
         req.body.service,
         req.body.amount,
         req.body.updated,
        
       ];
     db.query(reg, [values], (err, data) => {
       if (err) {
         return res.json(err);
       }
       return res.json("Users Register successfully");
     });
   });

   router.post("/register", (req, res) => {

    /// const hashedPassword = bcrypt.hashSync(req.body.password, 8) // hash created previously created upon sign up
   
     const reg = "SELECT * FROM `inprogress_reports` WHERE 1;";
 
     const values = [
         req.body.id,
         req.body.date,
         req.body.user_name,
         req.body.user_img,
         req.body.provider_name,
         req.body.provider_img,
         req.body.service,
         req.body.amount,
         req.body.updated,
        
       ];
       
     db.query(reg, [values], (err, data) => {
       if (err) {
         return res.json(err);
       }
       return res.json("Users Register successfully");
     });
   });


   router.post("/register", (req, res) => {

    /// const hashedPassword = bcrypt.hashSync(req.body.password, 8) // hash created previously created upon sign up
   
     const reg = "SELECT * FROM `completed_reports` WHERE 1;";
 
     const values = [
         req.body.id,
         req.body.date,
         req.body.user_name,
         req.body.user_img,
         req.body.provider_name,
         req.body.provider_img,
         req.body.service,
         req.body.amount,
         req.body.status,
         req.body.updated,
         req.body.type_name,
         req.body.ratings,
         req.body.commands,
        
       ];
     db.query(reg, [values], (err, data) => {
       if (err) {
         return res.json(err);
       }
       return res.json("Users Register successfully");
     });
   });

   router.post("/register", (req, res) => {

    /// const hashedPassword = bcrypt.hashSync(req.body.password, 8) // hash created previously created upon sign up
   
     const reg = "SELECT * FROM `rejected_reports` WHERE 1;";
 
     const values = [
         req.body.id,
         req.body.date,
         req.body.user_name,
         req.body.user_img,
         req.body.provider_name,
         req.body.provider_img,
         req.body.service,
         req.body.amount,
         req.body.status,
         req.body.updated,
        
       ];
     db.query(reg, [values], (err, data) => {
       if (err) {
         return res.json(err);
       }
       return res.json("Users Register successfully");
     });
   });


   router.post("/register", (req, res) => {

    /// const hashedPassword = bcrypt.hashSync(req.body.password, 8) // hash created previously created upon sign up
   
     const reg = "SELECT * FROM `canceled_reports` WHERE 1;";
 
     const values = [
         req.body.id,
         req.body.date,
         req.body.user_name,
         req.body.user_img,
         req.body.provider_name,
         req.body.provider_img,
         req.body.service,
         req.body.amount,
         req.body.status,
         req.body.updated,
        
       ];
       
     db.query(reg, [values], (err, data) => {
       if (err) {
         return res.json(err);
       }
       return res.json("Users Register successfully");
     });
   });


   
   router.post("/register", (req, res) => {

    /// const hashedPassword = bcrypt.hashSync(req.body.password, 8) // hash created previously created upon sign up
   
     const reg = "SELECT * FROM `ratings` WHERE 1;";
 
     const values = [
         req.body.id,
         req.body.commands,
         req.body.status,
        
       ];
     
     db.query(reg, [values], (err, data) => {
       if (err) {
         return res.json(err);
       }
       return res.json("Users Register successfully");
     });
   });

   router.post("/register", (req, res) => {

    /// const hashedPassword = bcrypt.hashSync(req.body.password, 8) // hash created previously created upon sign up
   
     const reg = "SELECT * FROM `wallet_report` WHERE 1;";
 
     const values = [
         req.body.id,
         req.body.date,
         req.body.img,
         req.body.name,
         req.body.mobile,
         req.body.amount,
         req.body.role,
        
       ];
       
     db.query(reg, [values], (err, data) => {
       if (err) {
         return res.json(err);
       }
       return res.json("Users Register successfully");
     });
   });


   router.post("/register", (req, res) => {

    /// const hashedPassword = bcrypt.hashSync(req.body.password, 8) // hash created previously created upon sign up
   
     const reg = "SELECT * FROM `wallet_history` WHERE 1;";
 
     const values = [
         req.body.id,
         req.body.date,
         req.body.img,
         req.body.name,
         req.body.current_amt,
         req.body.credit_amt,
         req.body.debit_amt,
         req.body.fee_amt,
         req.body.available_amt,
         req.body.reason,
         req.body.pay_type,
         req.body.role,
        
       ];
       
     db.query(reg, [values], (err, data) => {
       if (err) {
         return res.json(err);
       }
       return res.json("Users Register successfully");
     });
   });

   router.post("/register", (req, res) => {

    /// const hashedPassword = bcrypt.hashSync(req.body.password, 8) // hash created previously created upon sign up
   
     const reg = "SELECT * FROM `subscriptions` WHERE 1;";
 
     const values = [
         req.body.id,
         req.body.date,
         req.body.provider_name,
         req.body.provider_img,
         req.body.subscription,
         req.body.email,
         req.body.mobile,
         req.body.status,
        
       ];
     db.query(reg, [values], (err, data) => {
       if (err) {
         return res.json(err);
       }
       return res.json("Users Register successfully");
     });
   });

   router.post("/register", (req, res) => {

    /// const hashedPassword = bcrypt.hashSync(req.body.password, 8) // hash created previously created upon sign up
   
     const reg = "SELECT * FROM `users` WHERE 1;";
 
     const values = [
         req.body.id,
         req.body.date,
         req.body.provider_name,
         req.body.provider_img,
         req.body.subscription,
         req.body.email,
         req.body.mobile,
         req.body.status,
        
       ];
     db.query(reg, [values], (err, data) => {
       if (err) {
         return res.json(err);
       }
       return res.json("Users Register successfully");
     });
   });

   router.post("/register", (req, res) => {

    /// const hashedPassword = bcrypt.hashSync(req.body.password, 8) // hash created previously created upon sign up
   
     const reg = "SELECT * FROM `users` WHERE 1;";
 
     const values = [
         req.body.id,
         req.body.date,
         req.body.provider_name,
         req.body.provider_img,
         req.body.subscription,
         req.body.email,
         req.body.mobile,
         req.body.status,
        
       ];
     db.query(reg, [values], (err, data) => {
       if (err) {
         return res.json(err);
       }
       return res.json("Users Register successfully");
     });
   });

  
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