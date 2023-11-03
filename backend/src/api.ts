import express,{ Router } from "express";
import { signup } from "./controllers/auth";
import user from './routes/user';
import adminAuth from './routes/admin/auth';
import doctorProfile from './routes/doctorProfile';

const router = Router();
// router.use("/",(req,res)=>{
//     res.send("Api working")
// })
// signup
router.use("/user",user);
router.use("/admin/auth",adminAuth);
router.use("/doctor/profile",doctorProfile as express.RequestHandler);

export default router;  