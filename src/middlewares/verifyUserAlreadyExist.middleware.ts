import { Request, Response, NextFunction } from "express";
import { User } from "../entities/User";

export const verifyUserAlreadyExist = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const userAlreadyExist = await User.findOne({
        email: req.body.email,
    });
    if (userAlreadyExist) {
        return res.status(400).json({
            message: "User Already Exist",
        });
    }
    return next();
};
