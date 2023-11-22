const chai = require("chai");
const expect = chai.expect;
const sinon = require("sinon");

const { Utils } = require("./utils");
const sendPaymentRequestToApi = require("./3-payment");


describe("sendPaymentRequestToApi", function() {
    it("should return payment request", function() {
        const calculateNumberInStub = sinon.stub(Utils, "calculateNumber").returns(10);
        const logMessage = sinon.spy(console, "log");
        
        sendPaymentRequestToApi(100, 20);

        expect(calculateNumberInStub.calledOnceWith("SUM", 100, 20));
        expect(logMessage.calledOnce).to.be.true;
        expect(logMessage.calledWith("The total is: 10")).to.be.true;
    });
});