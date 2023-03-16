export class Brand {
  id: number;
  name: string;
  quantity: number;

  showBrand() {
    return this.name;
  }

  constructor(id, name, quantity) {
    this.id = id;
    this.name = name;
    this.quantity = quantity;
  }
}
