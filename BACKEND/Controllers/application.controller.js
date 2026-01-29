import { application } from "../models/application.model.js";

//  job applicant dekhna
export const applyJob = async (req, res) => {
  try {
    const userId = req.id;
    const jobId = req.params.id;
    if (!jobId) {
      return res.status(400).json({
        message: "Job id is required",
        success: false,
      });
    }

    //     check if the user has already applied for the job
    const existingApplication = await application.findOne({
      job: jobId,
      applicant: userId,
    });
    if (existingApplication) {
      return res.status(400).json({
        message: "You have already applied for this job",
        success: false,
      });
    }

    // check if the job exists
    const job = await job.findById(jobId);
    if (!job) {
      return res.status(400).json({
        message: "Job not found",
        success: false,
      });
    }

    // create a new application
    const newApplication = await application.create({
      job: jobId,
      applicant: userId,
    });

    job.applications.push(newApplication._id);
    await job.save();
    return res.save(200).json({
      message: "Job applied successfully",
      success: true,
      data: newApplication,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error from Apply job ",
      success: false,
      error: error.message,
    });
  }
};

// jitni bhi applied job hai wo sb get krna h

export const getAppliedJobs = async (req, res) => {
  try {
    const userId = req.id;
    const applications = await application
      .find({ applicant: userId })
      .sort({ createdAt: -1 })
      .populate({
        path: "job",
        options: { sort: { createdAt: -1 } },
        populate: {
          path: "company",
          options: { sort: { createdAt: -1 } },
        },
      });
    if (!applications) {
      return res.status(400).json({
        message: "No applied jobs found",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Applied jobs fetched successfully",
      success: true,
      data: applications,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "a",
      success: false,
      error: error.message,
    });
  }
};

// jb admin check krega ki mene yh job post kri thi to uspe kitne logo n apply kiya hai admin dekhega kitne user n apply kiya hai

export const getApplicants = async (req, res) => {
  try {
    const jobId = req.params.id;
    const job = await job.findById(jobId).populate({
        path:"applications",
        options:{sort:{createdAt:-1}},
        populate:{
            path:"applicant",
            options:{sort:{createdAt:-1}}
        }
    })
    if(!job){
        return res.status(400).json({
            message:"Job not found",
            success:false
        
        })
    }
    return res.status(200).json({
        message:"Applicants fetched successfully",
        success:true,
        data:job.applications
    })
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "a",
      success: false,
      error: error.message,
    });
  }
};

// update status check krna h select huwa hai ya unselect

export const updateStatus = async(req,res)=>{
    try{
        const {status} = req.body;
        const applicationId = req.params.id;
        if(!status){
            return res.status(400).json({
                message:"status is required",
                success:false
            })
        }

        //  find the application by application id
        const application = await application.findOne({_id:applicationId})
        if(!application){
            return res.status(400).json({
                message:"Application not found",
                success:false
            })
        }
        
        // update the status
        application.status = status.toLowerCase()
        await application.save()

        return res.status(200).json({
            message:"Status Updated successfully",
            success:true,
        })

    }
   catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: error.message,
    });
}
}
