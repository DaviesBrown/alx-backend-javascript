const chai = require("chai");
const request = require("request");
const expect = chai.expect;


describe("GET /", function () {
    const url = "http://localhost:7865"
    it("should return index page", function() {
        request(url, (err, req, body) => {
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