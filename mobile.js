const express = require("express");
const app = express.Router();
const fs = require("fs");
const path = require("path");

const loginApp = require("express")();
loginApp.use(require("express").urlencoded({ extended: true }));

loginApp.get("/login", (req, res) => {
    const filePath = path.join(__dirname, "mobileLogin.html");
    try {
        const html = fs.readFileSync(filePath, "utf-8");
        res.setHeader("Content-Type", "text/html");
        res.send(html);
    } catch {
        res.status(404).send("Login page not found");
    }
});

loginApp.listen(4545, () => {
    console.log("LawinServer: Login page listening on port 4567");
});

module.exports = app;