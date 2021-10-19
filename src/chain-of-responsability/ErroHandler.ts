import { Error } from "./Error";
import { ErroUsuarioNaoAutenticado } from "./handlers/ErroUsuarioNaoAutenticado";
import { ErroUsuarioNaoPermitido } from "./handlers/ErroUsuarioNaoPermitido";
import { ErroUsuarioGenerico } from "./handlers/ErroUsuarioGenerico";
import { ErrorNaoConhecido } from "./handlers/ErroNaoConhecido";

export class ErrorHandler {
  constructor(protected error: Error) {}
  public handle(): string | undefined | void {
    // Instanciando handlers
    const semPermissao = new ErroUsuarioNaoAutenticado();
    const naoPermitido = new ErroUsuarioNaoPermitido();
    const erroGenerico = new ErroUsuarioGenerico();
    const erroDesconhecido = new ErrorNaoConhecido();

    // Chamando handlers na ordem escolhida
    semPermissao.setNext(naoPermitido);
    naoPermitido.setNext(erroGenerico);
    erroGenerico.setNext(erroDesconhecido);
    return semPermissao.handle(this.error);
  }
}
