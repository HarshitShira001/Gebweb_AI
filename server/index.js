import "dotenv/config";
import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser"
import connectDb from "./config/db.js";
import authRouter from "./routes/auth.routes.js";
import billingRouter from "./routes/billing.routes.js";
import userRouter from "./routes/user.routes.js";
import websiteRouter from "./routes/websites.routes.js";
import { razorpayWebhook } from "./controllers/razorpayWebhook.js";
const app = express();

app.post("/api/razorpay/webhook",express.raw({type:"application/json"}),razorpayWebhook)
const PORT = process.env.PORT || 5000;

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: "https://gebweb-ai-1.onrender.com",
    credentials: true
}))
app.use("/api/auth", authRouter)
app.use("/api/user", userRouter)
app.use("/api/website", websiteRouter)
app.use("/api/billing", billingRouter)
connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`)
    })
})
