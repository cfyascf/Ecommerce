import { connectDb } from "./startup/db.js";
import app from "./app.js";

const startServer = () => {
    try {
        connectDb()

        const port = process.env.PORT;
        app.listen(port, () => console.log(`Listening on port ${port}`));
    } catch(err) {
        console.error("Error connecting to database.");
    }
}

startServer();