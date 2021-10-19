import { Error } from "./Error";
import { ErrorHandler } from "./ErroHandler";

const error = new Error(400, "Erro de falha qualquer");
console.log(new ErrorHandler(error).handle());
