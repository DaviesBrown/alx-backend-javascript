

class AppController {
    static getHomePage(req, res) {
        res.status_code = 200;
        res.message = "Hello Holberton School!";
        return res;
    }
}