import { Decorator } from './Decorator'

export class estampaCostas extends Decorator {
  getPrice(): number {
    return this.product.getPrice() + 30
  }
}
