import { Job } from "../models/job.model.js";

//  admin  ke liye jo post kreg
export const postJob = async (req, res) => {
  try {
    const {
      title,
      description,
      requirements,
      salary,
      location,
      jobType,
      position,
      company,
      experience,
    } = req.body;

    const userId = req.userId;
    if (
      !title ||
      !description ||
      !requirements ||
      !salary ||
      !location ||
      !jobType ||
      !position ||
      !company ||
      !experience
    ) {
      return res.status(400).json({
        message: "All fields are required || something is missing",
        success: false,
      });
    }
    // create job

    const createjob = await Job.create({
      title,
      description,
      requirements: requirements.split(","),
      salary: Number(salary),
      location,
      jobType,
      position,
      experience: experience,
      company: companyId,
      created_by: userId,
    });
    return res.status(201).json({
      message: "Job posted successfully , new job creted successfully",
      createjob,
      success: true,
    });
  } catch (error) {
    console.log("Error in posting job", error);
    res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};

//get all job student ke liye

export const getAllJobs = async (req, res) => {
  try {
    // jb apn api bnayenge to http :// loyh wo last m 097785494@@##$$# aese te hi tb apn chte hai ki frontend dev ki ob hiye to apn yh qurey dhalte hai to apn is qurey ko yha p utha kr use krnege taki filter kr ske aaani se

    const keyword = req.query.keyword || "";
    const query = {
      $or: [
        { title: { $regex: keyword, $options: "i" } },
        { description: { $regex: keyword, $options: "i" } },
      ],
    };
    const jobs = await Job.find(query)
      .populate({
        path: "company",
      })
      .sort({ createdAt: -1 });
    if (!jobs) {
      return res.status(404).json({
        message: "No jobs found",
        success: false,
      });
    }
    return res.status(200).json({
      message: "Jobs fetched successfully",
      jobs,
      success: true,
    });
  } catch (error) {
    console.log("Error in getting all jobs");
    res.status(500).json({
      message: "get all jobs error",
      success: false,
      error: error.message,
    });
  }
};

// get job by id student ke liye
export const getjobById = async (req, res) => {
  try {
    const jobId = req.params.id;
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({
        message: "Job not found",
        success: false,
      });
    }
    return res.status(200).json({
      message: "Job fetched successfully",
      job,
      success: true,
    });
  } catch (error) {
    console.log("Error in getting job by id", error);
    res.status(500).json({
      message: "Internal Server Error",
      success: false,
      error: error.message,
    });
  }
};

// admin kitne job create kra abhi tk

export const getAdminjobs = async (req, res) => {
  try {
    const adminId = req.id; // logged in admin id
    const jobs = await Job.find({ created_by: adminId });
    if (!jobs) {
      return res.status(404).json({
        message: "No jobs found for this admin",
        success: false,
      });
    }
    return res.status(200).json({
      message: "Admin jobs fetched successfully",
      jobs,
      success: true,
    });
  } catch (error) {
    console.log("Error in getting admin jobs", error);
    res.status(500).json({
      message: "getAdminJobs error",
      success: false,
      error: error.message,
    });
  }
};
