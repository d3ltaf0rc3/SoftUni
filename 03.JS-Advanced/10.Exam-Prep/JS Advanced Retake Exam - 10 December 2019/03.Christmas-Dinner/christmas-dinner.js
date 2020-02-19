class ChristmasDinner {
    constructor(budget) {
        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }

    set budget(num) {
        if (num >= 0 && typeof num === "number") {
            this._budget = num;
        }
        else {
            throw new Error("The budget cannot be a negative number");
        }
    }

    get budget() {
        return this._budget;
    }

    shopping(input) {
        let product = input[0];
        let price = input[1];

        if (price > this._budget) {
            throw new Error("Not enough money to buy this product");
        }

        this.products.push(product);
        this._budget -= price;
        return `You have successfully bought ${product}!`;
    }

    recipes(input) {
        let name = input.recipeName;
        let products = input.productsList;

        let areProductsEnough = products.every(element => this.products.includes(element));
        if (areProductsEnough) {
            this.dishes.push(input);
            return `${name} has been successfully cooked!`;
        }
        throw new Error("We do not have this product");
    }

    inviteGuests(name, dish) {
        if (typeof name === "string", typeof dish === "string") {
            let doesDishExist = this.dishes.some(element => element.recipeName === dish);
            if (!doesDishExist) {
                throw new Error("We do not have this dish");
            } else if (this.guests.hasOwnProperty(name)) {
                throw new Error("This guest has already been invited");
            } else {
                this.guests[name] = dish;
                return `You have successfully invited ${name}!`;
            }
        }
    }

    showAttendance() {
        let output = "";
        for (const name in this.guests) {
            let productsList = this.dishes.filter(element => element.recipeName === this.guests[name])[0].productsList;
            output += `${name} will eat ${this.guests[name]}, which consists of ${productsList.join(", ")}\n`;
        }
        output = output.slice(0,output.length - 1);
        return output;
    }
}

let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());