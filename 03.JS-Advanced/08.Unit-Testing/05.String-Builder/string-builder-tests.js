const { expect } = require("chai");
const assert = require("chai").assert;
const StringBuilder = require("./string-builder");

describe("String Builder Unit Tests", () => {
    describe("Instantiation tests", () => {
        it("Instantiation w/o a param should create an empty array", () => {
            expect(JSON.stringify(new StringBuilder()._stringArray)).to.equal(JSON.stringify([]));
        });
        it("Instantiation with a param should create an array from the string", () => {
            expect(JSON.stringify(new StringBuilder("string")._stringArray)).to.equal(JSON.stringify(["s", "t", "r", "i", "n", "g"]));
        });
        it("Instantiation with a non-string param should throw an error", () => {
            expect(() => new StringBuilder(1)).to.throw(Error);
        });
        it("Instantiation with a non-string param should throw an error", () => {
            expect(() => new StringBuilder({})).to.throw(Error);
        });
        it("includes all properties", () => {
            assert.isFunction(StringBuilder.prototype.append);
            assert.isFunction(StringBuilder.prototype.prepend);
            assert.isFunction(StringBuilder.prototype.insertAt);
            assert.isFunction(StringBuilder.prototype.remove);
            assert.isFunction(StringBuilder.prototype.toString);
        });
    });
    
    describe("append() tests", () => {
        it("Append method should add the string to the end of the array", () => {
            let stringBuilder = new StringBuilder("str1");
            expect(stringBuilder.append("str2")).to.equal(undefined);
            expect(JSON.stringify(stringBuilder._stringArray)).to.equal(JSON.stringify(["s", "t", "r", "1", "s", "t", "r", "2"]));
        });
        it("Apend method should add the string to the array if it's empty", () => {
            let stringBuilder = new StringBuilder();
            expect(stringBuilder.append("str")).to.equal(undefined);
            expect(JSON.stringify(stringBuilder._stringArray)).to.equal(JSON.stringify(["s", "t", "r"]));
        });
        it("Append method should throw an error if param is not a string", () => {
            let stringBuilder = new StringBuilder("str");
            expect(() => stringBuilder.append(1)).to.throw(Error);
        });
    });
    
    describe("prepend() tests", () => {
        it("Prepend method should add the string to the beginning of the array", () => {
            let stringBuilder = new StringBuilder("str1");
            expect(stringBuilder.prepend("str2")).to.equal(undefined);
            expect(JSON.stringify(stringBuilder._stringArray)).to.equal(JSON.stringify(["s", "t", "r", "2", "s", "t", "r", "1"]));
        });
        it("Prepend method should add the string to the array if it's empty", () => {
            let stringBuilder = new StringBuilder();
            expect(stringBuilder.prepend("str")).to.equal(undefined);
            expect(JSON.stringify(stringBuilder._stringArray)).to.equal(JSON.stringify(["s", "t", "r"]));
        });
        it("Prepend method should throw an error if param is not a string", () => {
            let stringBuilder = new StringBuilder("str");
            expect(() => stringBuilder.prepend(1)).to.throw(Error);
        });
    });
    
    describe("insertAt() tests", () => {
        it("InsertAt method should insert the string at the given index", () => {
            let stringBuilder = new StringBuilder("str1");
            expect(stringBuilder.insertAt("str2", 1)).to.equal(undefined);
            expect(JSON.stringify(stringBuilder._stringArray)).to.equal(JSON.stringify(["s", "s", "t", "r", "2", "t", "r", "1"]));
        });
        it("InsertAt method should throw an error if param is not a string", () => {
            let stringBuilder = new StringBuilder("str");
            expect(() => stringBuilder.insertAt(1, 1)).to.throw(Error);
        });
    });
    
    describe("remove() tests", () => {
        it("Remove method should remove elements from the array", () => {
            let stringBuilder = new StringBuilder("string");
            expect(stringBuilder.remove(1,1)).to.equal(undefined);
            expect(JSON.stringify(stringBuilder._stringArray)).to.equal(JSON.stringify(["s","r","i","n","g"]));
        });
        it("Remove method shouldn't remove any elements from the array if length is 0", () => {
            let stringBuilder = new StringBuilder("string");
            expect(stringBuilder.remove(1,0)).to.equal(undefined);
            expect(JSON.stringify(stringBuilder._stringArray)).to.equal(JSON.stringify(["s","t","r","i","n","g"]));
        });
        it("Remove method should remove elements from the array if length is out of boundary", () => {
            let stringBuilder = new StringBuilder("string");
            expect(stringBuilder.remove(4,4)).to.equal(undefined);
            expect(JSON.stringify(stringBuilder._stringArray)).to.equal(JSON.stringify(["s","t","r","i"]));
        });
    });
    
    describe("toString() tests", () => {
        it("ToString method should return a string with all elements joined by an empty string", () => {
            let stringBuilder = new StringBuilder("string");
            expect(stringBuilder.toString()).to.equal("string");
        });
        it("ToString method should return a string with all elements joined by an empty string", () => {
            let stringBuilder = new StringBuilder();
            expect(stringBuilder.toString()).to.equal("");
        });
    });
});