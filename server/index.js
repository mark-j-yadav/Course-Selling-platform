import { app } from "./app.js";
import { connectDB } from "./src/db/index.js";
import dotenv from "dotenv";

dotenv.config({
    path:"./.env"
});


connectDB()
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    })
})
.catch((error) => {
    console.error("Failed to start the server:", error);
    process.exit(1); // Exit the process with failure
})