import createError from "../utils/createError.js";

export const validateEmail = async (req, res, next) => {
  const { email, driverEmail } = req.body;

  // Check if the email is valid
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!regex.test(email) && !regex.test(driverEmail)) {
    return createError(req, res, next, "Please provide a valid email", 400);
  } else {
    next();
  }
};
