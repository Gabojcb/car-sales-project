/* interface ICompany {
  id: string;
  name: string;
  description: string;
  headquartes: number;
} */

class Company {
  #id: number;
  name: string;
  description: string;
  headquarters: number;

  get Id() {
    return this.#id;
  }

  getDescriptionCompany() {
    return `we are a ${this.name} and our company tries to ${this.description} `;
  }

  constructor(id, name, description, headquarters) {
    this.#id = id;
    this.name = name;
    this.description = description;
    this.headquarters = headquarters;
  }
}

/* const sony = new Company(1, "sony", "empresa de juegos", 2);
console.log(sony.getDescriptionCompany); */
