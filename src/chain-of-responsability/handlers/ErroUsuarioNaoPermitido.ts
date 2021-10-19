import { Error } from "../Error";
import { PadraoErrorHandler } from "./PadraoErrorHandler";

export class ErroUsuarioNaoPermitido extends PadraoErrorHandler {
  handle(error: Error): string | undefined {
    if (error.code === 403) {
      return "Usuário sem permissão de acesso!";
    } else if (this.next) {
      return this.next.handle(error);
    }
  }
}
