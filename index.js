const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello, CI/CD Pipeline!");
});

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = { app, server }; // Export the server
