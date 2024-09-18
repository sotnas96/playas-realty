const express = require("express");
const dotenv = require("dotenv");
const app = express()
const cors = require('cors');
dotenv.config();
const port = process.env.PORT || 8081;
const mainRoute = require("./api/routes/main");
const { connectionToDB } = require("./api/dbconfig")

app.use(cors());



app.use(express.json());
app.use("/api", mainRoute)
app.use("*", (req, res) => {
    res.send("not found")
})
try {
    connectionToDB();
    app.listen(port, () => {
        console.log("puerto funcionando: "+ port)
    });
} catch(error) {
    console.error(error);
    process.exit(1)
}
