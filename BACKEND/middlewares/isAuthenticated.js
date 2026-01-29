import jwt from "jsonwebtoken";

const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    //  token nhi ho tb
    if (!token) {
      return res.status(401).json({
        message: "Unauthorized : not authenticated,no token provided",
        success: false,
      });
    }
    // token ho tb

    const decode = await jwt.verify(token, process.env.SECRET_KEY);
    if (!decode) {
      return res.status(401).json({
        message: "invalid token",
        success: false,
      });
    }
    req.id = decode.userId;
    next();
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Server Error from isAuthenticated middleware",
      success: false,
    });
  }
};

export default isAuthenticated;
