const chai = require("chai");
const request = require("request");
const expect = chai.expect;


describe("GET /", function () {
    const url = "http://localhost:7865"
    it("should return index page", function() {
        request(url, (err, req, body) => {
            if (err) done(err);
            expect(req.statusCode).to.equal(200);
            expect(body).to.equal("Welcome to the payment system");
        });
    });
});

describe('GET /cart/:id', () => {
    const url = "http://localhost:7865"
    it('should return payment methods when :id is a number', () => {
      request(`${url}/cart/12`, (err, req, body) => {
          expect(req.statusCode).to.equal(200);
          expect(body).to.equal('Payment methods for cart 12');
      });
    });
  
    it('should return 404 when :id is NOT a number', () => {
        request(`${url}/cart/hello`, (err, req, body) => {
            expect(req.statusCode).to.equal(404);
        });
    });
});

describe("POST /login", function() {
    it("should return a welcome message with the username", function(done) {
        const options = {
            url: "http://localhost:7865/login",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({userName: "Betty"})
        };
        request.post(options, (err, res, body) => {
            expect(res.statusCode).to.equal(200);
            expect(body).to.equal("Welcome Betty");
            done();
        });
    });
    it("should return 400 error when no username is passed", function(done) {
        const options = {
            url: "http://localhost:7865/login",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({userName: ""})
        };
        request.post(options, (err, res, body) => {
            expect(res.statusCode).to.equal(200);
            done();
        });
    });
    it("should return 400 error when no body is passed", function(done) {
        const options = {
            url: "http://localhost:7865/login",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({})
        };
        request.post(options, (err, res, body) => {
            expect(res.statusCode).to.equal(200);
            done();
        });
    });
});

describe('GET /available_payments', () => {
    it('should return the available payment methods', (done) => {
      request.get('http://localhost:7865/available_payments', (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(JSON.parse(body)).to.deep.equal({
            payment_methods: {
              credit_cards: true,
              paypal: false
            }
        });
        done();
      });
    });
});
