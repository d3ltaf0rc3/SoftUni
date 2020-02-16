const { expect } = require("chai");
const mathEnforcer = require("./math-enforcer");

describe("Math Enforcer Unit Tests", () => {
    describe("addFive Unit Tests", () => {
        it("Should return undefined if param is not a num", () => {
            expect(mathEnforcer.addFive("notANum")).to.equal(undefined);
        });
        it("Should return result if param is a num", () => {
            expect(mathEnforcer.addFive(1)).to.equal(6);
        });
        it("Should return result if param is a negative num", () => {
            expect(mathEnforcer.addFive(-1)).to.equal(4);
        });
        it("Should return result if param is a floating-point num", () => {
            expect(mathEnforcer.addFive(1.1)).to.closeTo(6.1, 0.01);
        });
        it("Should return result if param is a negative floating-point num", () => {
            expect(mathEnforcer.addFive(-1.1)).to.closeTo(3.9, 0.01);
        });
    });
    describe("subtractTen Unit Tests", () => {
        it("Should return undefined if param is not a num", () => {
            expect(mathEnforcer.subtractTen("notANum")).to.equal(undefined);
        });
        it("Should return result if param is a num", () => {
            expect(mathEnforcer.subtractTen(10)).to.equal(0);
        });
        it("Should return result if param is a negative num", () => {
            expect(mathEnforcer.subtractTen(-1)).to.equal(-11);
        });
        it("Should return result if param is a floating-point num", () => {
            expect(mathEnforcer.subtractTen(1.1)).to.closeTo(-8.9, 0.01);
        });
        it("Should return result if param is a negative floating-point num", () => {
            expect(mathEnforcer.subtractTen(-1.1)).to.closeTo(-11.1, 0.01);
        });
    });
    describe("sum Unit Tests", () => {
        it("Should return undefined if first param is not a num", () => {
            expect(mathEnforcer.sum("notANum", 1)).to.equal(undefined);
        });
        it("Should return undefined if second param is not a num", () => {
            expect(mathEnforcer.sum(1, "notANum")).to.equal(undefined);
        });
        it("Should return result if both params are nums", () => {
            expect(mathEnforcer.sum(1, 1)).to.equal(2);
        });
        it("Should return result if both params are negative nums", () => {
            expect(mathEnforcer.sum(-1, -1)).to.equal(-2);
        });
        it("Should return result if both params are negative floating-point nums", () => {
            expect(mathEnforcer.sum(-1.1, -1.1)).to.closeTo(-2.2,0.01);
        });
        it("Should return result if both params are floating-point nums", () => {
            expect(mathEnforcer.sum(1.1, 1.1)).to.closeTo(2.2,0.01);
        });
    });
});