import formModel from "../models/form.model.js";

export const addForm = async (req, res, next) => {
  const { fullName, phone, email, address, pincode } = req.body;

  if (!fullName || !phone || !email || !address || !pincode) {
    return next({
      status: 400,
      success: false,
      message: "Please fill all the fields",
    });
  }

  if (phone.length != 10) {
    return next({
      status: 400,
      success: false,
      message: "Please provide a valid phone number",
    });
  }

  const form = new formModel({
    fullName,
    phone,
    email,
    address,
    pincode,
  });

  const data = await form.save();

  res.status(201).json({
    success: true,
    data: data,
    message: "Form submitted successfully",
  });
};
