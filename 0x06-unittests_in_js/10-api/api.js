const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200);
    res.send("Welcome to the payment system");
});

app.get("/cart/:id(\\d+)", (req, res) => {
    res.status(200);
    res.send(`Payment methods for cart ${req.params.id}`);
});

app.get("/available_payments", (req, res) => {
    const payment = {
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
    };
    res.status(200);
    res.json(payment);
});

app.post('/login', (req, res) => {
    const userName = req.body && req.body.userName;
    if (userName) {
        res.send(`Welcome ${userName}`);
    } else {
        res.status(400).send("Invalid request: Missing userName");
    }
});

const PORT = 7865;
app.listen(PORT, () => console.log(`API available on localhost port ${PORT}`));
