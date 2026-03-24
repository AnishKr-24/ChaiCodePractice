import mongoose from "mongoose";

const connectDB =  async () =>  {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    consol.log(`MongoDB connected: ${conn.connection.host}`);
}

export default connectDB;