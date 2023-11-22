const chai = require("chai");
const expect = chai.expect;
const sinon = require("sinon");

const { Utils } = require("./utils");
const sendPaymentRequestToApi = require("./3-payment");


describe("sendPaymentRequestToApi", function() {
    let logMessage;
    beforeEach(function() {
        logMessage = sinon.spy(console, "log");
      });

    it("should sendPaymentRequestToAPI with 100, and 20", function() {        
        sendPaymentRequestToApi(100, 20);
        expect(logMessage.calledOnce).to.be.true;
        expect(logMessage.calledWith("The total is: 120")).to.be.true;
    });
    
    it("should sendPaymentRequestToAPI with 10, and 10", function() {        
        sendPaymentRequestToApi(10, 10);
        expect(logMessage.calledOnce).to.be.true;
        expect(logMessage.calledWith("The total is: 20")).to.be.true;
    });
    
    this.afterEach(function() {
        logMessage.restore();
    });
});

