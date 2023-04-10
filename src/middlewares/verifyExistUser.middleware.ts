import { Request, Response, NextFunction } from "express";
import { User } from "../entities/User";

export const verifyExistUser = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const existUser = await User.findOne({
        email: req.body.email,
    });
    if (!existUser) {
        return res.status(400).json({
            message: "User Not Exist",
        });
    }
    return next();
};
