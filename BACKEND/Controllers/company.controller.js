import { Company } from "../models/company.model.js";

// registration of company
export const registerCompany = async (req, res) => {
  try {
    const { companyName } = req.body;
    if (!companyName) {
      return res.status(400).json({
        message: "Company name is required",
        success: false,
      });
    }

    // Check if company with the same name already exists
    let existingCompany = await Company.findOne({ name: companyName });
    if (existingCompany) {
      return res.status(400).json({
        message: "Company with this name already exists",
        success: false,
      });
    }
    // crete a company
    existingCompany = await Company.create({
      name: companyName,
      userId: req.id, // assuming req.id contains the ID of the logged-in user
    });
    return res.status(201).json({
      message: "Company registered successfully",
      data: existingCompany,
      success: true,
    });
  } catch (error) {
    console.log("Error in registering company:", error);
    res
      .status(400)
      .json({ message: "Failed to register company", error: error.message });
  }
};

// get all companies

export const getCompany = async (req, res) => {
  try {
    // user id e ike liye kuki jo user hoga wo apne hi companies dekhega usnea jo company creat ki hogi whi dikhani hai
    const userId = req.id; // logged in user id
    const companies = await Company.find({ userId });
    if (!companies) {
      return res.status(404).json({
        message: "No companies found for this user",
        success: false,
      });
    }
    return res.status(200).json({
        message: "Companies fetched successfully",
        companies,
        success: true,
    })
  } catch (error) {
    console.log("Error in getting companies:", error);
    res
      .status(400)
      .json({ message: "Failed to get companies", error: error.message });
  }
};

// get company by id
export const getCompanyById = async (req, res) => {
  try {
    const companyId = req.params.id;
    const company = await Company.findById(companyId);
    if (!company) {
      return res.status(404).json({
        message: "Company not found",
        success: false,
      });
    }
    return res.status(200).json({
      message: "Company fetched successfully",
      company,
      success: true,
    });
  } catch (error) {
    console.log("Error in getting company by id:", error);
    res
      .status(400)
      .json({ message: "Failed to get company by id", error: error.message });
  }
};

//  update company by id
export const updateCompany = async (req, res) => {
  try {
    const { name, description, website, location } = req.body;
    const file = req.file; // Assuming you're using multer for file uploads
    // cloudinary ayega

    const updateData = { name, description, website, location };
    const company = await Company.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
    });
  if(!company){
    return res.status(404).json({
        message: "Company not found",
        success: false,
      });
    }

    return res.status(200).json({
        message: "Company updated successfully",
        success: true
    })



  } catch (error) {
    console.log("Error in updating company by id:", error);
    return res
      .status(400)
      .json({
        message: "Failed to update company by id",
        error: error.message,
      });
  }
};
