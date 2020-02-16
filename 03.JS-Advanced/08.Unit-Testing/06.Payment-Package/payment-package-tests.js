const { expect } = require("chai");
const PaymentPackage = require("./payment-package");

describe("Payment Package Unit Tests", () => {
    describe("Instantiation tests", () => {
        it("Must be instantiated with 2 params (string, num)", () => {
            expect(new PaymentPackage("Fee", 1).name).to.equal("Fee");
            expect(new PaymentPackage("Fee", 1).value).to.equal(1);
            expect(new PaymentPackage("Fee", 1.1).value).to.equal(1.1);
        });
        it("If a param is missing, it's value will be set to undefined", () => {
            expect(() => new PaymentPackage("Fee")).to.throw(Error);
            expect(() => new PaymentPackage(1)).to.throw(Error);
        });
        it("If invalid param is passed, error will be thrown", () => {
            expect(() => new PaymentPackage({},1)).to.throw(Error);
            expect(() => new PaymentPackage("Fee", [])).to.throw(Error);
            expect(() => new PaymentPackage({}, [])).to.throw(Error);
            expect(() => new PaymentPackage("Fee", -1)).to.throw(Error);
            expect(() => new PaymentPackage("", 1)).to.throw(Error);
        });
    });
    describe("Accessor Name Unit tests", () => {
        describe("get name Unit tests", () => {
            it("get name should return name", () => {
                expect(new PaymentPackage("Fee",1).name).to.equal("Fee");
            });
        });
        describe("set name Unit tests", () => {
            let instance;
            
            beforeEach(() => {
                instance = new PaymentPackage("Fee", 1);
            });
            
            it("Passing a valid name should set a new value to name", () => {
                instance.name = "newFee";
                expect(instance.name).to.equal("newFee");
            });
            it("Passing a non-string param should throw an error", () => {
                expect(() => instance.name = {}).to.throw(Error);
                expect(() => instance.name = []).to.throw(Error);
                expect(() => instance.name = 1).to.throw(Error);
                expect(() => instance.name = true).to.throw(Error);
            });
            it("Passing an empty string should throw an error", () => {
                expect(() => instance.name = "").to.throw(Error);
            });
        }); 
    });
    describe("Accessor value Unit Tests", () => {
        describe("get value tests", () => {
            it("get value should return the value", () => {
                expect(new PaymentPackage("Fee", 1).value).to.equal(1);
            });
        });
        describe("set value tests", () => {
            let instance;
            
            beforeEach(() => {
                instance = new PaymentPackage("Fee", 1);
            });

            it("Passing a valid param should set a new value", () => {
                instance.value = 2;
                expect(instance.value).to.equal(2);
                instance.value = 1.1;
                expect(instance.value).to.equal(1.1);
                instance.value = 0;
                expect(instance.value).to.equal(0);
            });
            it("Passing a negative num should throw an error", () => {
                expect(() => instance.value = -1).to.throw(Error);
            });
            it("Passing a non-num param should throw an error", () => {
                expect(() => instance.value = {}).to.throw(Error);
                expect(() => instance.value = []).to.throw(Error);
                expect(() => instance.value = true).to.throw(Error);
                expect(() => instance.value = "string").to.throw(Error);
            });
        });
    });
    describe("Accessor VAT Unit Tests", () => {
        describe("get VAT tests", () => {
            it("get VAT should return the value", () => {
                //VAT default value is 20
                expect(new PaymentPackage("Fee", 1).VAT).to.equal(20);
            });
        });
        describe("set VAT tests", () => {
            let instance;
            
            beforeEach(() => {
                instance = new PaymentPackage("Fee", 1);
            });

            it("Passing a valid param should set a new VAT", () => {
                instance.VAT = 1;
                expect(instance.VAT).to.equal(1);
                instance.VAT = 1.1;
                expect(instance.VAT).to.equal(1.1);
                instance.VAT = 0;
                expect(instance.VAT).to.equal(0);
            });
            it("Passing a negative num should throw an error", () => {
                expect(() => instance.VAT = -1).to.throw(Error);
            });
            it("Passing a non-num param should throw an error", () => {
                expect(() => instance.VAT = {}).to.throw(Error);
                expect(() => instance.VAT = []).to.throw(Error);
                expect(() => instance.VAT = true).to.throw(Error);
                expect(() => instance.VAT = "string").to.throw(Error);
            });
        });
    });
    describe("Accessor active Unit Tests", () => {
        describe("get active Unit Tests", () => {
            it("get active should return the value", () => {
                //active default value is true
                expect(new PaymentPackage("Fee", 1).active).to.equal(true);
            });
        });
        describe("set active Unit Tests", () => {
            let instance;
            
            beforeEach(() => {
                instance = new PaymentPackage("Fee", 1);
            });

            it("Passing a valid param should set a new active", () => {
                instance.active = false;
                expect(instance.active).to.equal(false);
                instance.active = true;
                expect(instance.active).to.equal(true);
            });
            it("Passing a non-boolean param should throw an error", () => {
                expect(() => instance.active = {}).to.throw(Error);
                expect(() => instance.active = []).to.throw(Error);
                expect(() => instance.active = 1).to.throw(Error);
                expect(() => instance.active = "string").to.throw(Error);
            });
        });
    });
    describe("toString function Unit Tests", () => {
        const output = [
            `Package: Fee`,
            `- Value (excl. VAT): 1`,
            `- Value (VAT 20%): 1.2`
        ];
        const output2 = [
            `Package: Fee (inactive)`,
            `- Value (excl. VAT): 1`,
            `- Value (VAT 20%): 1.2`
        ];
        let result = output.join('\n');
        let result2 = output2.join('\n');
        it("If active is set to false, should return the package and name with '(inactive) added to the end'", () => {
            let instance = new PaymentPackage("Fee", 1);
            instance.active = false;
            expect(instance.toString()).to.equal(result2);
        });
        it("If active is set to true, should return the package unchanged", () => {
            let instance = new PaymentPackage("Fee", 1);
            expect(instance.toString()).to.equal(result);
        });
    });
});