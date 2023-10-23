import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import formRoute from "./routes/form.route.js";
import connectDB from "./config/db.js";
import errorHandler from "./middlewares/globalErrorHandler.js";

const app = express();
const PORT = process.env.PORT || 5000;
dotenv.config();
connectDB();

app.use(express.json());
app.use(cors());

app.use("/api/v4/form", formRoute);

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
