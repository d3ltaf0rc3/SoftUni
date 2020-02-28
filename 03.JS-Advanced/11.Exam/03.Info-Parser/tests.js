let Parser = require("./solution.js");
let { expect } = require("chai");
describe("Parser Unit Tests", () => {
    let instance;
    beforeEach(() => {
        instance = new Parser('["string", 1, {}]');
    });

    it("Instantiation", () => {
        expect(instance._data).to.deep.equal(["string", 1, {}]);
        expect(instance._log).to.deep.equal([]);
        expect(typeof instance._addToLog).to.equal("function");
    });

    describe("Getter data Unit Tests", () => {
        it("Test functionality", () => {
            expect(instance._data).to.deep.equal(["string", 1, {}]);
        });

        it("Check log", () => {
            instance.data;
            expect(instance._log).to.deep.equal(["0: getData"]);
        });

        it("If an object has a property deleted : true, the object shouldn't be returned", () => {
            instance = new Parser('[{"string":1}, 1]');
            instance.removeEntry("string");
            expect(instance.data).to.deep.equal([1]);
        });
    });

    describe("Print function Unit Tests", () => {
        it("Test functionality", () => {
            instance = new Parser('[{"Nancy":"architect"},{"John":"developer"},{"Kate":"HR"}]');
            expect(instance.print()).to.equal("id|name|position\n0|Nancy|architect\n1|John|developer\n2|Kate|HR");
        });

        it("Check log", () => {
            instance.print();
            expect(instance._log).to.deep.equal(["0: print"]);
        });

        it("If an object has a property deleted : true, the object shouldn't be printed", () => {
            instance = new Parser('[{"Nancy":"architect"},{"John":"developer"},{"Kate":"HR"}]');
            instance.removeEntry("Kate");
            expect(instance.print()).to.deep.equal("id|name|position\n0|Nancy|architect\n1|John|developer");
        });
    });

    describe("addEntries function Unit Tests", () => {
        it("Test functionality", () => {
            instance = new Parser('[{"Nancy":"architect"},{"John":"developer"},{"Kate":"HR"}]');
            instance.addEntries("Steven:tech-support Edd:administrator");
            expect(instance._data).to.deep.equal([
                { "Nancy": 'architect' },
                { "John": 'developer' },
                { "Kate": 'HR' },
                { "Steven": 'tech-support' },
                { "Edd": 'administrator' }
            ]);
        });
    });
});