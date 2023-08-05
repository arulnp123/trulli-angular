import express from "express";
import cors from "cors";
import  userRouter  from "./routes/user.js";
import  bookRouter from "./routes/book.js";


const app = express();

app.use(express.json());
app.use(cors());
app.use("/image",express.static("upload"));



app.use(userRouter);
app.use(bookRouter);




app.listen(8800, () => {
  console.log("Local host started!!");
});
