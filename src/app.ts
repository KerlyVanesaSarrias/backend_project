import express from "express"
import userRoutes from "./routes/user.routes";
import locationRoutes from "./routes/location.routes";
import touristPlanRoutes from "./routes/touristPlan.routes";
import reservationRoutes from "./routes/reservation.routes"
import connectDB from "./config/database";
import { errorHandler } from "./middlewares/error.middleware";
import cors from "cors";
import bodyParser from "body-parser";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerOptions from "./config/swaggerConfig";
import swaggerUi from 'swagger-ui-express';

connectDB()
console.log("API Node en ejecución");


const app = express();

app.use(cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const swaggerSpec = swaggerJSDoc(swaggerOptions)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))


app.use(express.json());
app.use("/api/users", userRoutes )
app.use("/api/locations", locationRoutes);
app.use("/api/touristPlans", touristPlanRoutes);
app.use("/api/reservations", reservationRoutes);
app.use(errorHandler)

export default app;