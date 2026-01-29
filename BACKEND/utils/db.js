import mongoose from "mongoose";


const ConnectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("mongoDB connected successfully");
  } catch (error) {
    console.error(error);
  }
};

export default ConnectDB;
