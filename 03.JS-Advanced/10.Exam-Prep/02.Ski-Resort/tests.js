const SkiResort = require("./solution");
const { expect } = require("chai");

describe("SkiResort Unit Tests", () => {
    let instance;
    beforeEach(() => {
        instance = new SkiResort('SkiResort');
    });

    describe('Instantiation Unit Tests', () => {
        it('Instantiation', () => {
            expect(instance.name).to.equal('SkiResort');
            expect(instance.voters).to.equal(0);
            expect(instance.hotels).to.deep.equal([]);
        });
    });

    describe('getter bestHotel Unit Tests', () => {
        it('If there are no voters, should return a proper message', () => {
            expect(instance.bestHotel).to.equal("No votes yet");
        });
        it('If there are voters, should return the best hotel', () => {
            instance.voters = 1;
            instance.hotels.push({ name: 'Hotel', beds: 1, points: 0 });
            instance.hotels.push({ name: 'betterHotel', beds: 1, points: 1 });
            expect(instance.bestHotel).to.equal("Best hotel is betterHotel with grade 1. Available beds: 1");
        });
    });

    describe('Function build Unit Tests', () => {
        it("Test functionality", () => {
            expect(instance.build('Hotel', 1)).to.equal("Successfully built new hotel - Hotel");
            expect(instance.hotels).to.deep.equal([{ name: "Hotel", beds: 1, points: 0 }]);
        });
        it("If name is an empty string or beds are less than 1, an error is thrown", () => {
            expect(() => instance.build('', 1)).to.throw(Error, "Invalid input");
            expect(() => instance.build('Hotel', 0)).to.throw(Error, "Invalid input");
        });
    });

    describe('Function book Unit Tests', () => {
        it("Test functionality", () => {
            instance.build('Hotel', 1);
            expect(instance.book('Hotel', 1)).to.equal("Successfully booked");
            expect(instance.hotels[0].beds).to.equal(0);
        });
        it("If hotel is an empty string or beds are less than 1, an error is thrown", () => {
            expect(() => instance.book('', 1)).to.throw(Error, "Invalid input");
            expect(() => instance.book('Hotel', 0)).to.throw(Error, "Invalid input");
        });
        it("If hotel doesn't exist or has less beds than input, an error is thrown", () => {
            instance.build('Hotel', 1);
            expect(() => instance.book('NonExistent', 1)).to.throw(Error, "There is no such hotel");
            expect(() => instance.book('Hotel', 2)).to.throw(Error, "There is no free space");
        });
    });

    describe("Function leave Unit Tests", () => {
        it("Test functionality", () => {
            instance.build('Hotel', 10);
            instance.book('Hotel', 9);
            expect(instance.leave('Hotel', 9, 10)).to.equal("9 people left Hotel hotel");
            expect(instance.hotels[0].points).to.equal(90);
            expect(instance.hotels[0].beds).to.equal(10);
            expect(instance.voters).to.equal(9);
            expect(instance.hotels[0].name).to.equal("Hotel");
        });
        it("If hotel is an empty string and/or beds are less than 1, an error is thrown", () => {
            expect(() => instance.leave("", 1, 1)).to.throw(Error, "Invalid input");
            expect(() => instance.leave("Hotel", 0, 1)).to.throw(Error, "Invalid input");
        });
        it("If hotel doesn't exist, an error is thrown", () => {
            expect(() => instance.leave("NonExistent", 1, 1)).to.throw(Error, "There is no such hotel");
        });
    });
    
    describe("Function averageGrade Unit Tests", () => {
        it("Test functionality", () => {
            instance.build("Hotel1", 1);
            instance.build("Hotel2", 1);
            instance.voters = 2;
            instance.hotels[0].points = 1;
            instance.hotels[1].points = 1;
            expect(instance.averageGrade()).to.equal("Average grade: 1.00");
        });
        it("If there are no voters, should return a proper message", () => {
            expect(instance.averageGrade()).to.equal("No votes yet");
        });
    });
});