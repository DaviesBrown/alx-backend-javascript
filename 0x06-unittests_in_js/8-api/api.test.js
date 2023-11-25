const chai = require("chai");
const request = require("request");
const expect = chai.expect;


describe("getIndexPage", function () {
    const url = "http://localhost:7865"
    it("should return index page", function() {
        request(url, (err, req, body) => {
            expect(req.statusCode).to.equal(200);
            console.log(body)
            expect(body).to.equal("Welcome to the payment system")
        });
    });
    it.skip("should return 'Welcome to the payment system'", function() {
        expect(calculateNumber("SUM", 1, 2)).to.equal(3);
    });
    it.skip("should return status code 200", function() {
    });
});