export class Headquarter {
  #id: number;
  #name: string;
  sector: string;
  installation: string;

  get name() {
    return this.#name;
  }

  constructor(id, name, sector, installation) {
    this.#id = id;
    this.#name = name;
    this.sector = sector;
    this.installation = installation;
  }
}
