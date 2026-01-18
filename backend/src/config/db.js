import mongoose from 'mongoose'

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTIONSTRING)
    console.log("MongoDB connected successfully")

  } catch (error) {
    console.log("MongoDB connection failed:", error)
    process.exit(1)// thoát khỏi ứng dụng nếu không kết nối được DB
  }
}