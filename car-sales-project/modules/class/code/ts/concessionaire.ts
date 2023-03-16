export class Concessionaire {
  name: string;
  type: string;
  services: string;
  numBrand: number;

  showServices() {
    return this.services;
  }

  constructor(name, type, services, numBrand) {
    this.name = name;
    this.type = type;
    this.services = services;
    this.numBrand = numBrand;
  }
}
