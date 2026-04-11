import mongoose from "mongoose";
const connectDb = async () => {
    try {
        const url = process.env.MongoDB_URL;
        if (!url) {
            console.error("Error: MongoDB_URL is not defined in environment variables.")
            process.exit(1)
        }
        await mongoose.connect(url)
        console.log("db connected successfully")
    } catch (error) {
        console.error("DB connection error:", error.message)
        process.exit(1)
    }
}
export default connectDb