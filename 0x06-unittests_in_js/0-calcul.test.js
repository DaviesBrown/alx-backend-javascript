const assert = require("assert");
const calculateNumber = require("./0-calcul")

describe("Calculate Addition of Numbers", function () {
    it("checks 1 + 2 = 3", function() {
        assert.equal(calculateNumber(1, 2), 3)
    });
    it("checks 1 + 3.7 = 5", function() {
        assert.equal(calculateNumber(1, 3.7), 5)
    });
    it("checks 1.2 + 3.7 = 5", function() {
        assert.equal(calculateNumber(1.2, 3.7), 5)
    });
    it("checks 1.5 + 3.7 = 6", function() {
        assert.equal(calculateNumber(1.5, 3.7), 6)
    });
});
