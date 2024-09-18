const express = require("express");
const dotenv = require("dotenv");
const app = express()
const cors = require('cors');

const mainRoute = require("./api/routes/main");
const { connectionToDB } = require("./api/dbconfig")

app.use(cors());

dotenv.config();

app.use(express.json());
app.use("/api", mainRoute)
app.use("*", (req, res) => {
    res.send("not found")
})
try {
    connectionToDB();
    app.listen(4000, () => {
        console.log("puerto funcionando")
    });
} catch(error) {
    console.error(error);
    process.exit(1)
}
