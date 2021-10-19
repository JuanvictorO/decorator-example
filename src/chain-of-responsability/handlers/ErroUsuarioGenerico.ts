import { Error } from "../Error";
import { PadraoErrorHandler } from "./PadraoErrorHandler";

export class ErroUsuarioGenerico extends PadraoErrorHandler {
  handle(error: Error): string | undefined {
    if (error.code >= 400 && error.code < 500) {
      return "Erro de Usuário desconhecido!";
    } else if (this.next) {
      return this.next.handle(error);
    }
  }
}
