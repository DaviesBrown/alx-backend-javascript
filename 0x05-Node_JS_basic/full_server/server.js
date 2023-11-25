const express = require("express");

const app = express();
const database = process.argv[2];

const router = require("./routes/index");
app.use("/", router);


const PORT = 1245;
app.listen(PORT, () => console.log('listening on port 1245'));

export default app;
