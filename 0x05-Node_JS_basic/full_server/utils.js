const fs = require("fs");

module.exports = function readDatabase(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, data) => {
            if (!err) {
                const list = data.toString().trim().split("\n");
                const fields = list.map(e => e.split(","));
                const csList = fields.filter(e => e[3] === "CS");
                const csNames = csList.map(e => e[0]);
                const sweList = fields.filter(e => e[3] === "SWE");
                const sweNames = sweList.map(e => e[0]);
                let studentsPerField = {
                    CS: csNames,
                    SWE: sweNames
                };
                resolve(studentsPerField);
            } else {
                reject(new Error());
            }
        });
    });
}
