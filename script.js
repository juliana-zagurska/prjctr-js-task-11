'use strict';

class Properties {
    constructor(name, brand, material, price, color){
        this.name = name;
        this.brand = brand;
        this.material = material;
        this.price = price;
        this.color = color;
    }
}

class FashionItem extends Properties {
    #rememberClientsPinCodes;

    constructor(name, brand, material, price, color){
       super(name, brand, material, price, color);
        this.#rememberClientsPinCodes = '';
    }

    representItem() {
        console.log(`In our shop are presented various brands of ${this.material} ${this.name}s. You can purchase ${this.brand} ${this.name} in ${this.color} color. Price starts from ${this.price}$.
        `);
    }

    itemOrdered(){
        if(this.price <= 100){
            this.#rememberClientsPinCodes = 'price is too low to steal the card data';
            console.log("thanks for buying with us!");
        }else{
            this.#rememberClientsPinCodes = 'we stole clients card data successfully!';
            console.log("you made us so happy today!");
        }
    }

    inStock(){}
    inShopsOnly(){}
    delivery(){}
}

class Bags extends FashionItem {
    constructor(name, brand, material, price, color, type){
        super(name, brand, material, price, color);
        this.type = type;
    }
}

class Accessories extends FashionItem {
    constructor(name, brand, gems, material, color, price){
        super(name, brand, material, price, color);
        this.gems = gems;
    }
}

class Dresses extends Properties {
    #countDresses;
    
    constructor(name, brand, material, price, color, seasonCollection){
       super(name, brand, material, price, color);
        this.seasonCollection = seasonCollection;
        this.#countDresses = 0;
    }

    representItem() {
        console.log(`In our shop are presented various brands of ${this.name}es. You can purchase ${this.material} ${this.brand} ${this.name} in ${this.color} color. Price starts from ${this.price}.
        `);
    }

    inStock(){}
    inShopsOnly(){}
    delivery(){
        this.#countDresses += 1;
    }
}

class Shoes extends Properties {
    #countShoes;

    constructor(name, brand, material, price, color, size){
        super(name, brand, material, price, color);
        this.size = size;
        this.#countShoes = 0;
    }

    representItem() {
        console.log(`In our shop are presented various brands of ${this.name}es. You can purchase ${this.material} ${this.brand} ${this.name} in ${this.color} color. Price starts from ${this.price}.
        `);
    }

    inStock(){}
    inShopsOnly(){}
    delivery(){
        this.#countShoes +=1;
    }
}

const bag = new Bags('bag', 'Prada', 'leather', '999', 'black', 'casual');
const accessory = new Accessories('jewelry', 'Tiffany',  'rubin, diamonds, swarovski', 'silver, gold, platinum', 'pink gold, yellow gold, white titan, black night', '199');
const dress = new Dresses('dress', 'Uniqlo', 'cotton', '39$', 'white, green, orange', 'casual');
const shoe = new Shoes('sneakers', 'Adidas', 'faux leather', '99$', 'green, blue navy, pink', '35-45');

bag.representItem();
bag.itemOrdered();

dress.representItem();
accessory.representItem();
accessory.itemOrdered();
shoe.representItem();
