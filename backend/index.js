import dotenv from "dotenv";
import express from "express";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRoutes from "./routes/auth.route.js";
import groupRoutes from "./routes/group.route.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}
));

app.use("/api/auth", authRoutes);
app.use("/api/group", groupRoutes);

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`);
    connectDB();
})