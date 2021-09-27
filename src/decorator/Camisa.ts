import { iPropriedades } from "./iPropriedades";

export class Camisa implements iPropriedades {
  private marca = "Lacoste";
  private price = 50.0;
  private size = "G";

  getPrice(): number {
    return this.price;
  }
  getMarca(): string {
    return this.marca;
  }
  getSize(): string {
    return this.size;
  }
}
