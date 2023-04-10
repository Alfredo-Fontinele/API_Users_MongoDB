import { userRoutes } from "./users.routes";
import { Router } from "express";

export const routes = Router();

routes.use("/api", userRoutes);
