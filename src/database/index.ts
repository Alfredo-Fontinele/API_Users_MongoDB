import mongoose from "mongoose";
import "dotenv/config";

const verifyEnvVariables = () => {
    const user = process.env.MONGO_USER;
    const password = process.env.MONGO_PASSWORD;
    if (!user || !password) {
        throw new Error("Missing Env Variables User and Password");
    }
    return { user, password };
};

export const connectDatabase = async () => {
    const { user, password } = verifyEnvVariables();
    await mongoose
        .connect(
            `mongodb+srv://${user}:${password}@db-users-mongo.xhn7dld.mongodb.net/?retryWrites=true&w=majority`
        )
        .then(() => {
            console.log("MongoDB Connected...");
        })
        .catch((err) => console.log(err));
};
