const chai = require("chai");
const expect = chai.expect;
const calculateNumber = require("./2-calcul_chai");


describe("Addition", function () {
    it("checks 1 + 2 = 3", function() {
        expect(calculateNumber("SUM", 1, 2)).to.equal(3);
    });
    it("checks 1 + 3.7 = 5", function() {
        expect(calculateNumber("SUM", 1, 3.7)).to.equal(5);
    });
    it("checks 1.2 + 3.7 = 5", function() {
        expect(calculateNumber("SUM", 1.2, 3.7)).to.equal(5);
    });
    it("checks 1.5 + 3.7 = 6", function() {
        expect(calculateNumber("SUM", 1.5, 3.7)).to.equal(6);
    });
});

describe("Substraction", function () {
    it("checks 1.4 - 4.5 = -4", function() {
        expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });
    it("checks 3.5 - 3.7 = 0", function() {
        expect(calculateNumber('SUBTRACT', 3.5, 3.7)).to.equal(0);
    });
    it("checks 10 - 6 = 4", function() {
        expect(calculateNumber('SUBTRACT', 10, 6)).to.equal(4);
    });
    it("checks 10.5 - 3 = 7", function() {
        expect(calculateNumber('SUBTRACT', 10.5, 3)).to.equal(8);
    });
});

describe("Division", function () {
    it("checks 1.4 / 4.5 = 0.2", function() {
        expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });
    it("checks 5 / 2 = 2.5", function() {
        expect(calculateNumber('DIVIDE', 5, 2)).to.equal(2.5);
    });
    it("checks 5.5 / 2 = 3", function() {
        expect(calculateNumber('DIVIDE', 5.5, 2)).to.equal(3);
    });
    it("checks 1.4 / 0 = 'Error'", function() {
        expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal("Error");
    });
});
