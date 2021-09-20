import { iPropriedades } from "./iPropriedades";

export class Decorator implements iPropriedades {
  constructor(protected product: iPropriedades) {}

  getPrice(): number {
    return this.product.getPrice();
  }
  getMarca(): string {
    return this.product.getMarca();
  }
  getSize(): string {
    return this.product.getSize();
  }
}
