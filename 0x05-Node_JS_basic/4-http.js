const http = require("http")

const app = http.createServer();

// Listen to the request event
app.on('request', (request, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Hello Holberton School!");
    res.end();
});
app.listen(1245);

module.exports = app;