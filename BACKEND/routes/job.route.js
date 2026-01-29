import express from "express";
import {
  getAdminjobs,
  getAllJobs,
  getjobById,
  postJob,
} from "../Controllers/job.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";

const router = express.Router();

router.route("/post").post(isAuthenticated, postJob);
router.route("/get").get(getAllJobs);
router.route("/getAdminjobs").get(isAuthenticated, getAdminjobs);
router.route("/get/:id").get(isAuthenticated, getjobById);

export default router;
