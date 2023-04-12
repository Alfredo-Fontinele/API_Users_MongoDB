import mongoose from "mongoose";
import "dotenv/config";

const verifyEnvVariables = () => {
    const url = process.env.MONGO_URL;
    if (!url) {
        throw new Error("Missing Mongo Url connection");
    }
    return { url };
};

export const connectDatabase = async () => {
    const { url } = verifyEnvVariables();
    return await mongoose
        .connect(url)
        .then(() => {
            console.log("MongoDB Connected...");
        })
        .catch((err) => console.log(err));
};
