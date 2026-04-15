import mongoose from "mongoose";


export const connectDB = async () => {
    try {
        const response  = await mongoose.connect(process.env.DB_URI)
        console.log("Connected to MongoDB successfully", response.connection.host);
  
    } catch (error) {
            console.error("Failed to connect to MongoDB:", error);
            process.exit(1); // Exit the process with failure
    }
}