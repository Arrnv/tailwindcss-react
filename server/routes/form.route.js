import { Router } from "express";
import { addForm } from "../controllers/addForm.controller.js";
import { validateEmail } from "../middlewares/validateEmail.js";

const router = Router();

router.post("/addData", validateEmail, addForm);

export default router;
