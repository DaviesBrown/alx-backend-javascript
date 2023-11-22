const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.status(200);
    res.send("Welcome to the payment system");
});

PORT = 7865;
app.listen(PORT, () => console.log(`API available on localhost port ${PORT}`));
