const assert = require("assert");
const calculateNumber = require("./1-calcul.js");


describe("Addition", function () {
    it("checks 1 + 2 = 3", function() {
        assert.equal(calculateNumber("SUM", 1, 2), 3);
    });
    it("checks 1 + 3.7 = 5", function() {
        assert.equal(calculateNumber("SUM", 1, 3.7), 5);
    });
    it("checks 1.2 + 3.7 = 5", function() {
        assert.equal(calculateNumber("SUM", 1.2, 3.7), 5);
    });
    it("checks 1.5 + 3.7 = 6", function() {
        assert.equal(calculateNumber("SUM", 1.5, 3.7), 6);
    });
});

describe("Substraction", function () {
    it("checks 1.4 - 4.5 = -4", function() {
        assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });
    it("checks 3.5 - 3.7 = 0", function() {
        assert.equal(calculateNumber('SUBTRACT', 3.5, 3.7), 0);
    });
    it("checks 10 - 6 = 4", function() {
        assert.equal(calculateNumber('SUBTRACT', 10, 6), 4);
    });
    it("checks 10.5 - 3 = 7", function() {
        assert.equal(calculateNumber('SUBTRACT', 10.5, 3), 8);
    });
});

describe("Division", function () {
    it("checks 1.4 / 4.5 = 0.2", function() {
        assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });
    it("checks 5 / 2 = 2.5", function() {
        assert.equal(calculateNumber('DIVIDE', 5, 2), 2.5);
    });
    it("checks 5.5 / 2 = 3", function() {
        assert.equal(calculateNumber('DIVIDE', 5.5, 2), 3);
    });
    it("checks 1.4 / 0 = 'Error'", function() {
        assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
});
