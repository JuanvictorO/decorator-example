import { Error } from "../Error";
import { PadraoErrorHandler } from "./PadraoErrorHandler";

export class ErrorNaoConhecido extends PadraoErrorHandler {
  handle(_: Error): string {
    return "Erro não conhecido, não foi possível tratá-lo!";
  }
}
