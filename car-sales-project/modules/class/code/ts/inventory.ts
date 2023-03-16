export class Inventory {
  #name: string;
  storage: string;
  description: string;
  numProduct: number;

  get name() {
    return this.#name;
  }

  addProduct(newObj) {
    const textArr = this.storage.split(" ");
    return textArr.push(newObj);
  }

  deleteProduct(obj) {
    const textArr = this.storage.split(" ");
    return textArr.filter((element) => element != obj);
  }

  constructor(name, storage, description, numProduct) {
    this.#name = name;
    this.storage = storage;
    this.description = description;
    this.numProduct = numProduct;
  }
}

//argument of type any not assi
