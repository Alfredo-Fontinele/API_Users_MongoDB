import { UsersService } from "../services/users.service";
import { Request, Response } from "express";

export const UsersController = {
    async create(req: Request, res: Response) {
        const data = await UsersService.create(req.body);
        return res.status(201).json(data);
    },
    async findAll(req: Request, res: Response) {
        const data = await UsersService.findAll();
        return res.json(data);
    },
    async findOne(req: Request, res: Response) {
        const data = await UsersService.findOne(req.params.id);
        return res.json(data);
    },
    async update(req: Request, res: Response) {
        const data = await UsersService.update(req.params.id, req.body);
        return res.json(data);
    },
    async delete(req: Request, res: Response) {
        const data = await UsersService.delete(req.params.id);
        return res.status(204).json(data);
    },
};
