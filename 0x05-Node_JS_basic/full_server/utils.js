#!/usr/bin/node
const fs = require("fs");
const readline = require("readline");


module.exports = function readDatabase(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, data) => {
            if (error) {
                reject(new Error(err.message));
            }
            console.log(data)
        });
    });
}