import { Request, Response, NextFunction } from "express";
import * as yup from "yup";

export const validateSchema =
    (schema: yup.Schema) =>
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            await schema.validate(req.body, {
                stripUnknown: true,
                abortEarly: true,
            });
            return next();
        } catch (err: any) {
            return res.status(400).json({
                message: err.message,
            });
        }
    };
