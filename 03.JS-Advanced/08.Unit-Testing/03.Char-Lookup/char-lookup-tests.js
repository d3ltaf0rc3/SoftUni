const { expect } = require("chai");
const lookupChar = require("./char-lookup");

describe("Char Lookup Unit Tests", () => {
    it("Non-string first param returns undefined", () => {
        expect(lookupChar(5,5)).to.equal(undefined);
    });
    it("Non-num second param returns undefined", () => {
        expect(lookupChar("string", "non-number")).to.equal(undefined);
    });
    it("Index out of boundary returns Incorrect index", () => {
        expect(lookupChar("string",6)).to.equal("Incorrect index");
    });
    it("Floating-point num returns Incorrect index", () => {
        expect(lookupChar("string",3.2)).to.equal(undefined);
    });
    it("Negative index returns Incorrect index", () => {
        expect(lookupChar("string",-1)).to.equal("Incorrect index");
    });
    it("Valid params return char at specified index", () => {
        expect(lookupChar("string",0)).to.equal("s");
        expect(lookupChar("string",5)).to.equal("g");
    });
});