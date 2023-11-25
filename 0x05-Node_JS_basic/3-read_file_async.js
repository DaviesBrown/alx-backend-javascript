const fs = require("fs");
const readline = require("readline");

module.exports = function countStudents(path) {
    return new Promise((resolve, reject) => {
            const stream = fs.createReadStream(path);
            const reader = readline.createInterface({input: stream});
        
            let data = [];
            reader.on('error', () => {
                reject(new Error("Cannot load the database"));
            });
        
            reader.on("line", row => {
                if (row) data.push(row.split(","));
            });
        
            function getField(data) {
                const fields = [...new Set(data.map(e => e[3]))];
                return fields;
            }
            function getFieldCount(field) {
                const fieldc = data.filter((e) => e[3] === field);
                return fieldc.length;
            }
            function getNames(field, data) {
                const fieldn = data.filter((e) => {
                    if (e[3] === field) {
                        return e[3];
                    }
                });
                return fieldn.map(e => e[0]);
            }
            reader.on("close", (err) => {
                data = data.slice(1);
                console.log("Number of students:", data.length);
                const result = {
                    "numOfStudent": data.length,
                }
                fields = getField(data);
                fields.map(e => {
                    result[e] = getNames(e, data).join(", ");
                    nameList = getNames(e, data).join(", ");
                    console.log(`Number of students in ${e}: ${getFieldCount(e)}. List: ${nameList}`);
                });
                resolve(result);
            });
        });
    };
    /* module.exports = function countStudents(path) {
        let stream;
        stream = fs.createReadStream(path);
        const reader = readline.createInterface({input: stream});
    
        let data = [];
        reader.on('error', () => {
            throw new Error("Cannot load the database");
        });
    
        reader.on("line", row => {
            if (row) data.push(row.split(","));
        });
    
        function getField(data) {
            const fields = [...new Set(data.map(e => e[3]))];
            return fields;
        }
        function getFieldCount(field) {
            const fieldc = data.filter((e) => e[3] === field);
            return fieldc.length;
        }
        function getNames(field, data) {
            const fieldn = data.filter((e) => {
                if (e[3] === field) {
                    return e[3];
                }
            });
            return fieldn.map(e => e[0]);
        }
        reader.on("close", (err) => {
            data = data.slice(1);
            console.log("Number of students:", data.length);
            fields = getField(data);
            fields.map(e => {
                nameList = getNames(e, data).join(", ");
                console.log(`Number of students in ${e}: ${getFieldCount(e)}. List: ${nameList}`);
            });
        });
    }

 */