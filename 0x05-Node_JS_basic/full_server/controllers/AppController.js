class AppController {
  static getHomePage(req, res) {
    res.status(200);
    res.send('Hello Holberton School!');
    return res;
  }
}

module.exports = AppController;
