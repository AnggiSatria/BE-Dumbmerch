const express = require("express");

const app = express();

const router = require("./src/routes")

const PORT = 5000;

app.use(express.json())

app.use("/api/v1", router)

app.listen(PORT, () => console.log(`server running on port : ${PORT}!`))