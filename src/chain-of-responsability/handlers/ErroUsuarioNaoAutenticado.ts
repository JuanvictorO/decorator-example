import { Error } from "../Error";
import { PadraoErrorHandler } from "./PadraoErrorHandler";

export class ErroUsuarioNaoAutenticado extends PadraoErrorHandler {
  handle(error: Error): string | undefined {
    if (error.code == 401) {
      return "Usuário não Autenticado para realizar operação!";
    } else if (this.next) {
      return this.next.handle(error);
    }
  }
}
