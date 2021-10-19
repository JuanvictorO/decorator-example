import { Error } from "../Error";

export abstract class PadraoErrorHandler {
  protected next: PadraoErrorHandler | null = null;

  setNext(next: PadraoErrorHandler): void {
    this.next = next;
  }

  abstract handle(error: Error): string | undefined;
}
