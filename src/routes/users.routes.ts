import { verifyUserAlreadyExist } from "../middlewares/verifyUserAlreadyExist.middleware";
import { createUserSchema, updateUserSchema } from "../schemas/users.schema";
import { verifyExistUser } from "../middlewares/verifyExistUser.middleware";
import { validateSchema } from "../middlewares/validateSchema.middleware";
import { UsersController } from "../controllers/users.controller";
import { Router } from "express";

export const userRoutes = Router();

userRoutes.get("/users", UsersController.findAll);

userRoutes.get("/users/:id", verifyExistUser, UsersController.findOne);

userRoutes.post(
    "/users",
    validateSchema(createUserSchema),
    verifyUserAlreadyExist,
    UsersController.create
);

userRoutes.patch(
    "/users/:id",
    validateSchema(updateUserSchema),
    verifyExistUser,
    UsersController.update
);

userRoutes.delete("/users/:id", verifyExistUser, UsersController.delete);
