import { User } from "../entities/User";
import { updateUserSchema } from "../schemas/users.schema";

interface IUserCreate {
    name: string;
    email: string;
    password: string;
}

interface IUserUpdate {
    name?: string;
    email?: string;
    password?: string;
}

export const UsersService = {
    options: "name email",
    async create(body: IUserCreate) {
        const newUser = await User.create(body);
        return await User.findById(newUser._id).select(this.options);
    },
    async findAll() {
        return await User.find().select(this.options);
    },
    async findOne(id: string) {
        return await User.findOne({
            where: {
                id,
            },
        }).select(this.options);
    },
    async update(id: string, body: IUserUpdate) {
        const validatedBody = await updateUserSchema.validate(body, {
            stripUnknown: true,
        });
        return await User.findByIdAndUpdate(id, validatedBody, { new: true });
    },
    async delete(id: string) {
        return await User.deleteOne({
            where: {
                id,
            },
        });
    },
};
