const chai = require("chai");
const  expect = chai.expect;

const getPaymentTokenFromAPI = require("./6-payment_token");

describe.only("getPaymentTokenFromAPI", function() {
    it("should getPaymentTokenFromAPI", function(done) {
        getPaymentTokenFromAPI(true)
        .then(val => {
            expect(val).to.deep.equals({data: 'Successful response from the API' });
            done();
        })
        .catch(err => {
            done(err);
        });
    });
});