import express from "express";
import morgan from "morgan";
const app = express();

//Importing routes
import projectRoute from "./routes/projects.js";
import projectTask from "./routes/tasks.js";

//Middleware
app.use(morgan("dev"));
app.use(express.json());

//routes
app.use("/api/projects", projectRoute);
app.use("/api/tasks", projectTask);
export default app;
