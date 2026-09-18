class Phone {
  constructor(brand, model, memory, ram) {
    this.brand = brand;
    this.model = model;
    this.memory = memory;
    this.ram = ram;
  }

  isWorking() {
    console.log(
      `${this.brand} ${this.model} (${this.memory}, ${this.ram}) is working`
    );
  }
}

const myPhone = new Phone('Xiaomi', '17t', 256, 16);
myPhone.isWorking();

class Iphone extends Phone {
  constructor(brand, model, memory, ram, battery) {
    super(brand, model, memory, ram);
    this.battery = battery;
  }

  inStock() {
    console.log(
      `${this.brand} ${this.model} (${this.memory}, ${this.ram}) has ${this.battery}% of battery and it is available for purchase!`
    );
  }
}

const newIphone = new Iphone('Apple', 'Iphone 17 Pro Max', 128, 12, 95);
newIphone.inStock();
