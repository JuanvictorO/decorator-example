import { Impressao3dFacade } from "./facade/Impressao3dFacade"

const arquivoSLT = "/* INSTRUÇÕES DE UM ARQUIVO DE IMPRESSÃO 3D */";

const impressao = new Impressao3dFacade();

impressao.imprimir(arquivoSLT);