import { connectDatabase } from "./database";
import { app } from "./app";
import "dotenv/config";

const PORT = process.env.PORT;

app.listen(PORT, async () => {
    await connectDatabase();
    console.log(`Server is running in http://localhost:${PORT}`);
});
