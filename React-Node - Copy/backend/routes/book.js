import express from "express";
import multer from 'multer';
import db from "../config/dbconn.js";
import fs from 'fs';

const router =  express.Router();



router.get("/books", (req, res) => {
    const q = "SELECT * FROM books";
    db.query(q, (err, data) => {
      if (err) {
        return res.json(err);
      }
      return res.json(data);
    });
  });
  
  
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./upload")
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + "-" + file.originalname)
    },
  })
  
  const upload = multer({ storage: storage });
  
   
  router.post("/books", upload.single("cover"), (req, res) => {
    res.send(req.file)
    if (!req.file) {
      return res.json("No File Upload");
    } else {
  
    const imgsrc = 'http://localhost:8800/image/' + req.file.filename;
  
    const q = "INSERT INTO react_sample.books (title, `desc`, price, cover) VALUES(?);";
  
    const values = [
      req.body.title,
      req.body.desc,
      req.body.price,
      imgsrc,
    ];
  
    db.query(q, [values], (err, data) => {
      if (err) {
        return res.json(err);
      }
      return res.json("Book created successfully");
    });
   }
  });
  
  router.delete("/books:id", (req, res) => {
    const bookId = req.params.id;
    const q = "DELETE FROM books WHERE id=?";
    db.query(q, [bookId], (err, data) => {
      if (err) {
        return res.json(err);
      }
      return res.json("Book deleted successfully");
    });
  });


  router.put("/books:id", upload.single("cover"), (req, res) => {
    res.send(req.file)

    const bookId = req.params.id;


    if (!req.file) {
      console.log("No file upload");

      const q = "UPDATE books SET title=?, `desc`=?, price=? WHERE id=?";
  
      const values = [
        req.body.title,
        req.body.desc,
        req.body.price,
        bookId,
      ];
      db.query(q, [...values, bookId], (err, data) => {
        if (err) {
          return res.json(err);
        }
        return res.json("Book updated successfully");
      });

    } else {


      const a = "SELECT * FROM books WHERE id=?";
      db.query(a, bookId, (err, data) => {
        if (err) {
          return res.json(err);
        }
        const directoryPath = "upload/";
        const fileName = data[0].cover.split("/")[4];
        fs.unlinkSync(directoryPath + fileName);
      });
      
  
    const imgsrc = 'http://localhost:8800/image/' + req.file.filename;
  
    const q = "UPDATE books SET title=?, `desc`=?, price=?, cover=? WHERE id=?";
  
    const values = [
      req.body.title,
      req.body.desc,
      req.body.price,
      imgsrc,
      bookId,
    ];
    db.query(q, [...values, bookId], (err, data) => {
      if (err) {
        return res.json(err);
      }
      return res.json("Book updated successfully");
    });
  }
  });
  
  
  
  router.get("/books:id", (req, res) => {
    const bookId = req.params.id;
    const q = "SELECT * FROM books WHERE id=?";
  
    db.query(q, bookId, (err, data) => {
      if (err) {
        return res.json(err);
      }
      return res.json(data);
    });
  });
  


  export default router;