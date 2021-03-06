import express from "express";
import bodyParser from "body-parser";
import path from "path";
import client from "./api/clients/router";
import mongo from "./db/mongo";

const app = express();
app.use(bodyParser.json());
app.use("/api/clients", client);
app.use("/public", express.static(path.join(__dirname, "/../public/")));
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/../public/index.html"));
});

mongo.connect().then(() => {
    app.listen(3001, () => {
        console.log("business app is running on port 3001");
    });
}).catch(console.fatal);
