const { expect } = require("chai");
const isOddOrEven = require("./oddOrEven");

describe("Odd or Even Unit Tests", () => {
    it("Non-string input returns undefined", () => {
        expect(isOddOrEven(5)).to.equal(undefined);
        expect(isOddOrEven([1, 2, 3, 4])).to.equal(undefined);
        expect(isOddOrEven({ "1": 1 })).to.equal(undefined);
    });
    it("String with an even length returns even", () => {
        expect(isOddOrEven("even")).to.equal("even");
        expect(isOddOrEven("ItIsEven")).to.equal("even");
    });
    it("String with an odd length returns odd", () => {
        expect(isOddOrEven("odd")).to.equal("odd");
        expect(isOddOrEven("ItIsOdd")).to.equal("odd");
    });
});