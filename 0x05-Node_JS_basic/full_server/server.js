#!/usr/bin/node

const express = require("express");
const countStudents = require("./3-read_file_async");

const app = express();
const database = process.argv[2];

const routes = require("./routes/index");
app.use("/", routes)

app.listen(1245);