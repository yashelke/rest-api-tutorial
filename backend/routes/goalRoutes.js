import express from 'express';
import {getGoals, setGoals, updateGoals, deleteGoals} from '../controllers/goalContoller.js';
const router = express.Router();

// router.get("/", (req, res) => {
//     res.status(200).json({ message: "Get Goals." });
// });

// 

// router.post("/",(req,res) =>
// {
//     res.status(201).json({ message: "Set Goals." });
// })


// router.get("/",getGoals);
// router.post("/",setGoals);

router.route("/").get(getGoals).post(setGoals);



// router.put("/:id",(req,res) =>
// {
//     res.status(200).json({ message: `Update Goal ${req.params.id}.` });
// })


// router.delete("/:id",(req,res) =>
// {
//     res.status(200).json({ message: `Delete Goal ${req.params.id}.` });
// })



// router.put("/:id",updateGoals);
// router.delete("/:id",deleteGoals);


router.route("/:id").put(updateGoals).delete(deleteGoals);

















// router.get("/myreq",(req,res) =>
// {
// res.status(201).json({message:"My Request."});
// })













export default router;