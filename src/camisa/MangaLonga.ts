import { Decorator } from './Decorator'

export class mangaLonga extends Decorator {
  getPrice(): number {
    return this.product.getPrice() + 20
  }
}
