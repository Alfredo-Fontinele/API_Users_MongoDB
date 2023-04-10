declare namespace NodeJS {
    interface ProcessEnv {
        PORT: number;
        MONGO_USER: string;
        MONGO_PASSWORD: string;
    }
}
