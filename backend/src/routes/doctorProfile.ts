import { Router } from "express";
import { changeStatus, create, getProfiles, getSingleProfile, getStatus } from "../controllers/doctorProfile";
import { idExtractor } from "../middlewares/auth";


const router = Router();
router.use(idExtractor);
router.post("/create",create);
router.get("/status",getStatus);
router.get("/get/all",getProfiles);
router.get("/get",getSingleProfile);
router.post("/status",changeStatus);

export default router;
