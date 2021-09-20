import { Decorator } from './Decorator'

export class estampaFrente extends Decorator {
  getPrice(): number {
    return this.product.getPrice() + 10
  }
}
