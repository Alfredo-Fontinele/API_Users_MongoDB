import { createUserSchema, updateUserSchema } from "../schemas/users.schema";
import { User } from "../entities/User";

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
    fields_user: "name email",
    async create(body: IUserCreate) {
        const validatedBody = await createUserSchema.validate(body, {
            stripUnknown: true,
        });
        const newUser = await User.create(validatedBody);
        return await User.findById(newUser._id).select(this.fields_user);
    },
    async findAll() {
        return await User.find().select(this.fields_user);
    },
    async findOne(id: string) {
        return await User.findOne({
            where: {
                id,
            },
        }).select(this.fields_user);
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
