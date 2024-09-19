const express = require("express");
const dotenv = require("dotenv");
const app = express()
const cors = require('cors');
const mainRoute = require("./api/routes/main");
const { connectionToDB } = require("./api/dbconfig")
dotenv.config();

app.use(cors());

app.use(express.json());
app.use("/", (req, res) => {
    res.status(200).send("Welcome to playas realty real state, powered by CACAO")
})
app.use("/api", mainRoute)
app.use("*", (req, res) => {
    res.status(404).json({
        error:"not found",
    })
})
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Internal server error" });
});

const port = process.env.PORT || 8080;
try {
    connectionToDB();
    app.listen(port, () => {
        console.log("puerto funcionando: "+ port)
    });
} catch(error) {
    console.error(error);
    process.exit(1)
}
