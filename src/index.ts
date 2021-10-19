import { Error } from "./chain-of-responsability/Error";
import { ErrorHandler } from "./chain-of-responsability/ErroHandler";

const error = new Error(401, "Erro de falha qualquer");

console.log(new ErrorHandler(error).handle());
