import express from "express";
import db from "./Config/DBconnection";
import routes from "./Routes/index";

const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

routes(app);

export default app;
