class Drink {
  #temp;
  constructor(name, size, price, temp) {
    this.name = name;
    this.size = size;
    this.price = price;
    this.#temp = temp;
  }

  getDrinkInfo() {
    return `name: ${this.name}, size: ${this.size}, price: ${this.price}`;
  }

  getDrinkTemp() {
    return this.#temp;
  }

  setDrinkTemp(newTemp) {
    if (typeof newTemp !== 'number') return;
    this.#temp = newTemp;
  }

  #makeDrink(temp) {
    this.setDrinkTemp(temp);
    console.log(
      `Cooking ${this.name}... temperature is set at ${this.getDrinkTemp()}`
    );
  }

  serveDrink(temp = this.getDrinkTemp()) {
    this.#makeDrink(temp);
    console.log(
      `Your order (${this.name}, ${this.size}) is ready! The price is ${this.price}$`
    );
  }
}

class Coffee extends Drink {
  constructor(name, size, price, temp, grainType, milkType, sugar) {
    super(name, size, price, temp);
    this.grainType = grainType;
    this.milkType = milkType;
    this.sugar = sugar;
  }

  getDrinkInfo() {
    const baseInfo = super.getDrinkInfo();
    return `${baseInfo}, grain: ${this.grainType}, milk: ${this.milkType}, sugar: ${this.sugar}`;
  }
}

class Tea extends Drink {
  constructor(name, size, price, type, lemon, sugar) {
    super(name, size, price, 90);
    this.type = type;
    this.lemon = lemon;
    this.sugar = sugar;
  }

  getDrinkInfo() {
    const baseInfo = super.getDrinkInfo();
    return `${baseInfo}, type: ${this.type}, lemon: ${this.lemon}, sugar: ${this.sugar}`;
  }
}

class Lemonade extends Drink {
  constructor(name, size, price, ice, flavor) {
    super(name, size, price, 5);
    this.ice = ice;
    this.flavor = flavor;
  }

  getDrinkInfo() {
    const baseInfo = super.getDrinkInfo();
    return `${baseInfo}, ice: ${this.ice}, flavor: ${this.flavor}`;
  }
}

class Cafe {
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }

  getInfo() {
    console.log(
      `The Cafe is called: ${this.name}. ${this.name} is located in ${this.location}`
    );
  }

  orderDrink(drink, temp) {
    console.log(`${this.name} took the order...`);
    drink.serveDrink(temp);
  }
}

const cafe = new Cafe('Cafellito', 'Tashkent');

const coffee = new Coffee('americano', 'small', 20, 70, 'robusta', '1%', true);
const tea = new Tea('bardak', 'small', 5, 'green', true, true);
const moxito = new Lemonade('moxito', 'big', 20, true, 'lime');

cafe.getInfo();

cafe.orderDrink(coffee, 75);
console.log(coffee.getDrinkInfo());

cafe.orderDrink(tea, 90);
console.log(tea.getDrinkInfo());

cafe.orderDrink(moxito, 3);
console.log(moxito.getDrinkInfo());
