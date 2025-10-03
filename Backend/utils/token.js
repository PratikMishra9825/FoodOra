import jwt from "jsonwebtoken";

const gentoken = async (userId) => {
  try {
    const token = await jwt.sign({ userId }, process.env.JWT_SECRET);
    return token;
  } catch (error) {
    console.log(error);
  }
};

export default gentoken;
