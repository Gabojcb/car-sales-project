export class Models {
  id: number;
  name: string;
  description: string;
  age: number;
  color: string;
  price: number;
  quantity: number;

  descriptionBasic() {
    return `model name: ${this.name} year ${this.age} color ${this.color} and ${this.description}`;
  }

  constructor(id, name, description, age, color, price, quantity) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.age = age;
    this.color = color;
    this.price = price;
    this.quantity = quantity;
  }
}
