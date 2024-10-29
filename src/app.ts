import express from "express"
import userRoutes from "./routes/user.routes";
import locationRoutes from "./routes/location.routes";
import connectDB from "./config/database";
import { errorHandler } from "./middlewares/error.middleware";

connectDB()

const app = express();
app.use(express.json());
app.use("/users", userRoutes )
app.use("/locations", locationRoutes);
app.use(errorHandler)

export default app;