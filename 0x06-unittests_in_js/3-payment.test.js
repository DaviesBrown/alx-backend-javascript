const chai = require("chai");
const expect = chai.expect;
const sinon = require("sinon");

const { Utils } = require("./utils");
const sendPaymentRequestToApi = require("./3-payment");


describe("sendPaymentRequestToApi", function() {
    it("should return payment request", function() {
        let res = sinon.spy(Utils, "calculateNumber");
        sendPaymentRequestToApi(100, 20);
        expect(res.calledOnceWith("SUM", 100, 20));
    });
});