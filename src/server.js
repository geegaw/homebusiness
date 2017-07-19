import express from "express";
import bodyParser from "body-parser";
import path from "path";
import client from "./api/clients/router";

const app = express();
app.use(bodyParser.json());
app.use("/api/client", client);
app.use("/api/client", client);
app.use("/public", express.static(path.join(__dirname, "/../public/")));
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/../public/index.html"));
});

app.listen(3001, () => {
    console.log("business app is running on port 3001");
});
