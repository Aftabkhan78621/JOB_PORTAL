import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../models/usermodel.js";
import cloudinary from "../utils/cloudinary.js";
import getDataUri from "../utils/datauri.js";

// REGISTER
export const register = async (req, res) => {
  try {
    const { fullName, email, password, phoneNumber, role, profile } = req.body;
    // console.log(fullName, email, password, phoneNumber, role, profile);
    const file = req.file;
    console.log("FILE RECEIVED:", file);

    const fileUri = getDataUri(file);
    const cloudResponse = await cloudinary.uploader.upload(fileUri.content);
    if (!fullName || !email || !password || !phoneNumber || !role) {
      return res
        .status(400)
        .json({ message: "All fields required", success: false });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res
        .status(400)
        .json({ message: "User already exists", success: false });
    }
    console.log("USER EXISTS:", userExists);

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      fullName,
      email,
      password: hashedPassword,
      phoneNumber,
      role,
      profile: {
        profilePhoto: cloudResponse.secure_url,
      },
    });

    res
      .status(201)
      .json({ message: "Account created successfully", success: true });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Register error", success: false });
  }
};

// LOGIN
export const login = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    // ✅ FIXED (|| instead of |)
    if (!email || !password || !role) {
      return res
        .status(400)
        .json({ message: "All fields required", success: false });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ message: "Invalid credentials", success: false });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid credentials, password wrong",
        success: false,
      });
    }

    if (role !== user.role) {
      return res.status(400).json({ message: "Role mismatch", success: false });
    }

    const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });

    res
      .cookie("token", token, {
        httpOnly: true,
        sameSite: "strict",
        maxAge: 24 * 60 * 60 * 1000,
      })
      .status(200)
      .json({
        message: `Welcome ${user.fullName}`,
        success: true,
        user: {
          _id: user._id,
          fullName: user.fullName,
          email: user.email,
          phoneNumber: user.phoneNumber,
          role: user.role,
          profile: user.profile,
        },
      });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Login error", success: false });
  }
};

// LOGOUT
export const logout = async (req, res) => {
  res
    .cookie("token", "", { maxAge: 0 })
    .status(200)
    .json({ message: "Logged out", success: true });
};

// UPDATE PROFILE
export const updateProfile = async (req, res) => {
  try {
    const { fullName, email, phoneNumber, bio, skills } = req.body;
    const file = req.file;

    const user = await User.findById(req.id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    if (fullName) user.fullName = fullName;
    if (email) user.email = email;
    if (phoneNumber) user.phoneNumber = phoneNumber;
    if (bio) user.profile.bio = bio;
    if (skills) user.profile.skills = skills.split(",");

    // ✅ resume upload
    if (file) {
      const fileUri = getDataUri(file);
      const uploadRes = await cloudinary.uploader.upload(fileUri.content, {
        resource_type: "raw", // ✅ MUST
        folder: "resumes",
        timeout: 60000,
      });
      console.log("resume:", uploadRes);

      user.profile.resume = uploadRes.secure_url;
      user.profile.resumeOriginalName = file.originalname;
    }

    await user.save();

    return res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      user,
    });
  } catch (error) {
    console.log("UPDATE PROFILE ERROR 👉", error);
    return res.status(500).json({
      success: false,
      message: "Update profile error",
    });
  }
};
