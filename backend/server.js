import express from "express";
import colors from "colors";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/goalRoutes.js";
import { errorHandler } from "./middlewares/errorMiddleware.js";
import connectDB from "./config/db.js";
dotenv.config();
console.log("NODE_ENV: ",process.env.NODE_ENV);

connectDB();
 
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(cors());

// app.get("/api/goals", (req,res) =>
// {
//     // res.json({ message: "Get Goals." });
//     // res.send("Get goals.")
//     res.status(200).json({message:"Get Goals."})
// })

app.use("/api/goals",router);

app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});