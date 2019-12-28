class Laptop {
    constructor(info, quality) {
        this.info = info;
        this.quality = quality;
        this.isOn = false;
        this.turnOn = function () {
            this.isOn = true;
            this.quality -= 1;
        };
        this.turnOff = function () {
            this.isOn = false;
            this.quality -= 1;
        };
        this.showInfo = function () {
            let jsonInfo = JSON.stringify(this.info);
            return jsonInfo;
        };
    }
    get price() {
        let price = 800 - (this.info.age * 2) + (this.quality * 0.5);
        return price;
    }
}
let info = {producer: "Dell", age: 2, brand: "XPS"};
let laptop = new Laptop(info, 10);
laptop.turnOn();
console.log(laptop.showInfo());
laptop.turnOff();
console.log(laptop.quality);
laptop.turnOn();
console.log(laptop.isOn);
console.log(laptop.price);	  