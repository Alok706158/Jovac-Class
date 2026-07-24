const express = require("express");
const app = express();

const middleware = (req, res, next) => {
    console.log("Middleware is running...");
    next();
};

app.use(middleware);

app.get("/", (req, res) => {
    res.send("Main page");
});

app.get("/about", (req, res) => {
    res.send("About page");
});

app.get("/users/:id", (req, res) => {
    res.send(`User ID: ${req.params.id}`);
});

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});