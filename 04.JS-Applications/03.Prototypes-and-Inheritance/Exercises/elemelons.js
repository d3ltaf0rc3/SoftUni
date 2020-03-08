function elemelons() {
    class Melon {
        constructor(weight, melonSort) {
            if (new.target === Melon) {
                throw new Error("Abstract class cannot be instantiated directly");
            }
            this.weight = weight;
            this.melonSort = melonSort;
            this.element = "";
        }

        get elementIndex() {
            return this.weight * this.melonSort.length;
        }
    
        toString() {
            return `Element: ${this.element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
        }
    }
    
    class Watermelon extends Melon{
        constructor(weight, melonSort) {
            super(weight, melonSort);
            super.element = "Water";
        }
    }
    
    class Firemelon extends Melon{
        constructor(weight, melonSort) {
            super(weight, melonSort);
            super.element = "Fire";
        }
    }
    
    class Earthmelon extends Melon{
        constructor(weight, melonSort) {
            super(weight, melonSort);
            super.element = "Earth";
        }
    }
    
    class Airmelon extends Melon{
        constructor(weight, melonSort) {
            super(weight, melonSort);
            super.element = "Air";
        }
    }
    
    class Melolemonmelon extends Watermelon{
        constructor(weight, melonSort) {
            super(weight, melonSort);
            super.element = "Water";
            this.elements = ["Fire", "Earth", "Air", "Water"];
        }
        
        morph() {
            let element = this.elements.shift();
            super.element = element;
            this.elements.push(element);
        }
    }

    return {
        Melon,
        Watermelon,
        Firemelon,
        Earthmelon,
        Airmelon,
        Melolemonmelon
    };
}